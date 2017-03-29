import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../logo.svg';

class Title extends React.Component {
    
    render() {
        
        return (
            <div className="title-area">
                <h1>
                    Daniel Schroeder
                </h1>
                <Image src={logo} circle/>
            </div>
            );
    }
}

export default Title;