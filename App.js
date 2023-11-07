import React from 'react'
import { StyleSheet, Text, View } from "react-native"
import Mainpage from './src/Screens/Mainpage'
import Tasks from './src/Screens/Tasks'
import Images from './src/Screens/images'
import OurButton from './src/Screens/OurButton'
import CardDetails from './src/Components/CardDetails'
import NetlixCard from './src/Components/NetlixCard'

const App = () => {
  return (
    <View style={styles.viewStyle}>
      {/* <Text >Hello .....</Text> */}
      {/* <Mainpage /> */}
      {/* <Tasks /> */}
      <Mainpage />
      {/* <Images /> */}
      <NetlixCard />
      {/* <OurButton /> */}
    </View>
  )
}
const styles = StyleSheet.create({
  viewStyle:{
    marginTop: "20%",
    // marginLeft: "25%",
  }
})
export default App