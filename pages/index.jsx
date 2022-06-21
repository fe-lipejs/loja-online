import Categoria from '../components/categorias'
import Produtos from '../components/produtos'
import Menu from '../components/Menu'
import Style from '../styles/index.module.css'

function Index() {
    return (
        <>
            <Menu></Menu>
            <h3>IMPORTADOS, QUALIDADE e PRESTAÇÃO</h3>
            <Categoria />
            <div className={Style.produtos}>
                <Produtos />
                <Produtos />
                <Produtos />
                <Produtos />
                <Produtos />
                <Produtos />
            </div>
        </>
    )
}

export default Index
