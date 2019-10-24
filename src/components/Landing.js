import React from 'react';

class LandingScreen extends React.Component {
    render() {
        const landingTitle = this.props.title;
        return <div>
            <div className="fullPage-landing">
                <h1>{landingTitle ? landingTitle : 'Displayed if no prop passed'}</h1>
            </div>
        </div>
    }
}

export default LandingScreen