import React from 'react';
import {Panel,Button} from 'react-bootstrap';

class Project extends React.Component {
    
    constructor() {
        super();
        this.state= {
            open: false
        };
    }

    render() {
        const {
            details
        } = this.props;
        return (<div>
                    <h2>{details.name}&nbsp;&nbsp;&nbsp;<span><Button className="projectExpandButton" onClick={ () => this.setState({ open: !this.state.open })}>&#709;</Button></span></h2>
                    <Panel className="projectPanel" collapsible expanded={this.state.open}>
                        <p className="project-description">{details.description}</p>
                        <p className="project-website"><a href={details.homepage}>{details.homepage}</a></p>
                        <p className="project-URL"><a href={details.svn_url}>GitHub</a></p>
                    </Panel>
                </div>
        )
    }
}

export default Project;
