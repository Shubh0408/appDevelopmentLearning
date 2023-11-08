import { Button, Image, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NetlixCard = () => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.Heading}>Details Card</Text>
            <View style={styles.Posterinfo}>
                <Image style={styles.posterImg} source={require("../../assets/test1.jpeg")} />
                <Text style={styles.posterTitle}>Scooter</Text>
                <Text style={styles.posterText}>A scooter is a bicycle or tricycle with very small wheels. Some scooters have a motor, some have pedals, and some are pushed with the foot. Scooters with motors are called motor scooters.There are many different kinds of scooters.</Text>
                <Button style={styles.posterButton} title='watch now' onPress={() => Linking.openURL("https://shubhverma.vercel.app/")} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Heading: {
        fontSize: 25
    },
    posterImg: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    Posterinfo: {
        width: 250,
        borderWidth: 1,
        padding: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    posterTitle: {
        fontSize: 20
    },
    posterText: {
        textAlign: "justify",
        padding: 10,

    },
    posterButton: {},
    mainView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default NetlixCard
