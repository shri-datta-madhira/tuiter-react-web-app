import React from "react";
import "./index.css";

const PostItem = (
    {
        p = {
            "userImage": "../../images/musk_profile_img.webp",
            "userName": "Elon Musk",
            "userTag": "elonmusk",
            "time": "23h",
            "postText": "Amazing show about @inspiration4x mission!",
            "cardImage": "../../images/bkmks_post_1.jpg",
            "cardTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "cardText": "From training to launch to landing, this all-access docuseries rides along with"
                      + " the Inspiration4 crew on the first all-civilian orbital space ...",
            "cardLink": "netflix.com",
            "comments": "4.2K",
            "retuits": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    return(
        <div className="container d-flex border-bottom border-thin mt-2">
            {/* user profile image */}
            <div className="col-1 pt-1">
                <img src={p.userImage} alt="Unable to render image :("
                     className="rounded-circle wd-profile-img"/>
            </div>
            {/* everything else */}
            <div className="col-11 ms-2 me-2">
                {/* user name, tag */}
                <div>
                            <span className="fw-bold text-white">
                                {p.userName}
                                <i className="fa-solid fa-circle-check"></i>
                            </span>
                    <span className="text-muted"> @{p.userTag} &middot; {p.time} </span>
                    <span className="float-end"> <i className="fa-solid fa-ellipsis"></i> </span>
                </div>
                {/* post txt */}
                <div className="pt-1">
                    <span className="text-white"> {p.postText} </span>
                </div>
                {/* post card */}
                <div className="pt-3 pb-3">
                    <div className="rounded-4 border border-light">
                        {/* card image */}
                        <div>
                            <img src={p.cardImage} className="card-img-top rounded-4"
                                 alt="Unable to render image :("/>
                        </div>
                        {/* card content */}
                        <div className="border-top border-light ps-2 pt-2 pb-2 pe-2">
                            <div className="pt-1 fw-bold text-white"> {p.cardTitle} </div>
                            <div className="text-muted"> {p.cardText} </div>
                            <a href={p.cardLink}
                               className="text-decoration-none text-muted">
                                <i className="fa-solid fa-link"></i> {p.cardLink}
                            </a>
                        </div>
                    </div>
                </div>
                {/* Comments, Retweets, likes, share */}
                <div className="row pb-3 ps-2 text-muted">
                    <div className="col">
                        <i className="fa-regular fa-comment"></i>
                        <span className="text-muted ps-2 wd-crls">${p.comments}</span>
                    </div>
                    <div className="col">
                        <i className="fa-solid fa-retweet"></i>
                        <span className="text-muted ps-2 wd-crls">${p.retuits}</span>
                    </div>
                    <div className="col">
                        <i className="fa-regular fa-heart"></i>
                        <span className="text-muted ps-2 wd-crls">${p.likes}</span>
                    </div>
                    <div className="col">
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;