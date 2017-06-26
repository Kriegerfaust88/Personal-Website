import React, {Component} from 'react';
import '../css/App.css'
import {Grid, Row, Col} from 'react-bootstrap';

import Content from './content/Content';
import Title from './Title';
import Navigation from './Navigation';
import Header from './Header.js';
import axios from 'axios';

import {
    filterRepos
}
from '../helpers';

class App extends Component {

    constructor() {
        super();
        this.changeIndex = this.changeIndex.bind(this);
        this.loadProjects = this.loadProjects.bind(this);
    }

    state = {
        selectedNavIndex: 0,
        repoList: {}
    }
    
    componentDidMount() {
        this.loadProjects();
    }

    loadProjects = () => {
        axios.get('https://api.github.com/users/Kriegerfaust88/repos?type=owner')
            .then(res => {
                var repoList = filterRepos(res.data);
                this.setState({
                    repoList
                });
            });
    }

    changeIndex(newIndex) {
        const selectedNavIndex = newIndex;
        this.setState({selectedNavIndex});
    }

    render() {
        return (
            <div className="App">
                <Header/>
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
                                <Content selectedNavIndex={this.state.selectedNavIndex} repoList={this.state.repoList}/>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
