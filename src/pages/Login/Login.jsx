import React from 'react'
import "./Login.module.css"
import { useAuthentication } from '../../hooks/useAuthentication'
import { useEffect, useState } from 'react'
const Login = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [error , setError] = useState("")

    const{login , error:authError,loading} = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("")

        const user ={
            email,
            password
        }
        const res  = await login(user)
        console.log(res)
    }
    useEffect(()=> {
        console.log(authError)
        if(authError){
            setError(authError)
        }
    },[authError])
    
  return (
   <>
   <div className={styles.login}>
        <h1>Entrar</h1>
        <p>Faça login em nossa Plataforma de desenvolvimento</p>
        <form onSubmit={handleSubmit}>
            <label >
                    <span>Email</span>
                    <input type="email"
                    name='email'
                    required
                    placeholder='E-mail do Usurio'
                    onChange={(e)=>  setEmail(e.target.value)}
                    value={email}
                    />
            </label>
            <label >
                    <span>Senha</span>
                    <input type="password"
                    name='password'
                    required
                    placeholder='Insira sua Senha'
                    onChange={(e)=>  setPassword(e.target.value)}
                    value={password}
                    />
            </label>
            {!loading && <button className='btn'> Entrar</button>}
            {loading && <button className='btn' disabled> Aguarde ...</button>}
            {error && <p>{error}</p>}

        </form>
   </div>
   </>
  )
}

export default Login
