import React from 'react';

class Project extends React.Component {

    render() {
        const {
            details
        } = this.props;
        return (
            <li>
                <span>
                    <h3 className="project-name">{details.name}</h3>
                </span>
                <p className="project-description">{details.description}</p>
                <p className="project-status">Status: {details.status}</p>
                <a href={details.url} className="project-URL">GitHub</a>
            </li>
        )
    }
}

export default Project;
