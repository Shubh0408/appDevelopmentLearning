import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import CardDetails from '../Components/CardDetails'

const Images = () => {
    return (
        <View style={styles.mainview}>
          <ScrollView >
          <CardDetails heading="Image1"  imgsrc={require("../../assets/test1.jpeg")}/>
           <CardDetails heading="Image2" imgsrc={require("../../assets/test3.jpeg")} />
           <CardDetails heading="Image3" imgsrc={require("../../assets/test4.jpeg")} />
           <CardDetails heading="Image4" imgsrc={require("../../assets/test2.jpeg")} />
          </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    mainview:{
        backgroundColor: "powderblue",
        display: "flex",
        height: 600,
        overflow: "scroll"
    }
})

export default Images