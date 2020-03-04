import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Interna from './src/screens/Interna';
import Preload from './src/screens/Preload';
import AddReceita from './src/actions/AddReceita';
import AddDespesa from './src/actions/AddDespesa';

const Navigator = createStackNavigator({
  Preload:{
    screen:Preload
  },
  Home:{
    screen:Home
  },
  Login:{
    screen:Login
  },
  Cadastro:{
    screen:Cadastro
  },
  Interna:{
    screen:Interna
  },
  AddReceita:{
    screen:AddReceita
  },
  AddDespesa:{
    screen:AddDespesa
  }
});

export default createAppContainer(Navigator);