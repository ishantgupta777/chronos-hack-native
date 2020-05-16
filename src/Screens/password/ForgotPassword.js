import React from 'react';
import { StyleSheet, View, Text,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderText from '../../Components/HeaderText'
import FormButton from '../../Components/FormButton'
import InputField from '../../Components/InputField'
import FormTextButton from '../../Components/FormTextButton'

const ForgotPassword = () => {
	const navigation = useNavigation();

	return (
			<View style={styles.forgotPasswordContainer}>
        <FormTextButton onPress={()=>navigation.goBack()} buttonContainerStyle={styles.backButton}>Back</FormTextButton>
				<HeaderText headingText={['forgot','passwo','rd']} />

        <View style={styles.textContainer}>
          <Text style={styles.text} > Enter your registered email and we’ll send you instructions to reset your password</Text>
        </View>

        <InputField placeholder='Email' autoCompleteType='email' textContentType='emailAddress' />

        <View style={styles.footerButton}>
          <FormButton style={styles.button} onPress={()=> navigation.navigate('NewPassword') }>Submit</FormButton>
        </View>
			</View>
	);
};


// I used this ScreenHeight because Login button wasn't going to the bottom even with flex 1 on main container and position absolute, so this is a workaround for the time being
let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  forgotPasswordContainer:{
    flex: 1,
		height: ScreenHeight
  },
	footerButton: {
		// alignSelf: 'flex-end',
		// marginTop: 100
		position: 'absolute',
		bottom: 60,
		right: 0,
	},
  button: {
    marginTop: 40
  },
  text:{
    fontSize: 18,
    color: '#000239',
    textAlign: 'center'
  },
  textContainer: {
    marginTop: 20,
    textAlign: 'left',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  }
})

export default ForgotPassword;
