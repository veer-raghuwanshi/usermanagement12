import React,{useEffect,useState} from 'react'
import AdminHeader from './AdminHeader'
import axios from 'axios'
import { Button, Table } from 'react-bootstrap'
export default function ManageUsers() {

  const [users, setusers] = useState([])  

  const fetchUsers = ()=>{
    axios.get('https://finalapi-api.onrender.com/admin/getallusers')
    .then((response)=>{
        console.log(response.data)
        setusers(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
  }  

  useEffect(()=>{
    fetchUsers()
  },[])

  const deleteRecord = (id)=>{
    axios.get('https://finalapi-api.onrender.com/admin/manageuserstatus?s=delete&regId='+id)
    .then((response)=>{
        console.log(response.data)
        alert(response.data.msg)
        fetchUsers()
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  const manageStatus = (status,id)=>{
    axios.get('https://finalapi-api.onrender.com/admin/manageuserstatus?s='+status+'&regId='+id)
    .then((response)=>{
        console.log(response.data)
        fetchUsers()
    })
    .catch((error)=>{
        console.log(error)
    })
  }

  return (
    <div>
        <AdminHeader />
         <h1>ManageUsers</h1>
         <Table responsive>
           <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>City</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
           </thead>
           <tbody>
           {users.map(user=>
                <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.city}</td>
                    <td>{user.address}</td>
                    <td>{user.gender}</td>
                    <td>
                       {user.role == "admin" ? null :                         user.status == 1 ? <Button variant='secondary'
                        onClick={()=>manageStatus("block",user._id)}
                        >Block</Button>:<Button variant='success'
                        onClick={()=>manageStatus("verify",user._id)}
                        >Verify</Button>}
                    </td>
                    <td>
                    {user.role == "admin" ? null : <Button variant='danger'
                    onClick={()=>deleteRecord(user._id)}
                    >Delete</Button>}
                    </td>
                </tr>
            )}
           </tbody>
           
         </Table>
    </div>
  )
}
