import style from '../styles/login.module.css'
import Menu from '../components/Menu'
import { useForm } from 'react-hook-form'

export default function Login(params) {
    const { register, handleSubmit } = useForm()

    function handleSignIn(data) {
        console.log(data)
    }
    return (
        <>
            <Menu />
            <br />
            <div className={style.content}>
                <form onSubmit={handleSubmit(handleSignIn)} method='post' className={style.form}>
                    <div className={style.cont}>
                        <div className={style.titulo}>Faça o seu Login</div>
                        <div className={style.emailLb} htmlFor="email">Email</div>
                        <input
                            {...register('email')}
                            type="text"
                            autoComplete='email'
                            name='email'
                            className={style.email}
                        />
                        <br />
                        <div className={style.senhaLb} htmlFor="senha">Senha</div>
                        <input
                            {...register('senha')}
                            type="password"
                            autoComplete='senha'
                            name='senha'
                            className={style.senha}
                        />
                        <br />
                        <button
                            type="submit"
                            className={style.submit}
                        >Sign In</button>
                    </div>
                </form>
            </div>
        </>
    )

}