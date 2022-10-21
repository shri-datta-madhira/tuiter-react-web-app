import React from "react"
import PostItem from "../post-list/post-list-item";
import posts from "../post-list/posts-home.json";


const HomeComponent = () => {
    return(
        <>
            <div>
                {
                    posts.map( p => {return(PostItem(p))} ).join('')
                }
            </div>
        </>
    );
};
export default HomeComponent;