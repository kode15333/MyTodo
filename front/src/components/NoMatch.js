import React, { Component } from 'react';

class NoMatch extends Component {
    handleGoHome = e => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <img src="/images/404.jpg" alt="404" width='800' height='600' onClick={this.handleGoHome}>
                </img>
            </div>
        );
    }
}

export default NoMatch;