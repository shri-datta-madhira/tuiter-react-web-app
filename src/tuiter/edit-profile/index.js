import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfileComponent = ({editComplete}) => {
    const profileInfo = useSelector(state => state.profile)
    const [profileCurr, setProfile] = useState({profileInfo})
    const updateEventHandler = (event) => {
        setProfile(
            {
                ...profileCurr,
                [event.target.name] : [event.target.value]
            }
        )
    }
    const dispatch = useDispatch();
    const saveClickEventHandler = () => {
        dispatch(updateProfile({profile: profileCurr}))
    }

    return (
        <div className="border rounded">
            {/* X button and save button */}
            <div className="container d-flex justify-content-between align-items-center mt-2 mb-2">
                <div className="col-1">
                    <button className="btn btn-light rounded-circle" onClick={() => editComplete()}><i className="bi bi-x-lg float-left pt-3"></i></button>
                </div>
                <div className="col-9"><span className="fw-bold pt-3"> Edit Profile </span></div>
                <div className="col-2"><button onClick={() => {editComplete(); saveClickEventHandler()}} className="btn float-end btn-dark rounded-pill text-light fw-bold">Save</button></div>
            </div>
            {/* Banner image, Profile image */}
            <div className="wd-h-300px">
                <div className="position-relative mb-2">
                    <img alt={"No image rendered"} src={profileInfo.bannerPicture} className="w-100 wd-h-240px"/>
                    <img alt={"No image rendered"} src={profileInfo.profilePicture} height={120} width={120} className="rounded-circle position-absolute border wd-banner-profile-adjust"/>
                </div>
            </div>
            {/* FirstName, LastName, Bio, Location, Website, DOB */}
            <div className="container">
                {/* First and Last name */}
                <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
                    {/* First Name */}
                    <div className="col-5 float-start ps-2">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" className="form-control"
                               defaultValue={profileInfo.firstName}
                               onChange={(event) => updateEventHandler(event)}/>
                    </div>
                    {/* Last Name */}
                    <div className="col-5 float-end pe-2">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className="form-control"
                               defaultValue={profileInfo.lastName}
                               onChange={(event) => updateEventHandler(event)}/>
                    </div>
                </div>
                {/* Bio */}
                <div className="container mt-3 mb-3">
                    <label for="bio">Bio</label>
                    <input type="text" id="bio" name="bio" className="form-control mt-1"
                           defaultValue={profileInfo.bio}
                           onChange={(event) => updateEventHandler(event)}/>
                </div>
                {/* Location */}
                <div className="container mt-3 mb-3">
                    <label for="location">Location</label>
                    <input type="text" id="location" name="location" className="form-control mt-1"
                           defaultValue={profileInfo.location}
                           onChange={(event) => updateEventHandler(event)}/>
                </div>
                {/* Website */}
                <div className="container mt-3 mb-3">
                    <label for="website">Website</label>
                    <input type="text" id="website" name="website" className="form-control mt-1 wd-form"
                           defaultValue={profileInfo.website}
                           onChange={(event) => updateEventHandler(event)}/>
                </div>
                {/* Birth Date */}
                <div className="container mt-3 mb-3">
                    <label for="dateOfBirth">Birth Date</label>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" className="form-control mt-1 wd-form"
                           defaultValue={profileInfo.dateOfBirth}
                           onChange={(event) => updateEventHandler(event)}/>
                </div>
                {/* Switch to Professional */}
                <div className="container mt-5 mb-2">
                    <span className="text-dark"> Switch to Professional </span>
                    <i className="bi bi-caret-right-fill float-end"></i>
                </div>
            </div>

        </div>
    );
}

export default EditProfileComponent;