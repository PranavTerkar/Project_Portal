import React from "react";
import "./styles/groupInfo.css";
import Cards from "./Cards";
import Header from "./Header";


function GroupInfo() {
  return (
    <div className="groupinfo">
    <Header/>
      <div className="groupinfo__header">
        <div className="groupinfo__title">
          <h1>VISHWA FALCONS</h1>
          <div>
            <h3>GROUP NO 5</h3>
          </div>
        </div>
        <button type="button" className=" btn btn-primary">
          <b> VIEW SUBMISSION</b>
        </button>
      </div>

      <div className="groupinfo__row1">
        <Cards />
        <Cards />
        {/* <div className="groupinfo__image"> */}
        <img
          className="groupinfo__image"
          alt="img"
          src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/11/23171737/Modern-Education.png"
        />
        {/* </div> */}
      </div>
      <div className="groupinfo__row2">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="groupinfo__footer">
        <div>
          <button type="button" className=" btn btn-danger">
            <b> LEAVE GROUP</b>
          </button>
        </div>
        <div>
          <button type="button" className=" btn btn-primary">
            <b> REGISTER GROUP</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroupInfo;
