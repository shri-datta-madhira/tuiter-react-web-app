import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Electrical Vehicles",
            "userName": "Tesla",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "../../images/tesla_sugg_post_img.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div>
                {post.userName} &middot; {post.time}
            </div>
            <div className="row pb-1">
                <div className="col-10">
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img alt="Unable to render" width={75} className="rounded-3 position-absolute" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;

