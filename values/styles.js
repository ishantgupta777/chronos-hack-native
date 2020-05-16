import {StyleSheet, Dimensions} from 'react-native'
import Colors from "./colors"

let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: ScreenHeight,
      flexDirection: "column",
      backgroundColor: Colors.complementary_blue,
    },
    title:{
      fontSize: 80,
      textAlign: 'right',
      marginTop: 20,
      marginBottom: -60,
      marginRight: 10,
      fontFamily: "rubik",
      color:Colors.dark_blue
    },
    buttonText:{
      fontSize: 36,
      textAlign: 'right',
      marginTop: 20,
      marginRight: 20,
      marginLeft: 70,
      marginBottom: 10,
      fontFamily: "rubik",
      color:Colors.white
    },
    submit_button:{
      alignSelf:'baseline',
      backgroundColor:Colors.dark_blue,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15, 
      borderTopRightRadius: 10,
      borderBottomRightRadius: 3,
      position: 'absolute',
      bottom: 20,
      right: 20
    },
    secondary_text:{
      fontSize: 16,
      textAlign: 'right',
      marginTop: 100,
      marginRight: 20,
      marginLeft: 70,
      marginBottom: 0,
      fontFamily: "ruda_reg",
      color:Colors.dark_blue,
    },
    scrollview:{  
      flex: 1,
      flexGrow: 1,
      backgroundColor: Colors.complementary_blue
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
  });

export default styles