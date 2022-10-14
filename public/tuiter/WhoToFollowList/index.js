import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return(`
        <div class="list-group col-12 col-xl-11">
                <!--Who to Follow-->
                <span class="list-group-item wd-font-bold"> Who to follow </span>
                <!-- Follow suggestions List -->
                <div class="rounded-bottom">
                    ${
                        who.map( w => {return(WhoToFollowListItem(w));}).join('')
                     }
                </div>
        </div>
    `);
}

export default WhoToFollowList;