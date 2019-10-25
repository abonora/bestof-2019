import React from 'react';

class LandingScreen extends React.Component {
    render() {
        const landingTitle = this.props.title;
        const landingSubtitle = this.props.subtitle;
        return <div className="outter-wrapper">
            <div className="fullPage-landing">
                <div className="title-wrapper">
                    <h1>{landingTitle ? landingTitle : 'Displayed if no prop passed'}</h1>
                    <h3>{landingSubtitle ? landingSubtitle : ''}</h3>
                </div>
            </div>
        </div>
    }
}

export default LandingScreen