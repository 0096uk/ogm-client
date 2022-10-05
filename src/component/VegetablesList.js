import axios from 'axios'
import { useState,useEffect } from 'react'

import { url } from "../common/constants";

import { toast } from 'react-toastify';

import "../css/lists.css"

const VegetablesList = () => {
    const [vegetable, setvegetable] = useState([])
    const [delvegetable, setdelvegetable] = useState([])
    const [status, setstatus] = useState([])
  //  const url = 'http://localhost:8080'
    useEffect(() => {
        getAllvegetables()
    },[status, delvegetable])

    const getAllvegetables = () => {
        axios.get(url + '/products/admin/vegetables').then((response) => {
            const result = response.data
            if(result.status === 'success')
            setvegetable(result.data)
            else
            toast.error('error while loading data')
        })
    }
    return (
        <div className="list_mart">
            <h3>All vegetables</h3>
            <table className="table table-stripped table-bordered">
                <thead>
                    <tr>
                    <th>vegetable Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Category</th>
                    <th>Action</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {vegetable.map((c) => {
                       return(<tr>
                           <td>{c.productId}</td>
                           <td>{c.name}</td>
                           <td>{c.description}</td>
                           <td>{c.price}</td>
                           <td>{c.status}</td>
                           <td>{c.category}</td>
                           <td>{ !c.status && <button onClick={()=>{
                               //const url= 'http://localhost:8080/products/updatestatus'
                               axios.put(url + '/products/updatestatus/' + c.productId + '/' + 1).then((response) => {
                                const result = response.data
                                if(result.status === 'success'){
                                    setstatus(result.data)
                                    toast.success('Status Changed successfully')
                                }
                               })
                           }}>Approve</button> }</td>
                           <td>
                               <button onClick={() => {
                                  // const url= 'http://localhost:8080/products/delete'
                                   axios.delete(url + '/products/delete/' + c.productId).then((response) => {
                                       const result = response.data
                                       if(result.status === 'success'){
                                       setdelvegetable(result.data)
                                       toast.success('vegetable deleted successfully')
                                       }
                                   })
                               }}>delete vegetable</button>
                           </td>
                       </tr>
                       )}
                   )}
                </tbody>
            </table>
        </div>
    )
}


export default VegetablesList