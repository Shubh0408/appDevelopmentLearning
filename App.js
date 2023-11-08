import React from 'react'
import { StyleSheet, Text, View } from "react-native"
import Mainpage from './src/Screens/Mainpage'
import Tasks from './src/Screens/Tasks'
import Images from './src/Screens/images'
import OurButton from './src/Screens/OurButton'
import CardDetails from './src/Components/CardDetails'
import NetlixCard from './src/Components/NetlixCard'
import Loader from './src/Components/Loader'
import Counter from './src/Screens/Counter'
import GenerateColor from './src/Screens/GenerateColor'
import ApiCall from './src/Screens/ApiCall'

const App = () => {
  return (
    <View style={styles.viewStyle}>
      {/* <Text >Hello .....</Text> */}
      {/* <Mainpage /> */}
      {/* <Tasks /> */}
      {/* <Mainpage /> */}
      {/* <Images /> */}
      {/* <NetlixCard /> */}
      {/* <OurButton /> */}
      {/* <Loader /> */}
      {/* <Counter /> */}
      {/* <GenerateColor /> */}
      <ApiCall />
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