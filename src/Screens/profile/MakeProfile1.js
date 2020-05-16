import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderText from '../../Components/HeaderText'
import InputField from '../../Components/InputField'
import FormButton from '../../Components/FormButton'
import DropDown from '../../Components/DropDown'

const MakeProfile1 = () => {
	const navigation = useNavigation();

	return (
			<View>
				<HeaderText headingText={['make','profile']} />
				
        <DropDown options={['Hisar','Delhi']} placeholder='City' />
				<InputField placeholder='College' />
        <DropDown options={['1','2','3','4']} placeholder='Year Of Study' />
        <DropDown options={['CS','Mech','EEE','ENI']} placeholder='Branch' />
				<InputField placeholder='Registration ID number' />

        <FormButton style={styles.button} onPress={()=> navigation.navigate('MakeProfile2') }>next</FormButton>
        <View style={styles.stepsContainer}>
          <Text style={styles.boldFooterText}>Step 1</Text>
          <Text style={styles.footerText}> of 2</Text>
        </View>
			</View>
	);
};

const styles = StyleSheet.create({
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

export default MakeProfile1;
