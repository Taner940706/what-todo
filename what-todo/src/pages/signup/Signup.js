
import {useState} from 'react'
import { useSignup } from '../../hooks/useSignup'
import styles from './Signup.module.css'

export default function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {error, signup} = useSignup()

    const handleSubmit = (e) =>{
        e.preventDefault()
        signup(email, password)
        
    }

    return (
        <form onSubmit={handleSubmit} className={styles['sign-form']}>
            <h2>Login</h2>
            <label>
                <span>Email:</span>
                <input type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </label>
            <label>
                <span>Password:</span>
                <input type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
            </label>
            <button className='btn'>Signup</button>
            {error && <p>error</p>}
        </form>
    )
}