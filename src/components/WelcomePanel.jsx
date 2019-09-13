import React from 'react';
import PropTypes from 'prop-types';

const WelcomePanel = ({ user, setUser }) => (
  <div className="WelcomePanel">
    This is my custom box.<br/><br/>

    Welcome {user} <br/><br/>
    <button type="button" onClick={() => setUser('Daniel')}>Actually I'm Daniel</button>
  </div>
);

WelcomePanel.propTypes = {
  user: PropTypes.string.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default WelcomePanel;
