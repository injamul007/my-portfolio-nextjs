import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request) {
  let requestData = null
  
  try {
    // Read the request body once and store it
    requestData = await request.json()
    const { name, email, subject, message } = requestData

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Log the message first (always works)
    console.log('📧 NEW CONTACT FORM MESSAGE:')
    console.log('================================')
    console.log(`👤 Name: ${name}`)
    console.log(`📧 Email: ${email}`)
    console.log(`📋 Subject: ${subject}`)
    console.log(`💬 Message: ${message}`)
    console.log(`📅 Time: ${new Date().toLocaleString()}`)
    console.log('================================')

    // Check if we have a valid Resend API key
    const hasValidResendKey = process.env.RESEND_API_KEY && 
                             process.env.RESEND_API_KEY !== 'your-resend-api-key-here' &&
                             process.env.RESEND_API_KEY.startsWith('re_')

    if (!hasValidResendKey) {
      console.log('⚠️  No valid Resend API key found. Message logged to console.')
      console.log('   To receive emails, get your API key from https://resend.com/')
      
      return NextResponse.json(
        { message: 'Message received successfully! Your message has been logged and will be reviewed.' },
        { status: 200 }
      )
    }

    // Try to send email using Resend
    try {
      console.log('Sending email via Resend...')
      
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      const emailResult = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['injamul007hoque@gmail.com'],
        replyTo: email,
        subject: `${subject} - From ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
              <h1 style="color: white; margin: 0; font-size: 24px; text-align: center;">🎉 New Contact Form Message</h1>
            </div>
            
            <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <div style="margin-bottom: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <h3 style="margin: 0 0 10px 0; color: #1f2937; font-size: 16px;">👤 Sender Information</h3>
                <p style="margin: 5px 0; color: #4b5563;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0; color: #4b5563;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
                <p style="margin: 5px 0; color: #4b5563;"><strong>Subject:</strong> ${subject}</p>
              </div>
              
              <div style="margin-bottom: 20px; padding: 15px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #10b981;">
                <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 16px;">💬 Message</h3>
                <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">
                  <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <div style="text-align: center; padding: 20px; background-color: #f3f4f6; border-radius: 8px;">
                <p style="margin: 0; color: #6b7280; font-size: 14px;">
                  📅 Received on ${new Date().toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 15px;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                This message was sent from your portfolio contact form<br>
                <strong>Reply directly to this email to respond to ${name}</strong>
              </p>
            </div>
          </div>
        `,
        text: `
New Contact Form Message

From: ${name}
Email: ${email}
Subject: ${subject}
Date: ${new Date().toLocaleString()}

Message:
${message}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to ${name}.
        `
      })

      // Check if email was sent successfully
      if (emailResult.data && emailResult.data.id) {
        console.log('✅ Email sent successfully via Resend:', emailResult.data.id)
        return NextResponse.json(
          { message: 'Email sent successfully!' },
          { status: 200 }
        )
      } else if (emailResult.error) {
        console.error('❌ Resend API error:', emailResult.error)
        throw new Error(`Resend API error: ${emailResult.error.message}`)
      } else {
        console.log('⚠️  Resend response unclear:', emailResult)
        throw new Error('Unclear response from Resend API')
      }

    } catch (resendError) {
      console.error('❌ Resend email failed:', resendError.message)
      
      // Still return success since message is logged
      return NextResponse.json(
        { message: 'Message received successfully! Your message has been logged and will be reviewed.' },
        { status: 200 }
      )
    }

  } catch (error) {
    console.error('❌ Contact form error:', error.message)
    
    // Log the message as fallback (use stored requestData to avoid reading body twice)
    if (requestData) {
      const { name, email, subject, message } = requestData
      console.log('📧 CONTACT FORM MESSAGE (Error fallback):')
      console.log('================================')
      console.log(`👤 Name: ${name}`)
      console.log(`📧 Email: ${email}`)
      console.log(`📋 Subject: ${subject}`)
      console.log(`💬 Message: ${message}`)
      console.log(`📅 Time: ${new Date().toLocaleString()}`)
      console.log(`❌ Error: ${error.message}`)
      console.log('================================')
    }

    return NextResponse.json(
      { message: 'Message received successfully! Your message has been logged and will be reviewed.' },
      { status: 200 }
    )
  }
}