import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVideo,
    faMicrophone,
    faPhone,
    faAngleUp,
    faClosedCaptioning,
    faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import "./CallPageFooter.scss";

const CallPageFooter = () => {

    return (
        <div className="footer-item">
            <div className="left-item">
                <div className="icon-block">
                    Meeting details
                    <FontAwesomeIcon className="icon" icon={faAngleUp} />
                </div>
            </div>

            <div className="center-item">
                <div className="icon-block">
                    <FontAwesomeIcon className="icon" icon={faMicrophone} />
                </div>
                <div className="icon-block">
                    <FontAwesomeIcon className="icon red" icon={faPhone} />
                </div>
                <div className="icon-block">
                    <FontAwesomeIcon className="icon" icon={faVideo} />
                </div>

                <div className="right-items">
                    <div className="icon-block">
                        <FontAwesomeIcon className="icon" icon={faClosedCaptioning} />
                        <p className="title">Turn on Captions</p>
                    </div>
                    <div className="icon-block">
                        <FontAwesomeIcon className="icon" icon={faDesktop} />
                        <p className="title">Present now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallPageFooter;