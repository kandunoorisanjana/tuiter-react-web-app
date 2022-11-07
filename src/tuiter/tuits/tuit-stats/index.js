import React from "react";
const TuitStats = (
    tuitstats = {"replies" : 123, "retuits" : 432, "likes" : 2345, "liked" : true}
) => {
    return (
    <div className="row mt-2">
    <div className="col-3" style = {{color: "black"}}>
        <i className='far fa-comment'></i>
        <span>{tuitstats.tuitstats.replies}</span>
    </div>
    <div className="col-3">
        <i className='fa fa-share-alt'></i>
        &nbsp;{tuitstats.tuitstats.retuits}
    </div>
    <div className="col-3">
    {tuitstats.tuitstats.liked ? <><i className="fa fa-heart" style = {{color:"red"}}></i></> : <><i className="fa fa-heart"></i></>}
          &nbsp;{tuitstats.tuitstats.likes}
    </div>
    <div className="col-3">
        <i className='fa fa-share-alt text-secondary'></i>
    </div>
    </div>
    );
};

export default TuitStats;