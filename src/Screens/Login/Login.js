import React, {useState} from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import validator from 'validator';

import HeaderText from '../../Components/HeaderText'
import InputField from '../../Components/InputField'
import FormButton from '../../Components/FormButton'
import FormTextButton from '../../Components/FormTextButton'

const Login = () => {
	const navigation = useNavigation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState(null);

	const [error, setError] = useState(null);

	const handleLogin = async () => {
		if(!email || !email.trim()){
			setError('Please Fill Email')
			return
		}

		if(!validator.isEmail(email)){
			setError('Please Fill Correct Email')
			return
		}

		if(!password){
			setError('Please Fill Password')
			return
		}

		const emailTrim = email.trim().toLowerCase();

		try{
			const loginObj = {
				email : emailTrim,
				password
			}
			const res = await axios.post('http://192.168.99.100:4192/api/v1/login',loginObj)
			console.log(res.data)
			// because mail verification isn't completed yet from the backend, that's why its a workaround for test, after completion we will change if condition to see user is verified
			if(res.data.error.msg == 'Your email has not been verified')
				navigation.navigate('MakeProfile1');
			else
				setError(res.data.error.message)
		}catch(err){
			console.log(err)
			setError('There is some error in signing you up')
		}

	}

	return (
			<View style={styles.loginContainer}>
				<HeaderText headingText={['log','in']} />

				<Text style={styles.errorMessage}>{error}</Text>
				
				<InputField value={email} setValue={setEmail} placeholder='Email' autoCompleteType='email' textContentType='emailAddress' />
				<InputField value={password} setValue={setPassword} placeholder='Password' autoCompleteType='password' textContentType='password' secureTextEntry={true} />

				<FormTextButton buttonTextStyle={styles.forgotButton} onPress={()=> navigation.navigate('ForgotPassword') }> Forgot Password? </FormTextButton>

				<View style={styles.footerButton}>
					<FormButton onPress={handleLogin}>Login</FormButton>
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
	},
	errorMessage: {
		color: '#F44336',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold'
	}
})

export default Login;
