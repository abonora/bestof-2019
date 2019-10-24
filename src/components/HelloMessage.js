import React from 'react';

class HelloMessage extends React.Component {
    render() {
        const name = this.props.name;
        return <div>
            <div className="container">
                <h1>Hello {name ? name : " there"}</h1>
            </div>
        </div>
    }
}

export default HelloMessage