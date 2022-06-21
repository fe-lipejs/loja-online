import style from '../styles/styleComponents/categorias.module.css'

function Categoria () {
    return(
        <>
            <div className={style.content}>
                <div className={style.cont}>MASCULINO</div>
                <div className={style.cont}>FEMININO</div>
                <div className={style.cont}>ACESSÓRIOS</div>
            </div>
        </>
    )
}

export default Categoria