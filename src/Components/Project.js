import React from "react";
import "./styles/groupdis.css";
import Header from "./Header";

function Project() {
  return (
    <div className="groupdis">
    <Header/>
      <div className="groupdis__header">
        <div className="header__left">
          <div className="left__grid">
            <div class="container text-center">
              <div class="row row-cols-2">
                <div className="col">NAME : </div>
                <div className="col">BATCH & DIV :</div>
                <div className="col">ROLL NO :</div>
                <div className="col">BRANCH : </div>
              </div>
            </div>
          </div>
          <img
            className="image"
            alt="group_detailss"
            src="https://cdn2.vectorstock.com/i/1000x1000/58/41/computer-and-children-faces-group-project-vector-6705841.jpg"
          />
        </div>
        <div className="header__right">
          <div>
            <img
              className="right__image"
              alt="status_image"
              src="https://thumbs.dreamstime.com/b/status-word-wooden-cubes-text-162301288.jpg"
            />
          </div>
          <div className="status">
            <div>5</div>
            <div>2</div>
          </div>
        </div>
      </div>
      <div className="secondhalf">
        <div className="secondhalf__left">
          <div className="secondhalh__title">
            <b>PROBLEM STATEMENT :</b>
          </div>
          <div className="input__form">
            <form>
              <input
                className="input"
                placeholder="Write your problem statment"
              ></input>
              <button type="submit" className=" btn btn-primary">
                <b> SUBMIT</b>
              </button>
            </form>
          </div>
          <div className="inputDocs">
            <div class="row row-cols-2">
              <div className="col">
                <input placeholder="FF180" type="file"></input>
                <button type="submit" className=" btn btn-primary">
                  <b> SUBMIT</b>
                </button>
              </div>
              <div className="col">
                <input placeholder="report" type="file"></input>{" "}
                <button type="submit" className=" btn btn-primary">
                  <b> SUBMIT</b>
                </button>
              </div>
              <div className="col">
                <input placeholder="PPT" type="file"></input>
                <button type="submit" className=" btn btn-primary">
                  <b> SUBMIT</b>
                </button>
              </div>
              <div className="col">
                {" "}
                <input placeholder="Recources" type="file"></input>{" "}
                <button type="submit" className=" btn btn-primary">
                  <b> SUBMIT</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
