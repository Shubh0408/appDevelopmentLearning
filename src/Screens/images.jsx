import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Images = () => {
    return (
        <View>
            <View style={styles.mainPageStyle}>
                <Text style={styles.textStyle}>Images</Text>
                <Image style={styles.imageStyle} source={require("../../assets/test1.jpeg")} />
                {/* <Image style={styles.imageStyle} source={require("../../assets/test2.jpeg")} />
            <Image style={styles.imageStyle} source={require("../../assets/test3.jpeg")} />
            <Image style={styles.imageStyle} source={require("../../assets/test4.jpeg")} /> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainPageStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        fontSize: 20
    },
    imageStyle: {
        width: 300,
        height: 300,
        margin: 5
    }
})

export default Images