import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const FormTextButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{...styles.buttonContainer, ...props.buttonContainerStyle}}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={{...styles.buttonText, ...props.buttonTextStyle}}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: 'transparent',
    marginTop: 10,
    marginRight: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 15,
    color: '#000239',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '500',
  }
})

export default FormTextButton;
