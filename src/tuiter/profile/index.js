import React, {useState} from "react";
import "./index.css"
import {useSelector} from "react-redux";
import EditProfileComponent from "../edit-profile";

const ProfileComponent = () => {
    const profileInfo = useSelector(state => state.profile)
    const [isEditing, setEditing] = useState(false)
    return (
        <>
            {isEditing ? <EditProfileComponent editComplete={() => setEditing(false)}/>
                       : <div className="border rounded">
                 {/* name and tuit count */}
                 <div className="container row mb-2">
                     <div className="col-1">
                         <i className="fa-solid fa-arrow-left-long float-left pt-3"></i>
                     </div>
                     <div className="col-11 pt-1">
                         <span className="fw-bold"> {profileInfo.firstName} {profileInfo.lastName} </span> <br/>
                         <span className="text-muted small"> {profileInfo.tuitsCount} Tweets </span>
                     </div>
                 </div>
                 {/* Banner image, Profile image, Edit profile button */}
                 <div className="wd-h-300px">
                     <div className="position-relative mb-2">
                         <img alt={"No image rendered"} src={profileInfo.bannerPicture} className="w-100 wd-h-240px"/>
                         <img alt={"No image rendered"} src={profileInfo.profilePicture} height={120} width={120} className="rounded-circle position-absolute border wd-banner-profile-adjust"/>
                     </div>
                     <button onClick={() => setEditing(true)} className="btn btn-light border rounded-pill float-end fw-bold small me-2">Edit Profile</button>
                 </div>
                 {/* everything else */}
                 <div className="container pe-2 mb-2">
                     <div className="fw-bold"> {profileInfo.firstName} {profileInfo.lastName} </div>
                     <div className="text-muted"> {profileInfo.handle} </div>
                     <div className="mt-3"> {profileInfo.bio} </div>
                     <div className="mt-2 row text-muted">
                         <div className="col-3">
                             <i className="bi bi-geo-alt me-1"></i>
                             <span className="small">{profileInfo.location}</span>
                         </div>
                         <div className="col-3">
                             <i className="bi bi-balloon me-1"></i>
                             <span className="small">Born {profileInfo.dateOfBirth}</span>
                         </div>
                         <div className="col-3">
                             <i className="bi bi-calendar3 me-1"></i>
                             <span className="small">Joined {profileInfo.dateJoined}</span>
                         </div>
                     </div>
                     <div className="small mt-2 text-muted">
                         <span className="fw-bold text-dark">{profileInfo.followingCount}</span> Following
                         <span className="fw-bold text-dark ms-2">{profileInfo.followersCount}</span> Followers
                     </div>
                 </div>
             </div>
            }
        </>
    );
}

export default ProfileComponent;