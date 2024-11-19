import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import {vh,vw} from '../Utils/dimensions'

const inputField = ({placeholder,value,onChangeText}) => {
  return (
    <View style={styles.input}>
    <TextInput style={styles.inputField} 
     placeholder={placeholder} 
     placeholderTextColor="white"
     onChangeText={onChangeText}
     value={value} />
    </View>
  )
}

export default inputField
const styles = StyleSheet.create({
inputField:{   
    color:'white',
     height: vh(30),
     paddingLeft:vw(10),
     marginVertical:vh(10),
     borderRadius:vw(5),
     borderBottomColor:'white',
     borderBottomWidth:2,
},
input:{
    marginLeft:vw(30),
    marginRight:vw(30)
}
})