'use strict';

import React, { Component} from 'react';
//import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import * as switchActions from '../actions/switchActions';
import { connect } from 'react-redux';
import SwitchButton from '../components/switchButton';

class SwitchApp extends Component {

  //constructor(props) {
  //  super(props);
  //}

  render() {
    //const actions = bindActionCreators(switchActions, this.props.dispatch);
    return (

        <SwitchButton actions={this.props.actions} status={this.props.status}/>

    );
  }
}


export default connect(state => ({
    status: state.switches.status
  }),
  (dispatch) => ({
    actions: bindActionCreators(switchActions, dispatch)
  })
)(SwitchApp);

/*
export default connect(state => ({
    status: state.switches.status
  }))(SwitchApp);
  */
