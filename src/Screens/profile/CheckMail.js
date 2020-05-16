import React from 'react';
import { StyleSheet, View, Text,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderText from '../../Components/HeaderText'
import FormButton from '../../Components/FormButton'

const MakeProfile2 = () => {

	const navigation = useNavigation();

	return (
			<View style={styles.profileContainer}>
				<HeaderText headingText={['check','email']} />

        <View style={styles.textContainer}>
          <Text style={styles.text} > A verification mail has been sent to </Text>
          <Text style={styles.boldText}> email@example.com </Text>
          <Text style={styles.text}> Please check your email</Text>
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
  profileContainer:{
    flex: 1,
		height: ScreenHeight
  },
  footerText: {
    fontSize: 18,
    color: '#000239',
    textAlign: 'right',
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
  boldText: {
    fontSize: 18,
    color: '#000239',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textContainer: {
    marginTop: 20
  }
})

export default MakeProfile2;
