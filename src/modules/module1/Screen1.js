// containers are "smart" react components that are aware of redux
// they are connected to the redux store and listen on part of the app state
// they use mapStateToProps to specify which parts and use selectors to read them
// Smart components are not allowed to have any logic except dispatching actions.
// avoid having view logic & local component state in them, use "dumb" components instead

import React, { Component } from 'react';
import {View,Text} from 'react-native'
import { connect } from 'react-redux';

import * as domainSelectors from '../../store/domain/domain.reducer';
import * as domainActions from '../../store/domain/domain.actions'




class Screen1 extends Component {
    componentWillMount(){} //when render

    render() {
        return (
            <Text
                onPress={() => this.props.dispatch(domainActions.actionName("New Text"))}
            >
                {this.props.text}
            </Text>
    );
}
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        text: domainSelectors.getText(state)
    };
}

export default connect(mapStateToProps)(Screen1);