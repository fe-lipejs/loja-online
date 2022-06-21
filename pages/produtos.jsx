import Menu from "../components/Menu"
import Style from "../styles/produtos.module.css";

function MyApp({ Component, pageProps }) {
    return (
    <>
        <Menu></Menu>
        <div className={Style.contentProduto}>
        <div className={Style.contProduto}>
            <div className={Style.imagemProduto}></div>
            <div className={Style.nomeProduto}>CAMISA ANIME PREMIUM</div>
            <div>
                <span className={Style.precoProduto}>R$ 119.90</span>
                <span className={Style.precoPromProduto}>R$ 89.90</span>
            </div>
        </div>
        </div>
    </>
    )
  }
  
  export default MyApp
  