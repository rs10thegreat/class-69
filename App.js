import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SearchScreen from './screens/SearchScreen';
import BookTranscationScreen from './screens/BookTransactionScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{
    screen:BookTranscationScreen
  },
  Search:{
    screen:SearchScreen
  }
});

const AppContainer = createAppContainer(TabNavigator);