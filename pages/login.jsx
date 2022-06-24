import style from '../styles/login.module.css'
import Menu from '../components/Menu'

export default function Login (params) {
    const submitLogin = async (event) => {
        event.preventDefault()
        console.log(event.target)
    }
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
                <br />
                <input 
                    type="password"
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