import React, { useEffect, useState } from 'react'
import Base from '../core/Base'
import {Link} from 'react-router-dom'
import {getAllCategory} from './helper/adminapicall'


const AddProduct = () => {

    const [values, setvalues] = useState({
        name: "",
        description : "",
        price : "",
        stock : "",
        photo : "",
        categories : [],
        category : "",
        loading : false,
        error : "",
        createdProduct : "",
        getRedirect : false,
        formData : ""
    })
    const {name, description,price,stock,categories,category,loading,error,createdProduct,getRedirect,formData} = values
    const preload = () =>{
        getAllCategory().then(data =>{
            console.log("DATA : ",data);
            if(data.error){
                setvalues({...values, error : data.error})
            }else{
                setvalues({...values,categories:data,formData : new FormData()})
                console.log("Categories : ",categories);
            }
        })
    }
    
    useEffect(() =>{
        preload()
    },[])
    const handleChange = () => {

    }
    const onSubmit = () =>{

    }
    const createProductForm = () => (
        <form >
          <span>Post photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              <option value="a">a</option>
              <option value="b">b</option>
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("quantity")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success mb-3">
            Create Product
          </button>
        </form>
      );

  return (
    <Base title='Add Product' 
         description='Add product details here'
         className='conatiner bg-info p-4'
         >
      <Link className="btn btn-md btn-dark mb-3" 
            to="/admin/dashboard" >Admin home
      </Link>
      <div className="row bg-dark text-white rounded">
       <div className="col-md-8 offset-md-2">{createProductForm()}</div>
      </div>
    </Base>
  )
}
export default AddProduct;