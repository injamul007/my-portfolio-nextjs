import './globals.css'
import LightweightSmoothScroll from './components/LightweightSmoothScroll'
import WelcomeOverlay from './components/WelcomeOverlay'
import MouseTrail from './components/MouseTrail'

export const metadata = {
  title: 'Injamul Hoque - Web Dev Portfolio',
  description: 'Building modern, user-friendly web applications with MERN stack',
  icons: {
    icon: 'https://i.ibb.co.com/rGFR1Wyr/IH-logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var prefersDark = savedTheme === 'dark' || (!savedTheme);
                  if (prefersDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  // Fallback to dark mode if localStorage fails
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-white transition-colors duration-300">
        <MouseTrail />
        <WelcomeOverlay />
        <LightweightSmoothScroll>
          {children}
        </LightweightSmoothScroll>
      </body>
    </html>
  )
}