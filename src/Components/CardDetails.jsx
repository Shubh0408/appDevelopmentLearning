import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardDetails = ({heading, imgsrc}) => {
  return (
    <View >
      <Text style={styles.Cardtext}>{heading}</Text>
      <Image style={styles.ImageStyle} source={imgsrc} />
    </View>
  )
}
const styles = StyleSheet.create({
    Cardtext:{
        fontSize: 30,
        textAlign: "center"
    },
    ImageStyle:{
        width: 200,
        height: 200,
        margin:4
    }
})

export default CardDetails
