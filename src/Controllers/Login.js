import React, { useState, useEffect } from 'react'
import Header from '../Controllers/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Login() {

  const navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  const onHandleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    console.log(password)
    let params = {
      "email": email,
      "password": password
    }
    axios.post("https://finalapi-api.onrender.com/login", params)
      .then((response) => {
        console.log("Response from API:", response.data);

        if (response.data.msg === "Invalid User, Please Verify User") {
          alert("Invalid User, Please Verify User");
        } else {
          const userDetails = response.data.userDetails;
          const adminDetails = response.data.adminDetails;

          if (userDetails) {
            const code = userDetails.responseCode;
            console.log("Response Code:", code);

            if (code === 1) {
              localStorage.setItem("email", userDetails.userdetails.email);
              navigate("/admin");
            } else if (code === 2) {
              localStorage.setItem("email", userDetails.userdetails.email);
              navigate("/user");
            }
          } else if (adminDetails) {
            const code = adminDetails.responseCode;
            console.log("Response Code:", code);

            if (code === 1) {
              localStorage.setItem("email", adminDetails.userdetails.email);
              navigate("/admin");
            } else if (code === 2) {
              localStorage.setItem("email", adminDetails.userdetails.email);
              navigate("/user");
            }
          } else {
            console.error("Neither userDetails nor adminDetails found in response");
          }
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
}
  

  return (
    <div>
      <Header />
      <section className="contact_section layout_padding">
        <div className="container ">
          <div className="heading_container">
            <h2>
              User Management Login
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={onHandleSubmit}>
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={e => setemail(e.target.value)}
                    placeholder="Email" />
                </div>
                <div>
                  <input type="password"
                    name="password"
                    onChange={e => setpassword(e.target.value)}
                    placeholder="Password" />
                </div>

                <div className="d-flex ">
                  <button type='submit'>
                    LogIn
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
