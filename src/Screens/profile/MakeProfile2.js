import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableHighlight } from 'react-native';

import styles from '../../../values/styles'
import Colors from '../../../values/colors'

import HeaderText from '../../Components/HeaderText'
import InputField from '../../Components/InputField'
import FormButton from '../../Components/FormButton'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const MakeProfile2 = () => {
  const navigation = useNavigation()

	return (
			<View style={styles.container}>
				<Text style={styles.title}>make</Text>
        <Text style={styles.title}>profile</Text>
				
        <View style={{flex: 1, flexGrow: 1, marginTop: 100}}>
          <InputField placeholder='Role' />
          <InputField placeholder='Rank' />
          <InputField placeholder='Skills' />
        </View>
        <View style={{flex: 1, flexGrow: 1}}/>
        <View style={{flex: 1, flexGrow: 1}}>
          <FormButton style={localStyles.button} onPress={()=>navigation.navigate("Dashboard")}>submit</FormButton>
          <View style={{width: "100%", flexDirection: 'row'}}>
            <View style={{flex: 1}}/>
            <Text style={localStyles.bold_text}>Step 2</Text>
            <Text style={localStyles.reg_text}> of 2</Text>
          </View>
        </View>
			</View>
	);
};


// I used this ScreenHeight because submit button wasn't going to the bottom even with flex 1 on main container and position absolute, so this is a workaround for the time being
let ScreenHeight = Dimensions.get("window").height;
const localStyles = StyleSheet.create({
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

export default MakeProfile2;
