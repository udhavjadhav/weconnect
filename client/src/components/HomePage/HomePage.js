import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import Header from "../UI/Header/Header";

const HomePage = () => {

  return (
    <div className="home-page d-flex flex-column" style={{height: '100vh'}}>
      <Header />
      <div className="d-flex align-items-center justify-content-around flex-grow-1">
        <div className="" style={{width: '32vw'}}>
          <div className="">
            <div className="h1" style={{color: 'rgba(60, 60, 60, 1)', maxWidth: '30vw'}}>We Connect video meetings. Now you can meet together.</div>
            <p>
              We can built this application for educational purpose.
            </p>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <button className="btn btn-primary">
                  <FontAwesomeIcon className="me-2" icon={faVideo} />
                  New Meeting
                </button>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon className="me-2" icon={faKeyboard} />
                <input className="form-control" placeholder="Enter a code or link" />
              </div>
              <div>
                <button className="btn btn-primary">Join</button>
              </div>
            </div>
          </div>
          <div className="pt-4 mt-5" style={{borderTop: '1px solid #ddd'}}>
            <a href="" className="text-primary" style={{textDecoration: 'none'}}>Learn more</a> about We Connect
          </div>
        </div>
        <div className="shadow">
          <div className="content p-4" style={{border: '1px solid #eee', borderRadius: '5px'}}>
            {/* <img src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" /> */}
            <img style={{width: '40vw'}} src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" />

          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;