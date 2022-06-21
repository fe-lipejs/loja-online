import styles from '../styles/menu.module.css';
import Image from 'next/image';

function Menu() {

    return (
        <>
            <div className={styles.menu}>
                <div className={styles.elementos}>
                    <Image
                        src="/logo/ham.svg"
                        height={30}
                        width={30}
                        alt="Logo"
                    />
                    <div className={styles.menuName}></div>
                 </div>
                
                <div className={styles.logo}> 
                    <Image
                        src="/logo/logo.png"
                        height={40}
                        width={50}
                        alt="Logo"
                    />
                </div>
                <div className={styles.elementosFinal}>
                    <div className={styles.elementos + ' ' + styles.paraDireita}>
                        <Image
                            src="/logo/search.svg"
                            height={20}
                            width={20}
                            alt="Logo"
                        />
                    </div>
                    <div className={styles.elementos + ' ' + styles.paraDireita}>
                        <Image
                            src="/logo/cart.svg"
                            height={20}
                            width={20}
                            alt="Logo"
                        />
                    </div>
                    <div className={styles.elementos + ' ' + styles.paraDireita}>
                       {/*   <Image
                            src="/logo/login.svg"
                            height={20}
                            width={20}
                            alt="Logo"
                        /> */}
                    </div>
                </div>
            </div>
            </>
            )
}

            export default Menu
