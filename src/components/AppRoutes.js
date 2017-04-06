import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routes from '../routes';

export default class AppRoutes extends React.Component {
    render() {
        return (<Router routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>);
    }
}
