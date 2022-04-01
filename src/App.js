import React from "react";
import Navbar from "./components/Navbar"
import Country from "./components/Country";
import Footer from "./components/Footer";
import "./style.css"
import data from "./components/data"

export default function App () {
    const journal = data.map(item => {
        return <Country key = {item.id} item = {item}/>
    })
    return (
        <> 
            <Navbar/>
            <main>
                {journal}
            </main>
            <Footer/>
        </>
    )
}