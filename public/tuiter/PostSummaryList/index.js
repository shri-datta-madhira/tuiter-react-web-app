import PostSummaryItem from "./PostSummaryItem.js"
import exploreItems from "./post.js"

const PostSummaryList = () => {
    return(`
        <!-- Suggested posts -->
        <div class="wd-border rounded">
                ${
                    exploreItems.map( ei => {return(PostSummaryItem(ei))} ).join('')
                }
        </div>
    `);
}
export default PostSummaryList;