import { API } from "../../backend";


//category calls
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body : JSON.stringify(category)
  })
  .then(res => {
    return res.json()
  })
  .catch(err =>{
    console.log(`Found an Error in creating Category form backend : ${err}`);
  })
};

//get all categories
export const getAllCategory =() => {
  return fetch(`${API}/categories`,{
    method: "GET"
  })
  .then( res =>{
    return res.json()
  })
  .catch(err => console.log(`Failed to get all categories from backend : ${err}`))
}

//product calls

//create a product
export const createProduct = (userId, token, product) =>{
  return fetch(`${API}/product/create/${userId}`,{
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body : product
  })
  .then( res => {
    return res.jon()
  })
  .catch(err => console.log(`Failed to create product from backend : ${err}`))
}

//get all products
export const getAllProduct =() => {
  return fetch(`${API}/products`,{
    method: "GET"
  })
  .then( res =>{
    return res.json()
  })
  .catch(err => console.log(`Failed to get all products from backend : ${err}`))
}


//delete a product
export const deleteProduct = (productId,userId, token) =>{
  return fetch(`${API}/product/${productId}/${userId}`,{
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
  .then( res => {
    return res.jon()
  })
  .catch(err => console.log(`Failed to delete product from backend : ${err}`))
}

//get a product
export const getProduct = (productId) => {
  return fetch(`${API}/product/${productId}`,{
    method : "GET",
  })
  .then( res =>{
    return res.json()
  })
  .catch(err => console.log(`Failed to get product from backend : ${err}`))
}
//update a product
export const updateProduct = (productId,userId, token, product) =>{
  return fetch(`${API}/product/${productId}/${userId}`,{
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body : product
  })
  .then( res => {
    return res.jon()
  })
  .catch(err => console.log(`Failed to create product from backend : ${err}`))
}