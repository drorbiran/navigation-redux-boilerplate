import React from 'react';
import { Text } from 'react-native';

const Button = ({onPress,text}) =>{
    return (
        <Text
            style={styles.textStyle}
            onPress= {onPress}
            >
                {text}
        </Text>
    )
};

const styles = {
    textStyle : {
        fontSize: 18,
        padding: 16
    }
};

export {Button};
