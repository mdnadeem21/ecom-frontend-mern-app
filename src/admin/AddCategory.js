import React, {Fragment, useState} from 'react'
import Base from '../core/Base';
import { isAuthenticate } from '../auth/helper';
import { Link } from 'react-router-dom/';
import { createCategory } from './helper/adminapicall';


const AddCategory = () => {
    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const {user , token} = isAuthenticate()
    const goBack = () =>(
        <div className="mt-5">
            <Link className="btn btn-sm btn-outline-info mb-3" to="/admin/dashboard" >Back</Link>
        </div>
    )
    const handleChange = (event) =>{
        setError("")
        setName(event.target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        setError("")
        setSuccess(false)
        

        //backend request fired
        createCategory(user._id,token, {name})
        .then( data => {
            if(data.error){
                setError(true)
            }else{
                setError("")
                setSuccess(true)
                setName("")
            }
        })

    }

    const successMessage = () =>{
        if(success){
            return <h4 className="text-success">Category created successfully</h4>
        }
    }
    const warningMessage = () =>{
        if(error){
            return <h4 className="text-danger">Failed to create category</h4>
        }
    }

    const myCategoryForm = () =>
     <form >
            <div className="form-group">
                <p className="lead">Enter the category</p>
                <input type="text" 
                  className="form-control my-3"
                  onChange={handleChange}
                  autoFocus
                  required
                  placeholder='For Ex. Summer'
                  />
                  <button 
                  className="btn btn-outline-info"
                  onClick={onSubmit}
                   >Create Category</button>
            </div>
        </form>
    
    
  return (
    <Base title='Create category from here' 
       description='Add new category for all the products from here'
       className='container bg-info p-4'
       >
        
     <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
            {successMessage()}
            {warningMessage()}
            {myCategoryForm()}
            {goBack()}
        </div>
     </div>
    </Base>
  )
}


export default AddCategory;