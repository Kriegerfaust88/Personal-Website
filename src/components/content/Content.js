import React from 'react';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Content extends React.Component {
    
    render() {
        
        switch(this.props.selectedNavIndex) {
            case 0:
                return(
                    <About />
                    );
            case 1:
                return(
                    <Projects />
                    );
            case 2:
                return(
                    <Contact />
                    );
        }
        
        return(
            <About />
            );
    }
    
}

export default Content;