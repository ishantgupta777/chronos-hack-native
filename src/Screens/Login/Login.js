import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import globalStyles from '../../../values/styles'
import Colors from '../../../values/colors'

import HeaderText from '../../Components/HeaderText'
import InputField from '../../Components/InputField'
import FormButton from '../../Components/FormButton'
import FormTextButton from '../../Components/FormTextButton'

const Login = () => {

	const navigation = useNavigation();

	return (
			<View style={globalStyles.container}>
				<Text style={globalStyles.title}>log</Text>
        		<Text style={globalStyles.title}>in</Text>
				
				<View style={{flex: 1, flexGrow: 1, marginTop: 100}}>
					<InputField placeholder='Email' autoCompleteType='email' textContentType='emailAddress' />
					<InputField placeholder='Password' autoCompleteType='password' textContentType='password' secureTextEntry={true} />
					<FormTextButton buttonTextStyle={styles.termsTextBold} onPress={()=> navigation.navigate('ForgotPassword') }> Forgot Password? </FormTextButton>
				</View>
				<View style={{flex: 1, flexGrow: 1}}/>
				<View style={{flex: 1, flexGrow: 1}}>
				<FormButton onPress={()=>navigation.navigate("Dashboard")}>submit</FormButton>
					<View style={{width: "100%", flexDirection: 'row'}}>
						<View style={{flex: 1}}/>
						<Text style={styles.termsText}>Don't have an account? </Text>
						<Text style={styles.termsTextBold} onPress={() => navigation.navigate("Login")}>Signup</Text>
					</View>
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
	},
	termsText: {
		fontSize: 18,
		textAlign: 'right',
		marginBottom: 0,
		fontFamily: "ruda_reg",
		color:Colors.dark_blue,
	},
	termsTextBold: {
		fontSize: 18,
		fontFamily: "ruda_black",
		marginRight: 20,
		color: Colors.dark_blue
	}
})

export default Login;
