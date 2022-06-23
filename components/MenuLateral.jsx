import { useContext, useEffect, useState } from "react";
import style from "../styles/styleComponents/menuLateral.module.css";
import { AppContext } from '../components/Menu';
import Image from 'next/image';



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
                    <div className={style.element}>INICIO</div>
                    <hr></hr>
                    <div className={style.element}>MASCULINO</div>
                    <div className={style.element}>ACESSÓRIOS</div>
                    <div className={style.element}>LOGIN</div>
                    <div className={style.element}>CONTATO</div>
                </div>
            </div>
            <div
                onClick={() => setActiv(!activ)}

                className={activ ? style.blur : style.blurOff}></div>
        </>
    )
}
