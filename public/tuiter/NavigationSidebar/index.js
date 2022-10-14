const NavigationSidebar = () => {
    return(`
        <!-- List -->
        <div class="list-group col-11">
            <!--Twitter icon-->
            <i class="list-group-item fa-brands fa-twitter"></i>
            <!--Home-->
            <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-house-chimney"></i> <span class="d-none d-xl-inline">Home</span>
            </a>
            <!--Explore-->
            <a href="#" class="list-group-item list-group-item-action active">
                <i class="fa-solid fa-hashtag"></i> <span class="d-none d-xl-inline">Explore</span>
            </a>
            <!--Notifications-->
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-bell"></i> <span class="d-none d-xl-inline">Notifications</span>
            </a>
            <!--Messages-->
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-envelope"></i> <span class="d-none d-xl-inline">Messages</span>
            </a>
            <!--Bookmarks-->
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-bookmark"></i> <span class="d-none d-xl-inline">Bookmarks</span>
            </a>
            <!--Lists-->
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-list"></i> <span class="d-none d-xl-inline">Lists</span>
            </a>
            <!--Profile-->
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-user"></i> <span class="d-none d-xl-inline">Profile</span>
            </a>
            <!--More-->
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-ellipsis"></i>
                <span class="d-none d-xl-inline">More</span>
            </a>
        </div>
        <!-- Tweet Button-->
        <button class="btn btn-primary mt-1 col-11 rounded-pill"> Tweet </button>   
 `);
}
export default NavigationSidebar;