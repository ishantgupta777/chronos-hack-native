import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import globalStyles from '../../values/styles'

const FormButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonContainer}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={{...globalStyles.buttonText, ...styles.buttonTextStyle}}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'flex-end',
    padding: 5,
    position: "relative",
    bottom: 0,
    right: 0
  },
  button: {
    backgroundColor: '#000239',
    height: 60,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 3,
    marginTop: 25,
    justifyContent: 'center',
    position: "relative",
    bottom: 0,
    right: 10
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '700',
  }
})

export default FormButton;
