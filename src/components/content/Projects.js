import React from 'react';
import Project from './Project';

import {
    filterRepos
}
from '../../helpers';

import axios from 'axios';

class Projects extends React.Component {

    constructor() {
        super();
        this.loadProjects = this.loadProjects.bind(this);
    }

    state = {
        repos: {}
    }

    componentDidMount() {
        this.loadProjects();
    }

    loadProjects = () => {
        axios.get('https://api.github.com/users/Kriegerfaust88/repos?type=owner')
            .then(res => {
                var repos = filterRepos(res.data);
                console.log(repos);
                this.setState({
                    repos
                });
            });
    }

    render() {
        return (
            <div className="content-area">
                <div className="list-of-projects">
                    {Object.keys(this.state.repos).map(key => <Project key={key} details={this.state.repos[key]}/>)
}
                </div>
                
            </div>
        );
    }
}

export default Projects;
