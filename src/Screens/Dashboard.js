import { useState } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

import { Icons } from '../Assets';
import {vh,vw} from '../Utils/dimensions'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PieChart } from "react-native-chart-kit";
const Dashboard = ({income}) => {
  const [chartData, setChartData] = useState([
    {
        name: "Food",
        amount: 30,
        color: "#e62d20",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "Clothes",
        amount: 20,
        color: "#27e620",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "Bills",
        amount: 10,
        color: "#1c6bd9",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "Others",
        amount: 10,
        color: "#5adbac",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
]);

const[dataIn, setDataIn] = useState([])
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@expense');
    console.log('jsonValue',jsonValue)
    console.log(jsonValue != null ? JSON.parse(jsonValue) : null,'ghjkl;');
     setDataIn(jsonValue != null ? JSON.parse(jsonValue) : null);
    
    
  } catch (e) {
    // error reading value
  }
};
  console.log('value-----',dataIn)

  const renderItem=({Item})=>{
    return(
      <View>
        <Text style={styles.text}>{Item.name}</Text>
        <Text style={styles.text}>{Item.amount}</Text>
        <Text style={styles.text}>{Item.date}</Text>
        <Text style={styles.text}>{Item.Category}</Text>
      </View>
    )
  }
  return (
   <View style={styles.container}>
    
     <View style={styles.header}>
      <Image source={Icons.icon} style={styles.icon}/>
      <TouchableOpacity style={styles.setting}>
       <Image source={Icons.setting} style={styles.settingicon}/>
       </TouchableOpacity>
     </View>

     <TouchableOpacity onPress={getData}>
      <Text>show</Text>
    </TouchableOpacity>
     <View style={styles.body}>
      <Text style={styles.Dashboard}>Dashboard</Text>
      
      <View style={styles.expenses}>
        <View style={styles.availabe}>
         
          <Image source={Icons.dot}/>
     
          <View style={styles.dot}>
          <Text style={styles.text}>Available Balance</Text>
          <Text style={styles.text}>$2000</Text>
          </View>
         
        </View>
        <View style={styles.spent}>
        <Image source={Icons.dot}/>
        <View style={styles.dot}>
          <Text style={styles.text}>Spent</Text>
          <Text style={styles.text}>$2000</Text>
          </View>
        </View>
        <View style={styles.earned}>
        <Image source={Icons.dot}/>
        <View style={styles.dot}>
          <Text style={styles.text}>Earned </Text>
          <Text style={styles.text}>$2000</Text>
          </View>
        </View>
      </View>
      <PieChart
                data={chartData}
                width={300}
                height={200}
                chartConfig={{
                    backgroundGradientFrom: "#1E2923",
                    backgroundGradientTo: "#08130D",
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                }}
                accessor="amount"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />


        <View>
          <FlatList 
          data={getData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          />
        </View>
     </View>
   </View>
  )
}

export default Dashboard;
const styles= StyleSheet.create({
  container:{
    backgroundColor:'#1F1313',
    flex:1
  },
  icon:{
    width:vw(50),
    height:vh(50),
    marginLeft:vw(170)
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:vh(50),
  },
  setting:{
   backgroundColor:'grey',
   padding:vw(15),
   borderRadius:vw(30),
  },
  settingicon:{
    width:vw(20),
    height:vh(20)
  },
  Dashboard:{
    fontSize:22,
    color:'grey',
    marginBottom:vh(10)
  },
  body:{
    paddingLeft:vw(10),
    paddingRight:vw(10),
    marginTop:vh(10)
  },
  expenses:{
    backgroundColor:'#A83434',
    flexDirection:'column',
    justifyContent:'space-between',
    padding:vw(20),
    borderRadius:vw(10)
  },
  text:{
    color:'white',
    fontSize:16,
    padding:vw(3)
  },
  availabe:{
    paddingBottom:vh(10),
    borderBottomWidth:2,
    borderBottomColor:'white',
    flexDirection:'row',
    marginBottom:vh(20),
    


  },
  spent:{
    paddingBottom:vh(10),
    flexDirection:'row',
  },
  earned:{
        flexDirection:'row'
  },
  dot:{
    flexDirection:"column",
    justifyContent:'space-between'
  }
})