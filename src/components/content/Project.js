import React from 'react';
import {Panel, Button} from 'react-bootstrap';

class Project extends React.Component {

    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    render() {

        let button = null;

        if (this.state.open) {
            button = <Button className="collapseButton" onClick={() => this.setState({
                open: !this.state.open
            })}>&#8963;</Button>;
        } else {
            button = <Button className="expandButton" onClick={() => this.setState({
                open: !this.state.open
            })}>&#8964;</Button>;
        }

        const {details} = this.props;

        return (
            <div>
                <h2>{details.name}
                    <span>{button}</span>
                </h2>
                <Panel className="projectPanel" collapsible expanded={this.state.open}>
                    <p className="project-description">{details.description}</p>
                    <p className="project-website">
                        <a href={details.homepage}>{details.homepage}</a>
                    </p>
                    <p className="project-URL">
                        <a href={details.svn_url}>GitHub</a>
                    </p>
                </Panel>
            </div>
        )
    }
}

export default Project;
