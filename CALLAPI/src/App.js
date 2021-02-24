import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ListEmployee from './pages/ListEmployee';
import ListPersonal from './pages/ListPersonal'

class App extends Component {
    render() {
        return (
            // <Router>
            //     <div>
            //         <Menu />
            //         <div className="container">
            //             <div className="row">
            //                 {this.showContentMenus(routes)}
            //             </div>
            //         </div>
            //     </div>
            // </Router>
            <table class="w3-sidebar w3-bar-block" style="width:25%">
            <a  class="w3-bar-item w3-button">Link 1</a>
            <a  class="w3-bar-item w3-button">Link 2</a>
            <a  class="w3-bar-item w3-button">Link 3</a>
            <div>
                <row>
                    <ListEmployee></ListEmployee>
                </row>
                <row>
                    <ListPersonal></ListPersonal>
                </row>
            </div>
            </table>
        );
    }

//     showContentMenus = (routes) => {
//         var result = null;
//         if (routes.length > 0) {
//             result = routes.map((route, index) => {
//                 return (
//                     <Route
//                         key={index}
//                         path={route.path}
//                         exact={route.exact}
//                         component={route.main}
//                     />
//                 );
//             });
//         }
//         return <Switch>{result}</Swistch>;
//     }

}

export default App;
