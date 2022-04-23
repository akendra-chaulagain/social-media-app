import React from "react";
import Feed from "../../components/feed/Feed";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-6">
            <Feed />
            <Post />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      {/* <div className="home">
        <Sidebar />

        <div className="homeContainer">
          <Post />
        </div>
      </div> */}
    </>
  );
};

export default Home;
