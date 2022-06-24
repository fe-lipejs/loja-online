import { useContext, useEffect, useState } from "react";
import style from "../styles/styleComponents/menuLateral.module.css";
import { AppContext } from '../components/Menu';
import Image from 'next/image';
import Link from "next/link";



export default function MenuLateral({ activ, setActiv }) {
    console.log(setActiv)


    /* let [activ, setActiv] = useState(active.props)

    useEffect(() => {
        setActiv(active.props)
        console.log("MENU LATERAL: " + activ)
    })

    function handleClick() {
        const a = () => setActiv(!active.props)
        console.log("OIAA " + active)
        return active
    }
     */return (
        <>

            <div className={activ ? style.content : style.contentOff}>
                <div className={style.cont}>
                    <div className={style.hamClose}>
                        <Image
                            onClick={() => setActiv(!activ)}
                            src="/logo/ham.svg"
                            height={30}
                            width={30}
                            alt="Logo"
                        />
                    </div>
                    <Link href="/">
                        <a>  <div className={style.element}>INICIO</div>  </a>
                    </Link>
                    <hr></hr>
                    <Link href="/produtos">
                        <a>
                            <div className={style.element}>MASCULINO</div>
                            <div className={style.element}>ACESSÓRIOS</div>
                        </a>
                    </Link>
                    <Link href="/login">
                        <a> <div className={style.element}>LOGIN</div>  </a>
                    </Link>
                    <Link href="/contato">
                        <a> <div className={style.element}>CONTATO</div>  </a>
                    </Link>
                </div>
            </div>
            <div
                onClick={() => setActiv(!activ)}

                className={activ ? style.blur : style.blurOff}></div>
        </>
    )
}
