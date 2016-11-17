import React from 'react';

export default class WelcomePanel extends React.Component {
    render() {
        const userName = this.props.user;
        const handleChangeUser = this.props.handleChangeUser;

        return (<div className="WelcomePanel">
            This is my custom box.<br /><br />

            Welcome {userName} <br /><br />
            <button onClick={handleChangeUser}>Actually I'm Daniel</button>
        </div>);
    }
}