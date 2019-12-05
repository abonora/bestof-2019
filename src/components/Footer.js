import React from 'react';

class Footer extends React.Component {
    render() {
        return <footer>
                <div className="legal">&copy; {(new Date().getFullYear())} All rights reserved. albertobonora.com</div>
                <div className="technologies">Powered using Wordpress and ReactJS</div>
            </footer>
    }
}

export default Footer