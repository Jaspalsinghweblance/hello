import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Contact from "../components/Contact/Contact";
import './Home.css';
function Home() {
    const [buttonText, setButtonText] = useState("Add To Cart");
    return (
        <>
        <h2>Home Page</h2>
        <button type="submit" onClick={() => {setButtonText("Added");}}>{buttonText}</button>

        <div className="d-flex">
        <Contact />
        <Sidebar />
        </div>
        </>
    )
}
export default Home;