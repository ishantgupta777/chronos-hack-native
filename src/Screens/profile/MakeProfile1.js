import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

import HeaderText from '../../Components/HeaderText'
import InputField from '../../Components/InputField'
import FormButton from '../../Components/FormButton'
import DropDown from '../../Components/DropDown'

import {setProfile} from '../../redux/actions/profile' 

const MakeProfile1 = (props) => {
  const navigation = useNavigation();
  const [city, setCity] = useState(null);
  const [college, setCollege] = useState(null);
  const [year, setYear] = useState(null);
  const [branch, setBranch] = useState(null);
  const [registrationNo, setRegistrationNo] = useState(null);

  const [error, setError] = useState(null);
  
  const handleNext = () => {
    if(!city || !college || !year || !branch || !registrationNo ){
      setError('Please fill all fields');
      return
    }
  props.setProfile({
      city,
      college,
      year,
      branch,
      registrationNo
    })
    navigation.navigate('MakeProfile2')
  }

	return (
			<View>
				<HeaderText headingText={['make','profile']} />

				<Text style={styles.errorMessage}>{error}</Text>
				
        <DropDown value={city} setValue={setCity} options={['Hisar','Delhi']} placeholder='City' />
				<InputField value={college} setValue={setCollege} placeholder='College' />
        <DropDown value={year} setValue={setYear} options={['1','2','3','4']} placeholder='Year Of Study' />
        <DropDown value={branch} setValue={setBranch} options={['CS','Mech','EEE','ENI']} placeholder='Branch' />
				<InputField value={registrationNo} setValue={setRegistrationNo} placeholder='Registration ID number' />

        <FormButton style={styles.button} onPress={handleNext }>next</FormButton>
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
  },
  errorMessage: {
		color: '#F44336',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold'
	}
})

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setProfile: (data) => dispatch(setProfile(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MakeProfile1);
