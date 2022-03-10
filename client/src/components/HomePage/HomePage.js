import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import Header from "../UI/Header/Header";
import "./HomePage.scss";

const HomePage = () => {
  
  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>We Connect video meetings. Now you can meet together.</h2>
            <p>
             We can built this application for educational purpose.
            </p>
            <div className="action-btn">
              <button className="btn green">
                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                New Meeting
              </button>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input placeholder="Enter a code or link" />
                </div>
                <button className="btn no-bg">Join</button>
              </div>
            </div>
          </div>
          <div className="help-text">
            <a href="">Learn more</a> about We Connect
          </div>
        </div>
        <div className="right-side">
          <div className="content d-none d-lg-block">
            <img src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" />
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;