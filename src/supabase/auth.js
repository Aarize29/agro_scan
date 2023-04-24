import uuid from "react-uuid"
import {supabase} from "./config"

const signInWithEmail= async (data) => {
    try {
        const response = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
          })
        return {status: 200, message: "Successful SignIn"}
    } catch (error) {
        console.log(error)
    }
    
}

const signUpWithEmail = async (data) => {
    try {
        const response = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
          })
        const user_reponse = await supabase
          .from('users')
          .insert([
              { id: response.data.user.id, 
                username: data.name,
                city: data.city,
                state: data.state,
                mobile: data.mobile
             }
        ])
        return {status: 200, message: "Successful SignIn"}
    } catch (error) {
        console.log(error)
    }
    
}

const signOut= async () => {
    try {
        console.log(100)
        const response = await supabase.auth.signOut()  
        console.log(response)
        return {status: 200, message: "Logout Successful"}
    } catch (error) {
        console.log(error)
        return error
    }
}

export {signInWithEmail, signOut, signUpWithEmail}