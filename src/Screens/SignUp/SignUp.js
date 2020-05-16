import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View, CheckBox, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import globalStyles from '../../../values/styles'
import Colors from '../../../values/colors'

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
		<View style={globalStyles.container}>
			<Text style={globalStyles.title}>sign</Text>
        	<Text style={globalStyles.title}>up</Text>
	
			<View style={{flex: 1, flexGrow: 1, marginTop: 100}}>
				<InputField placeholder='Name' autoCompleteType='name' textContentType='name' />
				<InputField placeholder='Email' autoCompleteType='email' textContentType='emailAddress' />
				<InputField placeholder='Phone Number' autoCompleteType='tel' textContentType='telephoneNumber' />
				<InputField placeholder='Password' autoCompleteType='password' textContentType='password' secureTextEntry={true} />
				<InputField placeholder='Confirm Password' autoCompleteType='password' textContentType='password' secureTextEntry={true} />
			</View>
			<View style={{flex: 1, flexGrow: 1}}/>
			<View style={{width: "90%", flexDirection: 'row', marginStart: 20, alignItems: "center"}}>
				<CheckBox
					value={termsAccepted}
					onValueChange={changeTermsAccepted}
				/>
				<Text style={styles.termsText}>I agree to </Text>
				<Text style={globalStyles.bold_text}>Terms And Conditions</Text>
			</View>

			<View style={{flex: 1, flexGrow: 1}}>
				<FormButton onPress={()=>navigation.navigate("CheckMail")}>submit</FormButton>
				<View style={{width: "100%", flexDirection: 'row'}}>
					<View style={{flex: 1}}/>
					<Text style={styles.termsText}>Already have an account? </Text>
					<Text style={styles.termsTextBold} onPress={() => navigation.navigate("Login")}>Login</Text>
				</View>
			</View>
		</View>
	);
};

let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
	terms: {
		flexDirection: 'row',
		width: '90%',
		justifyContent: 'center',
		marginTop: 20,
		marginStart: 20,
		alignItems: 'center',
		height: ScreenHeight
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

export default SignUp;
