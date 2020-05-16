import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function (props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text>{props.label}</Text>
        </TouchableOpacity>
    );
}