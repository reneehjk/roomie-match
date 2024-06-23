import React from 'react';
import '../App.css';

/** Sidebar that contains navigable pages user can visit. */
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedButton: EXPLORE_BUTTON_ID};
  }

  /** Helps update the selected button */
  handleButtonClick = (event) => {
    this.setState({ selectedButton: event.currentTarget.id });
  }

  /** Returns a class list for a sidebar button, changing depending on whether the button is selected or not. */
  getButtonClassList = (currentButtonId) => {
    return currentButtonId === this.state.selectedButton ?
      `${SIDEBAR_ROW_BTN} ${SELECTED_BUTTON}` : SIDEBAR_ROW_BTN;
  }


  render() {
    return (
      <div id="sidebar">
        <div id="sidebar-explore-row" className="sidebar-row">
          <button id={EXPLORE_BUTTON_ID} className={this.getButtonClassList(EXPLORE_BUTTON_ID)} onClick={this.handleButtonClick}>
            <img src={EXPLORE_ICON_PATH} alt="" className="sidebar-row-icon"/>
            Explore Page
          </button>
        </div>

        <div id="sidebar-matches-row" className="sidebar-row">
          <button id={VIEW_MATCHES_BUTTON_ID} className={this.getButtonClassList(VIEW_MATCHES_BUTTON_ID)} onClick={this.handleButtonClick}>
            <img src={HEART_ICON_PATH} alt="" className="sidebar-row-icon"/>
            View Matches
          </button>
        </div>
        
        <div id="sidebar-edit-profile-row" className="sidebar-row">
          <button id={EDIT_PROFILE_BUTTON_ID} className={this.getButtonClassList(EDIT_PROFILE_BUTTON_ID)} onClick={this.handleButtonClick}>
            <img src={PENCIL_ICON_PATH} alt="" className="sidebar-row-icon"/>
            Edit Profile
          </button>
        </div>
      </div>
    );
  }
}

const SIDEBAR_ROW_BTN = 'sidebar-row-button'

const EXPLORE_BUTTON_ID = 'explore-button';
const VIEW_MATCHES_BUTTON_ID = 'view-matches-button';
const SELECTED_BUTTON = 'selected-sidebar-button';
const EDIT_PROFILE_BUTTON_ID = 'edit-profile-button';

const EXPLORE_ICON_PATH = '../assets/icons/magnifying_glass.png';
const HEART_ICON_PATH = '../assets/icons/love.png';
const PENCIL_ICON_PATH = '../assets/icons/pencil.png'

export default Sidebar;