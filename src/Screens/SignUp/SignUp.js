import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import validator from 'validator';
import axios from 'axios';

import HeaderText from '../../Components/HeaderText'
import InputField from '../../Components/InputField'
import FormButton from '../../Components/FormButton'
import FormTextButton from '../../Components/FormTextButton'

const SignUp = () => {
	const [termsAccepted, setTermsAccepted] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [mobileNo, setMobileNo] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);
	const [email, setEmail] = useState('');

	const [error, setError] = useState(null);

	const changeTermsAccepted = (val) => {
		setTermsAccepted(val => !val);
	}

	const navigation = useNavigation();

	const handleSubmit = async () => {
		// if(!firstName || !firstName.trim()){
		// 	setError('Please Fill First Name')
		// 	return
		// }

		// if(!lastName || !lastName.trim()){
		// 	setError('Please Fill Last Name')
		// 	return
		// }

		// if(!email || !email.trim()){
		// 	setError('Please Fill Email')
		// 	return
		// }

		// if(!validator.isEmail(email)){
		// 	setError('Please Fill Correct Email')
		// 	return
		// }

		// if(!password){
		// 	setError('Please Fill Password')
		// 	return
		// }

		// if(password !== confirmPassword){
		// 	setError('Password did not match')
		// 	return
		// }

		// if(!termsAccepted){
		// 	setError('Please accept terms and conditions')
		// 	return
		// }

		// const firstNameTrim = firstName.trim();
		// const lastNameTrim = lastName.trim();
		// const emailTrim = email.trim().toLowerCase();
		// const mobileNoTrim = mobileNo.trim();

		// try{
		// 	const signUpObj = {
		// 		firstName : firstNameTrim,
		// 		lastName : lastNameTrim,
		// 		email : emailTrim,
		// 		mobileNo : mobileNoTrim,
		// 		password
		// 	}
		// 	const res = await axios.post('http://192.168.99.100:4192/api/v1/signup',signUpObj)
		// 	if(res.data.success)
				navigation.navigate('CheckMail');
		// 	else
		// 		setError(res.data.error.message)
		// }catch(err){
		// 	setError('There is some error in signing you up')
		// 	console.log(res.data.error.message);
		// }
	}

	return (
		<ScrollView>
			<HeaderText headingText={['Sign','up']} />
			
			<Text style={styles.errorMessage}>{error}</Text>

			<InputField value={firstName} setValue={setFirstName} placeholder='First Name' autoCompleteType='name' textContentType='name' />
			<InputField value={lastName} setValue={setLastName} placeholder='Last Name' autoCompleteType='name' textContentType='name' />
			<InputField value={email} setValue={setEmail} placeholder='Email' autoCompleteType='email' textContentType='emailAddress' />
			<InputField value={mobileNo} setValue={setMobileNo} placeholder='Phone Number' autoCompleteType='tel' textContentType='telephoneNumber' />
			<InputField value={password} setValue={setPassword} placeholder='Password' autoCompleteType='password' textContentType='password' secureTextEntry={true} />
			<InputField value={confirmPassword} setValue={setConfirmPassword} placeholder='Confirm Password' autoCompleteType='password' textContentType='password' secureTextEntry={true} />

			<View style={styles.terms}>
				<CheckBox
					value={termsAccepted}
					onValueChange={changeTermsAccepted}
				/>
				<Text style={styles.termsText}>I agree to </Text>
				<Text style={styles.termsTextBold}>Terms And Conditions	</Text>
			</View>

			<FormButton onPress={handleSubmit}>Submit</FormButton>

			<FormTextButton onPress={()=> navigation.navigate('Login') }> Already a Member? Login</FormTextButton>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	terms: {
		flexDirection: 'row',
		width: '90%',
		justifyContent: 'center',
		marginTop: 20,
		alignItems: 'center'
	},
	termsText: {
		fontWeight: '500',
		fontSize: 16
	},
	termsTextBold: {
		fontWeight: '700',
		fontSize: 18,
		color: '#000239'
	},
	errorMessage: {
		color: '#F44336',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold'
	}
})

export default SignUp;
