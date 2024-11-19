import React, { useEffect, useState } from "react";
import { View, Text ,Image, StyleSheet} from 'react-native'

import { Images,Icons } from '../Assets'
import { SCREEN_HEIGHT, SCREEN_WIDTH ,vh,vw} from '../Utils/dimensions'


const SplashScreen = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(true);

  const hideSplashScreen = () => {
    setIsVisible(false);
  };

  const navigateBasedOnState = ()=> {
 
    navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      hideSplashScreen();
      navigateBasedOnState();
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  if (!isVisible) {
    return null;
  }
  return (
    <View>
    <View style={styles.imgConatiner}>
      <Image source={Images.splash}  style={styles.img}/>
      </View>
      <View style={styles.upper}>
      <Image source={Icons.icon} style={styles.icon}/>
      <View style={styles.text}>
        <Text style={styles.txt}>ExpenseTracker</Text>
        </View>
      </View>
    </View>
  )
}

export default SplashScreen
const styles=  StyleSheet.create({
    img:{
        resizeMode:'contain',
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT,
        position:'relative'
    },
    txt:{
        color:'white',
        fontSize:22,
        fontWeight:'500',
        
    },
    upper:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center'
    },
    
    icon:{
        width:vw(60),
        height:vh(60),
        marginTop:vh(350),
        marginLeft:vw(100),
      
    
    },
    text:{
        paddingVertical:vw(20),
        marginLeft:vw(120)
    }
})