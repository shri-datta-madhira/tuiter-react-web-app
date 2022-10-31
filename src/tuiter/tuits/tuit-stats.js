import React from "react";

const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "topic": "Gaming",
            "userName": "NVIDIA",
            "title": "AMD Monster Radeon RX 7900XTX Graphics Card Rumored To Take On NVidia RTX 4090",
            "time": "2h",
            "image": "../../images/nvidia_sugg_post_img.webp",
            "liked": true,
            "replies": 123,
            "retuits": 234,
            "likes": 3456,
            "handle": "@nvidia",
            "tuit": "It's an exciting time for PC gamers with yet another major hardware launch expected soon and this time it's AMD taking on Nvidia with what we expect to be a monster graphics card - the Radeon RX 7900XTX, which will go head to head with Nvidia's GeForce RTX 4090.The latest rumors suggest a large graphics card with a massive 24GB of GDDR6 memory, a 384-bit memory bus and new RDNA3 architecture."
        }
    }
) => {
    return(
        <div className="row pb-3 ps-2 text-muted mt-2">
            <div className="col">
                <i className="fa-regular fa-comment"></i>
                <span className="text-muted ps-2 wd-crls">{tuit.replies}</span>
            </div>
            <div className="col">
                <i className="fa-solid fa-retweet"></i>
                <span className="text-muted ps-2 wd-crls">{tuit.retuits}</span>
            </div>
            <div className="col">
                <i className={ `${tuit.liked && "fa-solid fa-heart wd-heart-fill"} ${!tuit.liked && "fa-heart fa-regular"}` }></i>
                <span className="text-muted ps-2 wd-crls">{tuit.likes}</span>
            </div>
            <div className="col">
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
        </div>
    );
};

export default TuitStats;