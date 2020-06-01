import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router-dom';
import ReactDOM from 'react-dom'
import App from './components/App';
import NotFound from './components/NotFound';
import './css/index.css';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

// const Root = () => {
//     return (
//         <Router>
//             <div>
//                 <Match exactly pattern="/" component={App}/>
//                 <Miss component={NotFound}/>
//             </div>
//         </Router>
//     );
// };

// render(
//     <Root/>, document.querySelector('#root')
// );
