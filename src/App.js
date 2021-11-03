//import React from 'react';
import React, {Component, Suspense} from 'react';
import './App.css';
import HeaderContainer from "./componets/Header/HeaderContainer";
import Navbar from "./componets/Navbar/Navbar";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Setings from "./componets/Setings/Setings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./componets/Users/UsersContainer";
import LoginPage from "./Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redax/app_reducer";
import Preloader from "./componets/common/Preloader";
import store from "./redax/redux_store";
import {withSuspense} from "./hoc/withSuspense";

//import ProfileContainer from "./componets/Profile/ProfileContainer";
//import DialogsContainer from "./componets/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./componets/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./componets/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)} />

                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)} />

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <LoginPage/>}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/setings' render={() => <Setings/>}/>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) =>{
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;
