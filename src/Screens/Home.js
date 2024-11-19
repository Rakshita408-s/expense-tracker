import { View, Text,StyleSheet ,Image, TextInput,Button,TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import color from '../Utils/color';
import { Icons } from '../Assets';
import {SCREEN_HEIGHT, SCREEN_WIDTH, vh,vw} from '../Utils/dimensions';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation= useNavigation();
const handlenavigation=()=>{
    navigation.navigate('Dashboard')
}
  return (
    <LinearGradient colors={['#010101','#631D1D']} style={styles.linearGradient}>
        <Image source={Icons.icon} style={styles.img}/>
      <Text style={styles.text}>You are just one step away!</Text>
      <View style={styles.inputContainer}>
       <TextInput style={styles.inputField} placeholder='Name'  placeholderTextColor="white" />
       <TextInput style={styles.inputField} placeholder='Monthly Income' placeholderTextColor="white"/>
       <TextInput style={styles.inputField} placeholder='Total Balance' placeholderTextColor="white"/>
      </View>
      <TouchableOpacity style={styles.buttonContainer}onPress={handlenavigation} >
         <Text style={styles.button}  >Let's go</Text>
      </TouchableOpacity>
      
  </LinearGradient>
  )
}

export default HomeScreen;
const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
    
    },
    img:{
        width:vw(80),
        height:vh(80),
        resizeMode:'contain',
        marginLeft:vw(140),
        marginTop:vh(160),
    },
    text:{
        color:'white',
       textAlign:'center',
       paddingVertical:vh(20),
       fontSize:18,
     
    },
    inputField:{
        
        color:'white',
         height: vh(30),
         paddingLeft:vw(10),
         marginVertical:vh(10),
         borderRadius:vw(5),
         borderBottomColor:'white',
         borderBottomWidth:2,
    },
    inputContainer:{
       padding:vw(20),
       backgroundColor:'#363636',
       marginLeft:vw(10),
       marginRight:vw(10),
       borderRadius:vw(10)
    },
    buttonContainer:{
        backgroundColor:'white',
        padding:vw(15),
        width:vw(120),
        borderRadius:vw(30),
        margin:vw(7),
        marginLeft:vw(240)
    },
    button:{
      color:'black',
      textAlign:'center',
      fontSize:16,


    }

  
  });
