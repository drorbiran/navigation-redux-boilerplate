// containers are "smart" react components that are aware of redux
// they are connected to the redux store and listen on part of the app state
// they use mapStateToProps to specify which parts and use selectors to read them
// Smart components are not allowed to have any logic except dispatching actions.
// avoid having view logic & local component state in them, use "dumb" components instead

import React, { Component } from 'react';
import {View} from 'react-native';
import { connect } from 'react-redux';

import {Container,Button} from '../../Components';

import * as domainSelectors from '../../store/domain/domain.reducer';
import * as domainActions from '../../store/domain/domain.actions'

class Screen1 extends Component {
    componentWillMount(){} //when render

    pushScreen = () => {
        this.props.navigator.push({
            screen: 'Screen3',
            title: 'Screen 3'
        })
    };

    render() {
        return (
        <Container backgroundColor='#daecfb'>
            <Button
                onPress={() => this.props.dispatch(domainActions.actionName("New Text"))}
                text={this.props.text}
            />
            <Button
                onPress={this.pushScreen}
                text="Press me to push another Screen"
            />
        </Container>
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