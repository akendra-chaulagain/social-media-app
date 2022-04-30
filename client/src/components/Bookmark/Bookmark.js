import React from "react";
import "./Bookmark.css";
import People from "@material-ui/icons/People";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import EventIcon from "@mui/icons-material/Event";
import Page from "@mui/icons-material/Flag";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { Link } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";

const Bookmark = () => {
  // user
  const user = useSelector((state) => state.user.currentUser);
  // isLoading function
  const isLoading = useSelector((state) => state.user.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* top bar import from topbar component */}
          <Topbar />
          <div className="bookmark">
            <Link className="link" to={`/user/${user._id}`}>
              <div className="profileImgbookmark">
                {/* user img */}
                <img className="img-fluid" src={user.profilePic} alt="pp_img" />
                {/* user name */}
                <h1>{user.firstname + " " + user.lastname}</h1>
              </div>
              <hr />
            </Link>

            <div className="sidebatIcon">
              <div className="bookmarkIconItem friend">
                <GroupAddIcon style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Friends</span>
                </div>
              </div>
              <div className="bookmarkIconItem group">
                <People style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Groups</span>
                </div>
              </div>
              <div className="bookmarkIconItem store">
                <StorefrontRoundedIcon style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Marketplace</span>
                </div>
              </div>
              <div className="bookmarkIconItem watch">
                <OndemandVideoRoundedIcon style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Watch</span>
                </div>
              </div>
              <div className="bookmarkIconItem page">
                <Page style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Pages</span>
                </div>
              </div>
              <div className="bookmarkIconItem memories">
                <WatchLaterOutlinedIcon />
                <div className="text">
                  <span>Memories</span>
                </div>
              </div>
              <div className="bookmarkIconItem saved">
                <BookmarkAddedIcon style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Saved</span>
                </div>
              </div>
              <div className="bookmarkIconItem events">
                <EventIcon style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Events</span>
                </div>
              </div>
              <div className="bookmarkIconItem recent">
                <ImportExportIcon style={{ fontSize: 29 }} />
                <div className="text">
                  <span>Most Recent</span>
                </div>
              </div>
              {/* setting */}
              <div className="bookmarkIconItem ">
                <Link className="link setting" to="/setting">
                  <i className="fa-solid fa-gear"></i>
                  <div className="text ">
                    <span>Setting</span>
                  </div>
                </Link>
              </div>
              {/* logout */}
              <div className="bookmarkIconItem logoutBtn">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <div className="text ">
                  <span>Log Out</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Bookmark;
