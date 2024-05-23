import React from "react";
import "./home.css"
import Servers from "../../components/Home/Servers/Servers";
export default function Home(){
    return(
        <section className="home">
            <Servers/>
        </section>
    )
}