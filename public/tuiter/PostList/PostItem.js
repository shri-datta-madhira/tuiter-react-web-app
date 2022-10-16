const PostItem =  (p) => {
    $(".wd-card-link")
    return(`
        <div class="container d-flex wd-border-color wd-border-bottom-style mt-2">
               <!--user profile image -->
                <div class="col-1 pt-1">
                       <img src=${p.userImage} alt="Unable to render image :("
                        class="rounded-circle wd-profile-img"/>
                </div>
                <!-- everything else -->
                <div class="col-11 ms-2 me-2">
                        <!-- user name, tag -->
                        <div>
                            <span class="fw-bold text-white"> 
                                ${p.userName} 
                                <i class="fa-solid fa-circle-check"></i> 
                            </span>
                            <span class="text-muted"> @${p.userTag} &middot; ${p.time} </span>
                            <span class="float-end"> <i class="fa-solid fa-ellipsis"></i> </span>
                        </div>
                        <!-- post txt -->
                        <div class="pt-1">
                            <span class="text-white"> ${p.postText} </span>
                        </div>
                        <!-- post card -->
                        <div class="pt-3 pb-3">
                            <div class="rounded-4 border border-light">
                                <!-- card image -->
                                <div>
                                    <img src=${p.cardImage} class="card-img-top rounded-4" alt="Unable to render image :(">
                                </div>
                                <!-- card content -->
                                <div class="border-top border-light ps-2 pt-2 pb-2 pe-2 wd-card-text">
                                    <div class="pt-1 fw-bold text-white"> ${p.cardTitle} </div>
                                    <div class="text-muted"> ${p.cardText} </div>
                                    <a href=${p.cardLink} class="text-decoration-none text-muted wd-card-link">
                                            <i class="fa-solid fa-link"></i> ${p.cardLink}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- Comments, Retweets, likes, share -->
                        <div class="row pb-3 ps-2 text-muted">
                            <div class="col">
                                  <i class="fa-regular fa-comment"></i>
                                  <span class="text-muted ps-2 wd-crls">${p.comments}</span>
                            </div>
                            <div class="col">
                                  <i class="fa-solid fa-retweet"></i>
                                  <span class="text-muted ps-2 wd-crls">${p.retuits}</span>
                            </div>
                            <div class="col">
                                  <i class="fa-regular fa-heart"></i>
                                  <span class="text-muted ps-2 wd-crls">${p.likes}</span>
                            </div>
                            <div class="col">
                                  <i class="fa-solid fa-arrow-up-from-bracket"></i> 
                            </div>
                        </div>
                </div>
        </div>
    `);
}

export default PostItem;