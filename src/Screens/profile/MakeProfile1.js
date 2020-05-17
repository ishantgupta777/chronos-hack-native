import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import globalStyles from '../../../values/styles'
import Colors from '../../../values/colors'

import HeaderText from '../../Components/HeaderText'
import InputField from '../../Components/InputField'
import FormButton from '../../Components/FormButton'
import DropDown from '../../Components/DropDown'

const MakeProfile1 = () => {
	const navigation = useNavigation();

	return (
			<View style={globalStyles.container}>
				<Text style={globalStyles.title}>make</Text>
        <Text style={globalStyles.title}>profile</Text>
				
        <View style={{flex: 1, flexGrow: 1, marginTop: 100}}>
          <DropDown options={['Hisar','Delhi']} placeholder='City' />
          <InputField placeholder='College' />
          <DropDown options={['1','2','3','4']} placeholder='Year Of Study' />
          <DropDown options={['CS','Mech','EEE','ENI']} placeholder='Branch' />
          <InputField placeholder='Registration ID number' />
        </View>      
        <View style={{flex: 1, flexGrow: 1}}/>
        <View style={{flex: 1, flexGrow: 1}}>
          <FormButton style={styles.button} onPress={()=>navigation.navigate("MakeProfile2")}>submit</FormButton>
          <View style={{width: "100%", flexDirection: 'row'}}>
            <View style={{flex: 1}}/>
            <Text style={styles.bold_text}>Step 1</Text>
            <Text style={styles.reg_text}> of 2</Text>
          </View>
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
  },
  bold_text:{
    fontSize: 18,
    textAlign: 'right',
    marginBottom: 0,
    fontFamily: "ruda_black",
    color:Colors.dark_blue,
  },
  reg_text:{
    fontSize: 18,
    textAlign: 'right',
    marginBottom: 0,
    marginRight: 20,
    fontFamily: "ruda_reg",
    color:Colors.dark_blue,
  },
})

export default MakeProfile1;
