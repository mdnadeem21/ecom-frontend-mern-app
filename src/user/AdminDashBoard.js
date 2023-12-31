import React from 'react'
import Base from '../core/Base';
import { isAuthenticate,  } from '../auth/helper/index'; 
import { Link } from 'react-router-dom';

const AdminDashBoard = () => {

  const {user : {name, email, role}} = isAuthenticate()

  const adminLeftBar = () =>{

    return(
      <div className="card">
        <div className="card-header bg-dark text-white">Admin Navigation</div>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-success" >Create Categories</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="nav-link text-success" >Manage Categories</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-success" >Create Products</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-success" >Manage Products</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-success" >Manage Orders</Link>
          </li>
        </ul>
      </div>
    )
    
  }
  const adminRightBar = () =>{
     return(
      <div className="card mb-4">
        <h4 className="card-header">Admin Info</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span> {email}
          </li>
          <li className="list-group-item">
            <span className="badge badge-danger mr-2">Admin</span>
          </li>
          
        </ul>
      </div>
     )

  }

  return (
   <Base title='Welcome to Admin Panel' 
        description='Manage all of your products here'
        className='container bg-success p-3 '
        >
     <div className="row">
      <div className="col-3">
         {adminLeftBar()}
      </div>
      <div className="col-9">
        {adminRightBar()}
      </div>
     </div>
     
     
   </Base>
  )
}

export default AdminDashBoard;