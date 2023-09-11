import {API} from '../../backend'

export const signup = user =>{
    console.log("User : ",user);
    console.log("User : ",user.name.length);
    return fetch(`${API}/signup`,{ 
        method : "POST",
        headers: {
            Accept : "application/json",
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)}
        ).then( res =>{
            return res.json();
        })
        .catch( err => console.log("Error : ",err))
}

export const signin = user =>{
    return fetch(`${API}/signin`,{ 
        method : "POST",
        headers: {
            Accept : "application/json",
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)}
        ).then( res =>{
            return res.json();
        })
        .catch( err => console.log("Error : ",err))
}

export const authenticate = (data,next) =>{
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt",JSON.stringify(data))
        next();
    }
}

export const signout = next =>{
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
        next();
        return fetch(`${API/signout}`,{
            method : "GET",

        })
        .then(res => console.log("User signout successfully"))
        .catch(err => console.log("Error : ",err))
    }

}

export const isAuthenticate = () =>{
    if(typeof window == "undefined"){
        return false
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }else{
        return false
    }
}