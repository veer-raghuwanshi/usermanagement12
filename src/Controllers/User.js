import React, { useState, useEffect } from 'react'
import UserHeader from './UserHeader'
import axios from 'axios'

export default function User() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [mobile, setmobile] = useState("")
  const [city, setcity] = useState("")
  const [address, setaddress] = useState("")
  const [gender, setgender] = useState("")
  const [profileimage, setprofileimage] = useState("")


  useEffect(() => {
    console.log("calling useEffect")
    fetchUsers()
  }, [])

  const fetchUsers = () => {
    axios.get('https://finalapi-api.onrender.com/admin/getallusers')
      .then((response) => {
        console.log(response.data)
        let email = localStorage.getItem("email")
        for (const user of response.data) {
          if (user.email == email) {
            console.log(user)
            setname(user.name)
            setemail(user.email)
            setprofileimage(user.profileimage)
            setmobile(user.mobile)
            setcity(user.city)
            setaddress(user.address)
            setgender(user.gender)
            setpassword(user.password)
            break
          }
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <UserHeader />
      <h3>UserHome</h3>
      <img src={profileimage} width={200} height={200} />
      <h3>Name:{name}</h3>
      <h3>Email:{email}</h3>
      <h3>Mobile:{mobile}</h3>
      <h3>City:{city}</h3>
      <h3>Address:{address}</h3>
      <h3>Gender:{gender}</h3>
    </div>
  )
}
