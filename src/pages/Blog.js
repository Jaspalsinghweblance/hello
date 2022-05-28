import  React, { useState, useEffect } from 'react';
const Blogs = () => {
    const [users, setUsers] = useState([])
    const [image, setImage] = useState([])
    const fetchData = async () => {
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=20")
        const data = await response.json()
        setUsers(data)
    }
    const fetchData2 = async () => {
        const response = await fetch ("https://jsonplaceholder.typicode.com/photos?_limit=20")
        const data = await response.json()
        setImage(data)
    }
    useEffect(() => {
        fetchData();
        fetchData2();
        
    }, [])

    return (
        <>
            <section id="blog">
                {image.map(blog => (
                    <div className="blog-box">
                        <div className="blog-image">
                            <img src={blog.url} alt="Blog" />
                        </div>
                        <div className="blog-details">
                            <h3>{blog.title}</h3>
                            <p>{blog.body}</p>
                            <a href="#/">Continue reading</a>
                        </div>
                    </div>
                 ))}
            </section>
        </>
    );
};

export default Blogs;
