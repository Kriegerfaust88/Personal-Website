import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import AppRoutes from './components/AppRoutes';
import './css/index.css';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={App}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(
    <AppRoutes/>, document.querySelector('#root'));
