import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import HomeLogado from './Pages/HomeLogado';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route component={props => <HomeLogado {...props}/>} path="/" exact/>
                <Route component={props => <HomeLogado {...props}/>} path="/:id/:nameMovie" exact/>
            </Switch>
        </BrowserRouter>
    )

} 