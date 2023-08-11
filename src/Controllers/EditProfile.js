import React, { useState, useEffect } from 'react'
import UserHeader from '../Controllers/UserHeader'
import axios from 'axios'

export default function EditProfile() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [mobile, setmobile] = useState(0)
    const [city, setcity] = useState("")
    const [address, setaddress] = useState("")
    const [gender, setgender] = useState("")
    const [profileimage, setprofileimage] = useState(null);
    const [profileimagepath, setprofileimagepath] = useState(null);
    const [profileimagedata, setprofileimagedata] = useState(null);

    useEffect(() => {
        console.log("calling useEffect")
        fetchUsers()
    },[])

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
                        setprofileimagepath(user.profileimage)
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

    const saveFile = (e) => {
        console.log(e.target.files[0])
        console.log(URL.createObjectURL(e.target.files[0]))
        setprofileimage(e.target.files[0].name);
        setprofileimagedata(e.target.files[0])
        setprofileimagepath(URL.createObjectURL(e.target.files[0]));
    };

    const onHandleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("profileimage", profileimagedata);
        formData.append("mobile", parseInt(mobile));
        formData.append("city", city);
        formData.append("address", address);
        formData.append("gender", gender);
        console.log(formData)
        axios.put('https://finalapi-api.onrender.com/users/updateuser', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                // 'Content-Type':'application/json',
            }
        })
            .then((response) => {
                console.log(response)
                alert(response.data.msg)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <UserHeader />
            <section className="contact_section layout_padding">
                <div className="container ">
                    <div className="heading_container">
                        <h2>
                            UserManagement
                        </h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={onHandleSubmit} method='post'>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <img src={profileimagepath} width={200} height={200} />
                                </div>
                                <div>
                                    <input type="file"
                                        onChange={saveFile}
                                        name='profileimage'
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        onChange={e => setname(e.target.value)}
                                        value={name}
                                        name='name'
                                        placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email"
                                        onChange={e => setemail(e.target.value)}
                                        value={email}
                                        name='email' placeholder="Email"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <input type="password"
                                        onChange={e => setpassword(e.target.value)}
                                        value={password}
                                        name='password'
                                        placeholder="Password" />
                                </div>
                                <div>
                                    <input type="text"
                                        onChange={e => setmobile(e.target.value)}
                                        value={mobile}
                                        name='mobile'
                                        placeholder="Mobile" />
                                </div>
                                <div>
                                    <input type="text"
                                        onChange={e => setcity(e.target.value)}
                                        value={city}
                                        name='city'
                                        placeholder="City" />
                                </div>
                                <div>
                                    <input type="text"
                                        onChange={e => setaddress(e.target.value)}
                                        value={address}
                                        name='address'
                                        placeholder="Address" />
                                </div>
                                <div>
                                    <input type="text"
                                        onChange={e => setgender(e.target.value)}
                                        value={gender}
                                        name='gender'
                                        placeholder="Gender" />
                                </div>


                                <div className="d-flex ">
                                    <button type='submit'>
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
