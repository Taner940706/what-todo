import {useState} from 'react'
import styles from './Signup.module.css'

export default function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        
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
        </form>
    )
}