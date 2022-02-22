import React, { useState, useEffect } from 'react';
import './sidebar.css';
import axios from 'axios'
import {Link} from "react-router-dom"
export default function Sidebar() {

    const [cats, setCats] = useState([]);

    //get all categories
    useEffect(() => {
        const fetchcategories = async () => {
        const res = await axios.get('/categories')
        setCats(res.data)
    }
        fetchcategories()}
            , [])

    return (

        <div className="sidebar">

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, incidunt illo! Quas pariatur quibusdam mollitia dignissimos tempora hic at in exercitationem dolorum cumque quam aut quia</p>
            </div>


            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                          <Link to={`/?cat=${c.name}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">

                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="SidebarIcon fab fa-facebook-square"></i>
                    <i className="SidebarIcon fab fa-twitter-square"></i>
                    <i className="SidebarIcon fab fa-pinterest-square"></i>
                    <i className="SidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>




        </div>






    )
}
