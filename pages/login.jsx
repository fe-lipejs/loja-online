import style from '../styles/login.module.css'
import Menu from '../components/Menu'

export default function Login (params) {
    return(
        <>
        <Menu/>
        <br />
        <div className={style.content}>
            <form onSubmit="{submitLogin}" className={style.form}>
                <label htmlFor="email">Enail</label>
                <input 
                    type="text"
                    autoComplete='email'
                    name='email'
                    className={style.email} 
                />
                <label htmlFor="senha">Senha</label>
                <input 
                    type="text"
                    autoComplete='senha'
                    name='senha'
                    className={style.senha} 
                />
                <button 
                    type="submit"
                    className={style.submit} 
                >Sign In</button>
            </form>
        </div>
        </>
    )
    
}