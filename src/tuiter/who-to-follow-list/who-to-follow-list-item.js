import React from "react"

const WhoToFollowListItem = (
    {
        who = { _id:123, avatarIcon: '../../images/tesla_profile_image.jpg', userName: 'Tesla', handle: 'Tesla' }
    }
) => {
    return (
        <li key={who._id} className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{who.userName} <i className="fa-solid fa-circle-check"></i></div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};

export default WhoToFollowListItem;