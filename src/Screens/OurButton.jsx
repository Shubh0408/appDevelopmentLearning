import { Alert, Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export class OurButton extends Component {
    
  render() {
    const ClickableFunction = () =>  {
        alert("clicked");
    }
    return (
      <View>
        <Text style={styles.buttonStyle}>OurButton</Text>
        <Button title='Click' onPress={()=>{Alert.alert("alert ho gaya")}} disabled/>
        <TouchableOpacity onPress={()=>{Alert.alert("dubara alert ho gaya")}}><Text>touch button</Text></TouchableOpacity>
      </View>
    )
  }
}   
const styles = StyleSheet.create({
buttonStyle:{
    textAlign:"center",
    fontSize: 20
}
})
export default OurButton