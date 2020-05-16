import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const HeaderText = (props) => {
  return (
    <View style={styles.mainTextContainer}>
			{props.headingText.map((text,i) => <Text key={i} style={styles.mainText}>{text}</Text>)}      
		</View>
  );
}

const styles = StyleSheet.create({
	mainTextContainer: {
		paddingTop: 70
	},
	mainText: {
		fontSize: 95,
		fontWeight: 'bold',
		lineHeight: 95,
		textAlign: 'right',
		color: '#000239',
		letterSpacing: 3
	}
})

export default HeaderText;
