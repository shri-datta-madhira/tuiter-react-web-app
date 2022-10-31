import React from "react"
import TuitList from "../tuits";
import "./index.css"
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            {/*<PostList/>*/}
            <h1 className="text-dark mb-4"> Home </h1>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent;