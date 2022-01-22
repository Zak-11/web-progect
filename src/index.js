import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './App';
import {types,transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic";


const options = {
    // you can also just use 'bottom center'
    position: positions.MIDDLE,
    timeout: 7000,
    type: types.SUCCESS,
    // you can also just use 'scale'
    transition: transitions.SCALE,
    containerStyle: {
        zIndex: 100
    }

}
ReactDOM.render(
    <React.StrictMode>

        <BrowserRouter>
            <AlertProvider template={AlertTemplate} {...options}>
            <App/>
            </AlertProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

