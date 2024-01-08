import Image from 'next/image'
import styles from './page.module.css'
import DeskBack from './../../public/background/background-pattern-desktop.svg'
import MobBack from './../../public/background/background-pattern-mobile.svg'
import FaqCard from './components/FaqCard/FaqCard'

export default function Home() {
  return (
    <main className={styles.main}>
         <div className={styles.backgroundImg}>
          <Image src={DeskBack} className={styles.background} width={2000} height={'auto'} />
         </div>
        <div className={styles.faqContainer}>
        <FaqCard/>
        </div>

    
    </main>
  )
}
