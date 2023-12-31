import React, {useState} from 'react'
import Base from '../core/Base'
import {Link} from 'react-router-dom'
import { signup } from '../auth/helper'

const Signup = () =>{

    const [values, setValues] = useState({
        name : "",
        email : "",
        password : "",
        error : "",
        success : false
    })
 
    const { name, email, password, error, success } = values

    const handleChange = name => event =>{
        setValues({...values,error : false,[name] : event.target.value})
    }
    
    const onSubmit = event =>{
        event.preventDefault();
        console.log(`Before --- Name : ${name} - Email : ${email} - Password : ${password}`);
        setValues({...values,error : false})
        console.log(`After --- Name : ${name} - Email : ${email} - Password : ${password}`);
        signup({name,email,password})
        .then(data =>{
            console.log("Data : ",data)
            if(data.error){
                setValues({...values, error : data.error, success : false})
            }else{
                setValues({...values,name:"",email:"",password:"",error:"",success:true})
            }
        })
        .catch(err => console.log("Error in SignUp : ",err))
    }

    const successMessage = () =>{
      return (
      
       <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
          <div className="alert alert-success" style={{display: success ? "" :"none"}}>
        New account created successfully, for <Link to="/signin">Login click here</Link>
      </div>
          </div>
       </div>
      
      )
    }
    const errorMessage = () =>{
        return (<div className="alert alert-success" style={{display: error ? "" :"none"}}>
          {error}
        </div>)
      }

    const signUpForm = () =>{
        return(
             <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input onChange={handleChange("name")} className='form-control' type="text" value={name} />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input onChange={handleChange("email")} className='form-control' type="email" value={email} />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input onChange={handleChange("password")}className='form-control' type="password" value={password}/>
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
             </div>
        )
    }
    return(
        <Base title='Sign up page' description='A page for user to sign up!!!'>
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    )
}
export default Signup;