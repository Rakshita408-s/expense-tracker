import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { vh, vw } from '../Utils/dimensions'
import { Icons } from '../Assets'
import CustomTextField from '../Component/inputField'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddExpense = () => {
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [visible, setModalVisible] = useState(false);
  const [category,setCategory]= useState(null);
  const [name,setName]= useState(null);
  const [amount,setAmount]=useState(null);
  const handleDateChange = (event, date) => {
    if (date) {
      setSelectedStartDate(date);
    }
    setCalendarVisible(false);
  };
  const openCalendar = () => {
    setCalendarVisible(true);
    console.log('open', calendarVisible)
  };

  console.log('nameeee',name, amount,category,selectedStartDate)
  const saveData= async()=>{
    const dataToSave ={
        name:name,
        category:category,
        date:selectedStartDate,
        amount:amount,
    
    };
    await AsyncStorage.setItem('@expense',JSON.stringify(dataToSave));
  }

  const navigation = useNavigation();
  const handlenavigation = () => {
    saveData();
    navigation.navigate('Dashboard');
    console.log(name,category,amount,selectedStartDate)

  }
  const [inputValue, setInputValue] = useState('');
  const handleDescription = (description) => {
    setInputValue({ description });
  }
  const calenderOpen = () => {
    <Calendar
      onDayPress={day => {
        console.log('selected day', day);
      }}
    />
  }

  

  return (
    <LinearGradient colors={['#010101', '#631D1D', '#702224', '#421C1C']} style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.header}>ADD EXPENSE</Text>
        <Image source={Icons.addexpense} style={styles.img} />
      </View>
      <View style={styles.body}>
        <CustomTextField
          placeholder='Enter the expense name'
          value={name}
          onChangeText={value=>setName(value)}
        />
        <CustomTextField
          keyboardType="numeric"
          onChangeText={(value) => {
            value = value.replace(/[^0-9]/g, "");
            setAmount(value);
          }}
          value={amount}
          placeholder="Amount"
        />
        <View >

          <View style={{ position: 'relative' }}>
            <CustomTextField placeholder='Date'
         
              value={selectedStartDate ? selectedStartDate : ''}
              Image={Icons.Calendar}
            />
          </View>
          <TouchableOpacity style={styles.calenderview} onPress={openCalendar} >
            <Image source={Icons.Calendar} style={styles.calender} />
          </TouchableOpacity>
        </View>
        {calendarVisible && (
          <Calendar
            onDayPress={
              (res) => {
                setSelectedStartDate(res?.dateString)
                setCalendarVisible(!calendarVisible)
              }
            }
          />
        )}
        <CustomTextField placeholder='Category'
         value={category}
         onChangeText={text=>setCategory(text)} />
        <TouchableOpacity style={styles.buttonContainer} onPress={handlenavigation} >
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default AddExpense;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1313',
    flex: 1
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,

  },
  head: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vh(130)
  },
  body: {
    marginTop: vh(100)
  },
  img: {
    width: vw(20),
    height: vh(20),
    marginLeft: vw(10),
    marginTop: vw(5)
  },
  buttonContainer: {
    backgroundColor: 'white',
    padding: vw(15),
    width: vw(120),
    borderRadius: vw(30),
    margin: vw(7),
    marginLeft: vw(240)
  },
  button: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,


  },
  calender: {
    width: vw(30),
    height: vh(30),
  },
  calenderview: {
    position: "absolute",
    right: vw(30),
  },
  date: {
    position: 'relative'
  }

})