const PostSummaryItem = (post) => {
    return(`
        <div class="list-group-item list-group-item-action d-flex">
            <!-- content -->
            <div class="col-9 pt-1 ps-1 pb-1">
                <!-- Topic -->
                <div class="text-muted wd-font-12px"> ${post.topic} </div>
                <!-- User name tag and time -->
                <div class="wd-font-14px">
                    <span class="fw-bold text-white"> ${post.userName} </span>
                    <i class="fa-solid fa-circle-check"></i>
                    <span class="text-muted"> - ${post.time} </span>
                </div>
                <!-- Paragraph -->
                <div class="fw-bold text-white wd-font-14px"> ${post.title} </div>
                <!-- Tweet count -->
                <div class="text-muted small"> ${post.tweets} </div>
            </div>
            <!-- picture -->
            <div class="col-3 pt-1">
                <img src=${post.image} alt="Unable to render image :(" class="border-0 wd-suggested-post-img float-end pe-2 pb-2 pt-2"/>
            </div>
        </div>
    `);
}

export default PostSummaryItem;