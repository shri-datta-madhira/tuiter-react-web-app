import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = (
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
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <div className="container d-flex border-bottom border-thin mt-2">
            {/* user profile image */}
            <div className="col-1 pt-1">
                <img src={tuit.image} alt="Unable to render :(" className="rounded-circle wd-profile-img"/>
            </div>
            {/* everything else */}
            <div className="col-11 ms-2 me-2">
                {/* user name, tag */}
                <div>
                    <span className="fw-bold text-dark">
                        {tuit.username} <i className="fa-solid fa-circle-check"></i>
                    </span>
                    <span className="text-muted"> {tuit.handle} &middot; {tuit.time} </span>
                    <i className="bi bi-x-lg float-end pe-2" onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>
                {/* post txt */}
                <div className="pt-1">
                    <span className="text-dark"> {tuit.tuit} </span>
                </div>
                {/* Comments, Retweets, likes, share */}
                <TuitStats key={tuit._id} tuit={tuit}/>
            </div>
        </div>
    );
};

export default TuitItem;