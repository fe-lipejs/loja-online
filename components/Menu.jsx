import styles from '../styles/styleComponents/menu.module.css';
import MenuLateral from '../components/MenuLateral';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export function Menu() {


    const [active, setActive] = useState(false);

    return (
        <>

            <MenuLateral activ={active} setActiv={setActive}></MenuLateral>
            <div className={styles.menu}>
                <div className={styles.elementos}
                    onClick={() => setActive(!active)}
                >
                    {console.log("MENU: " + active)}
                    <Image
                        src="/logo/ham.svg"
                        height={30}
                        width={30}
                        alt="Logo"
                    />
                    <div className={styles.menuName}></div>
                </div>
                <Link href="/">
                    <div className={styles.logo}>
                        <Image
                            src="/logo/logo.png"
                            height={40}
                            width={50}
                            alt="Logo"
                        />
                    </div>
                </Link>
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
