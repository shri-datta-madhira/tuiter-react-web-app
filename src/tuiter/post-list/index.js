import React from "react";
import postsArray from './posts-home.json';
import PostItem from "./post-list-item.js";

const PostList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post => <PostItem key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostList;