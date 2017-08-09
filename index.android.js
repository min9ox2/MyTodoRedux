import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Index from './Index';

export default class MyTodoReduxAdv extends Component {
  render() {
    return (
      <Index />
    );
  }
}

AppRegistry.registerComponent('MyTodoReduxAdv', () => MyTodoReduxAdv);