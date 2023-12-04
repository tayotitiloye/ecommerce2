import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import AuthProvider from 'src/components/AuthProvider'
import Navbar from 'src/components/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import Providers from 'src/components/Providers'
import Footer from 'src/components/Footer'
import ThemeProviders from 'src/components/ThemeProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tayo ecommerce App',
  description: 'home of shopping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <ThemeProviders>
              <AuthProvider>
                <Providers>

                  
                      <Navbar/>
                          {children}
                      <ToastContainer position='bottom-right' theme='dark' autoClose={ 3000} />
                      <Footer />
                
                </Providers>  
          </AuthProvider>
          </ThemeProviders>
              
      </body>
    </html>
  )
}
