import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderText from '../../Components/HeaderText'
import InputField from '../../Components/InputField'
import FormButton from '../../Components/FormButton'
import FormTextButton from '../../Components/FormTextButton'

const SignUp = () => {
	const [termsAccepted, setTermsAccepted] = useState(false);

	const changeTermsAccepted = (val) => {
		setTermsAccepted(val => !val);
	}

	const navigation = useNavigation();

	const handleSubmit = () => {
		navigation.navigate('CheckMail');
	}

	return (
		<ScrollView>
			<HeaderText headingText={['Sign','up']} />
	
			<InputField placeholder='Name' autoCompleteType='name' textContentType='name' />
			<InputField placeholder='Email' autoCompleteType='email' textContentType='emailAddress' />
			<InputField placeholder='Phone Number' autoCompleteType='tel' textContentType='telephoneNumber' />
			<InputField placeholder='Password' autoCompleteType='password' textContentType='password' secureTextEntry={true} />
			<InputField placeholder='Confirm Password' autoCompleteType='password' textContentType='password' secureTextEntry={true} />

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
	}
})

export default SignUp;
