import TuitSummary from "../tuit-item";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuitsSummaryArray = useSelector(state => state.tuits)
    return (
        <div className="list-group wd-post-list-group">
            {
                tuitsSummaryArray.map(p => {
                    return (
                    <TuitSummary key={p._id} tuits={p}/>);
                })
            }
        </div>
    );
}

export default TuitList;

