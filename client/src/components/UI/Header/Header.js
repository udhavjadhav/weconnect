import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import './Header.scss'
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
      <img src="https://img.icons8.com/color/48/000000/connectdevelop.png"/>
        <span className="help-text">WeConnect</span>
      </div>
      <div className="action-btn">
        <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
        <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
        <FontAwesomeIcon className="icon-block" icon={faCog} />
      </div>
    </div>
  )
}
export default Header;