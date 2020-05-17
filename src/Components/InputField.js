import React from 'react';
import {StyleSheet, View, TextInput } from 'react-native';

const InputField = (props) => {
	return (
      <View style={styles.inputFieldContainer}>
				<TextInput
					style={styles.inputField}
					placeholder={props.placeholder || 'Type Here'}
					placeholderTextColor='#000239'
					autoCompleteType={props.autoCompleteType || 'off'}
					textContentType={props.textContentType || 'none'}
					secureTextEntry={props.secureTextEntry || false}
				/>
      </View>
	);
};

const styles = StyleSheet.create({
		inputFieldContainer:{
			justifyContent: 'center',
			flexDirection: 'row',
		},
		inputField: {
			width: '80%',
			backgroundColor: 'white',
			borderRadius: 6,
			marginBottom: 20
		}
})

export default InputField;
