import React from 'react';
import { StyleSheet, View,Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderText from '../../Components/HeaderText'
import FormButton from '../../Components/FormButton'
import FormTextButton from '../../Components/FormTextButton'

const PasswordChanged = () => {
	const navigation = useNavigation();

	return (
			<View style={styles.passwordChangedContainer}>
        <FormTextButton onPress={()=> navigation.goBack() } buttonContainerStyle={styles.backButton}>Back</FormTextButton>
				<HeaderText headingText={['new','passwo','rd']} />

        <View style={styles.textContainer}>
          <Text style={styles.text} >Your password has been successfully changed</Text>
        </View>

        <View style={styles.footerButton}>
          <FormButton style={styles.button} onPress={()=> navigation.navigate('Login') }>login</FormButton>
        </View>
			</View>
	);
};


// I used this ScreenHeight because Login button wasn't going to the bottom even with flex 1 on main container and position absolute, so this is a workaround for the time being
let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  passwordChangedContainer:{
    flex: 1,
		height: ScreenHeight,
  },
	footerButton: {
		// alignSelf: 'flex-end',
		// marginTop: 100
		position: 'absolute',
		bottom: 60,
		right: 0,
	},
  button: {
    marginTop: 20
  },
  textContainer: {
    marginTop: 20,
    textAlign: 'left',
    padding: 30,
  },
  text:{
    fontSize: 18,
    color: '#000239',
    textAlign: 'left'
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  }
})

export default PasswordChanged;
