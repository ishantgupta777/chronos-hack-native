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
					value={props.value}
					onChangeText={text => props.setValue(text)}
				/>
      </View>
	);
};

const styles = StyleSheet.create({
		inputFieldContainer:{
			justifyContent: 'center',
			flexDirection: 'row'
		},
		inputField: {
			width: '80%',
			backgroundColor: 'white',
			height: 35,
			borderRadius: 6,
			marginTop: 20
		}
})

export default InputField;
