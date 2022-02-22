import { useState, useEffect } from 'react';
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import axios from 'axios';
import { useLocation } from "react-router-dom";



export default function Home() {

    //get post by username
    const { search } = useLocation();
    //const Location = useLocation()
    // console.log(location);

    const [posts, setPosts] = useState([]);

    //fetch data (get all posts)from backend

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search )
            console.log(res)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])


    return (
        <>
            <Header />
            <div className="home" >
                <Posts posts={posts} />  {/*   passe state posts as props  */}
                <Sidebar />

            </div>


        </>
    )
}
