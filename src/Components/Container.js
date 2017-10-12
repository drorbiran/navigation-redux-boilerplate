import React from 'react';
import { View } from 'react-native'

const Container = ({backgroundColor, children}) =>{
    return (
        <View style={[styles.container, {backgroundColor}]}>
                {children}
        </View>
    )
};

const styles = {
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export {Container};
