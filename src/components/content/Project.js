import React from 'react';
import {Panel, Button} from 'react-bootstrap';

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
                    <h2>{details.name}&nbsp;&nbsp;&nbsp;<span><Button className="projectExpandButton" onClick={ () => this.setState({ open: !this.state.open })}>>></Button></span></h2>
                    <Panel className="projectPanel" collapsible expanded={this.state.open}>
                        <p className="project-description">{details.description}</p>
                        <p className="project-status">Status: {details.status}</p>
                        <a href={details.url} className="project-URL">GitHub</a>
                    </Panel>
                </div>
        )
    }
}

export default Project;
