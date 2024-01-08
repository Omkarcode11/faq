import Image from 'next/image'
import './globals.css'
import BackgroundImg from '/public/background/background-pattern-desktop.svg'

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&family=Rubik+Doodle+Shadow&family=Work+Sans:wght@100;200;600&display=swap" rel="stylesheet"/>
      </head>

      <body>
        <div className='backgroundImage'>
        <Image src={BackgroundImg} width={1400} height={'auto'}/>
        </div>
        {children}
        </body>
    </html>
  )
}
