import React from 'react';
import { StyleSheet, View, Text,Dimensions } from 'react-native';

import HeaderText from '../../Components/HeaderText'
import InputField from '../../Components/InputField'
import FormButton from '../../Components/FormButton'

const MakeProfile2 = () => {

	return (
			<View style={styles.profileContainer}>
				<HeaderText headingText={['make','profile']} />
				
				<InputField placeholder='Role' />
				<InputField placeholder='Rank' />
				<InputField placeholder='Skills' />

        <View style={styles.footerButton}>
          <FormButton style={styles.button} onPress={()=>{}}>submit</FormButton>
          <View style={styles.stepsContainer}>
            <Text style={styles.boldFooterText}>Step 2</Text>
            <Text style={styles.footerText}> of 2</Text>
          </View>
        </View>
			</View>
	);
};


// I used this ScreenHeight because submit button wasn't going to the bottom even with flex 1 on main container and position absolute, so this is a workaround for the time being
let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  profileContainer:{
    flex: 1,
		height: ScreenHeight
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 10
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
  boldFooterText: {
    fontSize: 18,
    color: '#000239',
    textAlign: 'right',
    fontWeight: '700',
  },
  button: {
    marginTop: 40
  }
})

export default MakeProfile2;
