import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {GridContainer, Main} from "../styles/LoadingPage";
import Header from './Header'

const LoadingPage = () =>
    <GridContainer>
        <Header />
        <Main />
    </GridContainer>

export default LoadingPage;
