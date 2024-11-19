import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import {vh,vw} from '../Utils/dimensions'
import { Icons } from '../Assets'
import CustomTextField from '../Component/inputField'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const AddIncome = () => {
  const navigation= useNavigation();
  const handlenavigation=()=>{
      navigation.navigate('Dashboard');
      console.log('description',description)

  }
  const [description,setDescription]=useState('');
  const [category,setCategory]= useState('');
  const handleDescription=(description)=>{
    setDescription({description});
  }

  return (
    <LinearGradient colors={['#010101','#631D1D','#702224','#421C1C']} style={styles.container}>
      <View style={styles.head}> 
        <Text style={styles.header}>ADD EXPENSE</Text>
        <Image source={Icons.addexpense} style={styles.img}/>
      </View>
      <View style={styles.body}>
        <CustomTextField placeholder='Description' 
        value={description} 
        onChangeText={handleDescription}/>
        <CustomTextField placeholder='Category'/>
    
        <TouchableOpacity style={styles.buttonContainer} onPress={handlenavigation} >
         <Text style={styles.button}>Add</Text>
      </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default AddIncome
const styles= StyleSheet.create({
container:{
  backgroundColor:'#1F1313',
  flex:1
},
header:{
textAlign:'center',
color:'white',
fontSize:24,

},
head:{
flexDirection:'row',
justifyContent:'center',
marginTop:vh(130)
},
body:{
marginTop:vh(100)
},
img:{
  width:vw(20),
  height:vh(20),
 marginLeft:vw(10),
 marginTop:vw(5)
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

})