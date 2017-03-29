import React, { Component } from 'react';
import '../App.css'
import { Grid, Row, Col } from 'react-bootstrap';

import Content from './Content';
import Title from './Title';
import Navigation from './Navigation';

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
            <Col className="title-column" xs={12} md={4}>
              <Title />
            </Col>
            <Col className="nav-column" xs={12} md={8}>
              <Row>
                <Navigation selectedNavIndex={this.state.selectedNavIndex} changeIndex={this.changeIndex} />
              </Row>
              <Row>
                <Content selectedNavIndex={this.state.selectedNavIndex} />
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
