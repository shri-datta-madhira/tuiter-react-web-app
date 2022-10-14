
const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item list-group-item-action d-flex">
            <!-- profile image -->
            <div class="col-2">
                <img src=${who.avatarIcon} alt="Unable to render image :(" class="wd-profile-img"/>
            </div>
            <!-- User Name and tag -->
            <div class="col-7 ms-1">
                <span class="fw-bold"> ${who.userName} <i class="fa-solid fa-circle-check"></i> </span> <br/> <span> @${who.handle} </span>
            </div>
            <!-- Follow Button -->
            <div class="col-3">
                <button class="btn btn-primary wd-tweet-btn mt-1 wd-full-width"> Follow </button>
            </div>
        </div>
    `);
}

export default WhoToFollowListItem;