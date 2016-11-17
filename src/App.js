import React from 'react';

import WelcomePanel from './components/WelcomePanel';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            'user': 'Gareth'
        }
    }

    handleUserChange() {
        return () => {
            this.setState({
                'user': 'Daniel'
            });
        };
    }

    render() {
        const {user} = this.state;

        return (<WelcomePanel
            handleChangeUser={this.handleUserChange()}
            user={user}
        />);
    }
}