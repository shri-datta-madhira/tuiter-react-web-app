import PostSummaryItem from "./PostSummaryItem.js"
import exploreItems from "./post.js"

const PostSummaryList = () => {
    return(`
        <!-- Suggested posts -->
        <div class="list-group">
                ${
                    exploreItems.map( ei => {return(PostSummaryItem(ei))} ).join('')
                }
        </div>
    `);
}
export default PostSummaryList;