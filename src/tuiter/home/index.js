import PostSummary from "./postsummary";
import posts from "./posts";

const HomeComponent = () => {
    return (
        <>
        <div className="list-group wd-post-list-group">
            {
                posts.map(p => {
                    return (<PostSummary key={p._id} posts={p}/>);
                })
            }
        </div>
        </>
    );
}

export default HomeComponent;