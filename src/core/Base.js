import React from 'react'
import Navbar from './Navbar';


const Base = ({
    title = "My title",
    description = "My description",
    className = "bg-dark text-white",
    children 
}) => {
  return (
    <div>
        <Navbar />
      <div className='container-fluid'>
       <div className="jumbotron bg-dark text-white text-center pb-0">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
       </div>
       <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center">
            <h4>If you ave any query, please feel free to ask</h4>
            <button className="btn btn-warning btn-lg">Contact Us</button>
        </div>
        <div className="container">
          <span className="text-muted">
            An Amazing MERN Bootcamp
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Base;