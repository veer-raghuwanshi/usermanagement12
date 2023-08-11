import React,{useState,useEffect} from 'react'
import AdminHeader from './AdminHeader'
export default function Admin() {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [profileimage, setprofileimage] = useState("")
  useEffect(()=>{
    let name = localStorage.getItem("name")
    let email = localStorage.getItem("email")
    let profileimage = localStorage.getItem("profileimage")
    setname(name)
    setemail(email)
    setprofileimage(profileimage)
  },[])
  return (
    <div>
        <AdminHeader />
      <h1>Admin Page</h1>
      <img src={profileimage} width={200} height={200}/>
      <h1>Name:{name}</h1>
      <h1>Email:{email}</h1>
    </div>
  )
}
