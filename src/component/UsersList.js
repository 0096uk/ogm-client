import axios from 'axios'
import { useState,useEffect } from 'react'

import { url } from "../common/constants";

import { toast } from 'react-toastify';

import "../css/lists.css"
const UsersList = () => {
    const [user, setUser] = useState([])
    const [delUser, setdelUser] = useState([])
   // const url = 'http://localhost:8080'
    useEffect(() => {
        getAllUsers()
    },[delUser])

    const getAllUsers = () => {
        axios.get(url + '/user/allusers').then((response) => {
            const result = response.data
            if(result.status === 'success')
            setUser(result.data)
            else
            toast.error('error while loading data')
        })
    }
    return (
        <div className="list_mart">
            <h3>All Users</h3>
            <table className="table table-stripped table-bordered">
                <thead>
                    <tr>
                    <th>User Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {user.map((c) => {
                       return(<tr>
                           <td>{c.userId}</td>
                           <td>{c.firstName}</td>
                           <td>{c.lastName}</td>
                           <td>{c.email}</td>
                           <td>{c.phone}</td>
                       
                           <td>
                               <button onClick={() => {
                                   //const url= 'http://localhost:8080/user/delete'
                                   axios.delete(url + '/user/delete/' + c.userId).then((response) => {
                                       const result = response.data
                                       if(result.status === 'success'){
                                       setdelUser(result.data)
                                       toast.success('User deleted successfully')
                                       }
                                   })
                               }}>delete User</button>
                           </td>
                       </tr>
                       )}
                   )}
                </tbody>
            </table>
        </div>
    )
}


export default UsersList