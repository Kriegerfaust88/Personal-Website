import React, {Component} from 'react';
import '../css/App.css'
import {Grid, Row, Col} from 'react-bootstrap';

import Content from './content/Content';
import Title from './Title';
import Navigation from './Navigation';
import logo from '../logo.svg';

class App extends Component {

    constructor() {
        super();
        this.changeIndex = this.changeIndex.bind(this);
    }

    state = {
        selectedNavIndex: 0
    }

    changeIndex(newIndex) {
        var selectedNavIndex = newIndex;
        this.setState({selectedNavIndex});
    }

    render() {
        return (
            <div className="App">
                <Grid>
                    <Row>
                        <Col className="title-column" xs={12} sm={4} md={3} lg={3}>
                            <Title/>
                        </Col>
                        <Col className="nav-column" xs={12} sm={8} md={9} lg={9}>
                            <Row>
                                <Navigation selectedNavIndex={this.state.selectedNavIndex} changeIndex={this.changeIndex}/>
                            </Row>
                            <Row>
                                <Content selectedNavIndex={this.state.selectedNavIndex} logo={logo}/>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
