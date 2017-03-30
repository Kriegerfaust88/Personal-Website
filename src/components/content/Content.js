import React from 'react';

import About from './About-Content';
import Projects from './Projects-Content';
import Contact from './Contact-Content';

class Content extends React.Component {

    render() {

        switch (this.props.selectedNavIndex) {

            default:
                return (<About/>)
            case 0:
                return (<About/>);
            case 1:
                return (<Projects logo={this.props.logo}/>);
            case 2:
                return (<Contact/>);
        }
    }

}

export default Content;
