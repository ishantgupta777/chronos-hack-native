import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const FormButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonContainer}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={{...styles.buttonText, ...styles.buttonTextStyle}}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 220,
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: '#000239',
    height: 60,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 3,
    marginTop: 25,
    marginRight: 10,
    justifyContent: 'center'
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
