import React, {Component} from 'react';
import '../css/App.css'
import {Grid, Row, Col} from 'react-bootstrap';

import Content from './content/Content';
import Title from './Title';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends Component {

    constructor() {
        super();
        this.changeIndex = this.changeIndex.bind(this);
    }

    state = {
        selectedNavIndex: 0
    }

    changeIndex(newIndex) {
        const selectedNavIndex = newIndex;
        this.setState({selectedNavIndex});
    }

    render() {
        return (
            <div className="App">

                <Grid className="contentGrid">
                    <Row>
                        <Col className="title-column" xs={12} sm={4} md={4} lg={4}>
                            <Title/>
                        </Col>
                        <Col className="nav-column" xs={12} sm={8} md={8} lg={8}>
                            <Row>
                                <Navigation selectedNavIndex={this.state.selectedNavIndex} changeIndex={this.changeIndex}/>
                            </Row>
                            <Row>
                                <Content selectedNavIndex={this.state.selectedNavIndex}/>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <Footer/>
            </div>
        );
    }
}

export default App;
