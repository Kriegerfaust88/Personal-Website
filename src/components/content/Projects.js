import React from 'react';
import Project from './Project';

import projectList from './project-data';

class Projects extends React.Component {

    constructor() {
        super();
        this.loadProjects = this.loadProjects.bind(this);
    }

    state = {
        projects: {}
    }

    componentDidMount() {
        this.loadProjects();
    }

    loadProjects = () => {
        this.setState({
            projects: projectList
        });
    }

    render() {
        return (
            <div className="content-area">
                <h2>Projects</h2>
                <ul className="list-of-projects">
                    {Object.keys(this.state.projects).map(key => <Project key={key} details={this.state.projects[key]}/>)
}
                </ul>
            </div>
        );
    }
}

export default Projects;
