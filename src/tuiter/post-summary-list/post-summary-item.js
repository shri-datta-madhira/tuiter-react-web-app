import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";
const PostSummaryItem = (
    {
        post = {
            "topic": "Electrical Vehicles",
            "username": "Tesla",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "../../images/tesla_sugg_post_img.png"
        }
    }
) => {
    return(
        <li className="list-group-item d-flex">
            <div className="col-10">
                <div>
                    {post.username} &middot; {post.time}
                </div>
                <div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
            </div>
            <div className="col-2">
                <img alt="Unable to render" width={100} className="rounded-3" src={post.image}/>
            </div>
        </li>
    );
};
export default PostSummaryItem;

