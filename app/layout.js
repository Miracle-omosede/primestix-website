import FullScreenNavbar from '@/components/FullScreenNavbar'
import './globals.css'
import '@/styles/main.scss'
import 'remixicon/fonts/remixicon.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <div className='fixed top-0 w-full bg-white z-[9999] shadow-lg'>
        <FullScreenNavbar/>
        </div>
        {children}
        </body>
    </html>
  )
}
