import {auth} from '../firebase/config'
import {signOut} from 'firebase/auth'
import {useAuthContext} from "../hooks/useAuthContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const logout = () =>{
        signOut(auth)
        .then(() => {
            console.log('user logout')
        })
        .catch((err) => {
            dispatch({ type: 'LOGOUT' })
        })
    }

    return {logout}
}