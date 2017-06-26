import React from 'react';
import {Panel} from 'react-bootstrap';

class Project extends React.Component {

    render() {
        const {details} = this.props;
        return (
            <div>
                <h2>
                    {details.name}
                </h2>
                <Panel className="projectPanel">
                    <p className="project-description">{details.description}</p>
                    <p><a href={details.homepage}>{details.homepage}</a></p>
                    <p>Check it out on <a href={details.svn_url}>GitHub</a></p>
                </Panel>
            </div>
        )
    }
}

export default Project;
