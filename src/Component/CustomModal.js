import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedbackComponent } from 'react-native'
import React from 'react'

const CustomModal = ({onPress}) => {
  return (
    <TouchableWithoutFeedbackComponent>
    <Modal>
    <View style={StyleSheet.main}>
        <TouchableOpacity onPress={onPress}>
        <Text>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
        <Text>Clothes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
        <Text>Other</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
        <Text>Bills</Text>
        </TouchableOpacity>
       
    </View>
  </Modal>
  </TouchableWithoutFeedbackComponent>
  )
}

export default CustomModal
const styles=StyleSheet.create({
    main:{
        backgroundColor:'white'
    }
})