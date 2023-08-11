import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <div>
                {/* header section starts */}
                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <a className="navbar-brand" href="index.html">
                                <img src="images/logo.png" alt=""></img>
                                <span>
                                    UserManagement
                                </span>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="s-1"> </span>
                                <span className="s-2"> </span>
                                <span className="s-3"> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item active">
                                            {/* <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a> */}
                                            {/* <Link className="nav-link"
                                                to="/" >Home
                                                <span className="sr-only">(current)</span>
                                            </Link> */}
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link"
                                                to="/" >Login</Link>
                                            {/* <a className="nav-link" href="blog.html"> Login </a> */}
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link"
                                                to="/register" >Register</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* end header section */}
            </div>
        </div>
    )
}
