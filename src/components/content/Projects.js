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

    render() {
        return (
            <div className="content-area">
                <div className="list-of-projects">
                    {Object.keys(this.state.repoList).map(key => <Project key={key} details={this.state.repoList[key]}/>)
}
                </div>
            </div>
        );
    }
}

export default Projects;
