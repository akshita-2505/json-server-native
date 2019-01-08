import React, {Component} from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import Login from '../components/login';
import Registration from '../components/registration';
import Home from '../components/home';
import Welcome from '../components/welcome';

const AppNavigator = createStackNavigator({
    Welcome:Welcome,
    Login:Login,
    Registration:Registration,
    Home:Home,
});

export default createAppContainer(AppNavigator);