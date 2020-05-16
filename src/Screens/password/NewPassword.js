import React from 'react';
import { StyleSheet, View,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderText from '../../Components/HeaderText'
import FormButton from '../../Components/FormButton'
import InputField from '../../Components/InputField'
import FormTextButton from '../../Components/FormTextButton'

const NewPassword = () => {
	const navigation = useNavigation();

	return (
			<View style={styles.newPasswordContainer}>
				<FormTextButton onPress={()=> navigation.goBack()} buttonContainerStyle={styles.backButton}>Back</FormTextButton>
				<HeaderText headingText={['new','passwo','rd']} />

        <InputField placeholder='New Password' autoCompleteType='password' textContentType='password' secureTextEntry={true} />
        <InputField placeholder='Confirm Password' autoCompleteType='password' textContentType='password' secureTextEntry={true} />

        <View style={styles.footerButton}>
          <FormButton style={styles.button} onPress={()=> navigation.navigate('PasswordChanged')}>Submit</FormButton>
        </View>
			</View>
	);
};


// I used this ScreenHeight because Login button wasn't going to the bottom even with flex 1 on main container and position absolute, so this is a workaround for the time being
let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  newPasswordContainer:{
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
	backButton: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  }
})

export default NewPassword;
