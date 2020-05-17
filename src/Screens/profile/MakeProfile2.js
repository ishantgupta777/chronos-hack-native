import React, {useState} from 'react';
import { StyleSheet, View, Text,Dimensions } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';

import HeaderText from '../../Components/HeaderText'
import InputField from '../../Components/InputField'
import FormButton from '../../Components/FormButton'

import {setProfile} from '../../redux/actions/profile' 

const MakeProfile2 = async (props) => {

  const [role, setRole] = useState(null);
  const [rank, setRank] = useState(null);
  const [skill, setSkill] = useState(null);

  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    // if(!role || !rank || !skill ){
    //   setError('Please fill all fields');
    //   return
    // }

    props.setProfile({
      role,
      rank,
      skill
    })
		try{
			const profileObj = props.profile
			const res = await axios.post('http://192.168.99.100:4192/api/v1/completeProfile/',profileObj)
			console.log(res.data)
			if(res.data.success){
        // navigation.navigate('MakeProfile1');
      }
			else
				setError(res.data.error.message)
      }catch(err){
        console.log(err)
        setError('There is some error in signing you up')
      }

  }

	return (
			<View style={styles.profileContainer}>
				<HeaderText headingText={['make','profile']} />

				<Text style={styles.errorMessage}>{error}</Text>
				
				<InputField value={role} setValue={setRole} placeholder='Role' />
				<InputField value={rank} setValue={setRank} placeholder='Rank' />
				<InputField value={skill} setValue={setSkill} placeholder='Skills' />

        <View style={styles.footerButton}>
          <FormButton style={styles.button} onPress={handleSubmit}>submit</FormButton>
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


export default connect(mapStateToProps, mapDispatchToProps)(MakeProfile2);
