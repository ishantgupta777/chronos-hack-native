import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderText from '../../Components/HeaderText'
import InputField from '../../Components/InputField'
import FormButton from '../../Components/FormButton'
import FormTextButton from '../../Components/FormTextButton'

const SignUp = () => {

	const navigation = useNavigation();

	return (
			<View style={styles.loginContainer}>
				<HeaderText headingText={['log','in']} />
				
				<InputField placeholder='Email' autoCompleteType='email' textContentType='emailAddress' />
				<InputField placeholder='Password' autoCompleteType='password' textContentType='password' secureTextEntry={true} />

				<FormTextButton buttonTextStyle={styles.forgotButton} onPress={()=> navigation.navigate('ForgotPassword') }> Forgot Password? </FormTextButton>

				<View style={styles.footerButton}>
					<FormButton onPress={()=> navigation.navigate('MakeProfile1') }>Login</FormButton>
					<FormTextButton onPress={()=> navigation.navigate('SignUp') }> Don't have an account? SignUp</FormTextButton>
				</View>
			</View>
	);
};

// I used this ScreenHeight because Login button wasn't going to the bottom even with flex 1 on main container and position absolute, so this is a workaround for the time being
let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	loginContainer: {
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
	forgotButton: {
		fontWeight: '700',
		fontSize: 17
	}
})

export default SignUp;
