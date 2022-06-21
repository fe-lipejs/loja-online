import style from '../styles/produtos.module.css'

function Categoria () {
    return(
        <>
            <div className={style.content}>
                <div className={style.cont}></div>
                <div className={style.nome}>CAMISA PREMIUM ESTAMPA TESTE</div>
                <div className={style.preco}>R$ 119,90</div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default Categoria