import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <!--Search Bar & Settings icon-->
        <div class="col-12 wd-flex">
            <!-- Search Bar -->
            <div class="col-11">
                <form>
                    <input class="border rounded-pill wd-search-input" type="search" placeholder="Search Tuiter"/>
                </form>
            </div>
            <!-- Settings icon -->
            <div class="col-1">
                <a href="explore-settings.html" class="wd-settings-icon"><i class="fa-solid fa-gear ps-3 pe-0"></i></a>
            </div>
        </div>
        <!--For You, Trending, COVID-19, ...-->
        <div class="nav nav-tabs">
            <div class="nav-item"> <a href="for-you.html" class="nav-link active">For You</a> </div>
            <div class="nav-item"> <a href="trending.html" class="nav-link">Trending</a> </div>
            <div class="nav-item"> <a href="news.html" class="nav-link">News</a> </div>
            <div class="nav-item"> <a href="sports.html" class="nav-link">Sports</a> </div>
            <div class="nav-item"> <a href="entertainment.html" class="nav-link d-none d-md-grid">Entertainment</a> </div>
        </div>
        <!--First big picture-->
        <div class="card mt-2 border-0">
            <img class="card-img-top rounded-0" src="../../images/explore-for-you-1.jpg" alt="Unable to render image :(">
            <div class="card-img-overlay card-inverse h-100 d-flex flex-column justify-content-end">
                <h1 class="text-stroke text-white fw-bold">
                    Twitter-Musk saga continues
                </h1>
            </div>
        </div>
        
        ${PostSummaryList()}
    `);
}

export default ExploreComponent;
