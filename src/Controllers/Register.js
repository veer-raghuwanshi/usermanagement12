import React,{useState} from 'react'
import Header from './Header'
import axios from 'axios'

export default function Register() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [mobile, setmobile] = useState(0)
    const [city, setcity] = useState("")
    const [address, setaddress] = useState("")
    const [gender, setgender] = useState("")
    const [profileimage, setprofileimage] = useState("");
    const [profileimagepath, setprofileimagepath] = useState("");

    const saveFile = (e) => {
        console.log(e.target.files[0]);
        setprofileimage(e.target.files[0]);
        setprofileimagepath(URL.createObjectURL(e.target.files[0]));
    };

    const onHandleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        const formData = new FormData();
        formData.append("profileimage",profileimage);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("mobile", parseInt(mobile));
        formData.append("city", city);
        formData.append("address", address);
        formData.append("gender", gender);
       console.log(formData)
        axios.post('https://finalapi-api.onrender.com/register',formData,{headers:{'content-type':'multipart/form-data'}})
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div>
            <Header />
            <section className="contact_section layout_padding">
                <div className="container ">
                    <div className="heading_container">
                        <h2>
                            UserManagement Register
                        </h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={onHandleSubmit} method='post'>
                                <div>
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
                                    onChange={e=>setname(e.target.value)}
                                    name='name'
                                    placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email"
                                    onChange={e=>setemail(e.target.value)}
                                    name='email' placeholder="Email" />
                                </div>
                                <div>
                                    <input type="password" 
                                    onChange={e=>setpassword(e.target.value)}
                                    name='password'
                                    placeholder="Password" />
                                </div>
                                <div>
                                    <input type="text"
                                    onChange={e=>setmobile(e.target.value)}
                                    name='mobile'
                                    placeholder="Mobile" />
                                </div>
                                <div>
                                    <input type="text" 
                                    onChange={e=>setcity(e.target.value)}
                                    name='city'
                                    placeholder="City" />
                                </div>
                                <div>
                                    <input type="text" 
                                    onChange={e=>setaddress(e.target.value)}
                                    name='address'
                                    placeholder="Address" />
                                </div>
                                <div>
                                    <input type="text"
                                    onChange={e=>setgender(e.target.value)}
                                    name='gender'
                                    placeholder="Gender" />
                                </div>

                                
                                <div className="d-flex ">
                                    <button type='submit'>
                                        Register
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
