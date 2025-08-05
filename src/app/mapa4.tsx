import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { MapsButton } from "@/components/Buttons/mapsButton"
import { BackButton } from "@/components/Buttons/backButton"
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view'
import { useState } from "react"

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height

export default function Mapa4() {
    const params = useLocalSearchParams()
    const [CPF, setCPF] = useState(params.CPF.toString());
    const [matricula, setMatricula] = useState(params.matricula.toString());

    const items = []
    for (let i = 1; i <= 77; i++) {
        items.push(
            <MapsButton
                key={i}
                title={i.toString()}
                onPress={() => router.push({ pathname: "/opcoes", params: { quarteirao: i, CPF: CPF, matricula: matricula, mapa: '4' } })}
            />
        )
    }

    return (

        <ScrollView style={styles.scrollContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Mapa 4</Text>
                <View style={styles.zoomContainer}>

                    <ReactNativeZoomableView
                        maxZoom={4}
                        minZoom={1}
                        zoomStep={0.1}
                        bindToBorders={true}
                        panBoundaryPadding={50}
                    >
                        <Image style={styles.img} source={require('../../assets/images/mapa4.jpg')} />
                    </ReactNativeZoomableView>
                </View>
                <Text style={styles.choice}>Selecione o quarteirão</Text>
                <View style={styles.buttons}>
                    {items}
                </View>
                <BackButton title="Voltar" onPress={() => { router.back() }} />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    title: {
        marginVertical: 50,
        padding: 15,
        fontSize: 50,
        fontWeight: "bold",
    },
    zoomContainer: {
        width: screenWidth * 0.75,
        height: screenHeight * 0.9,
        overflow: "hidden",
        borderRadius: 12,
        borderColor: 'gray',
        borderWidth: 2
    },
    img: {
        width: '100%',
        height: '100%',
        aspectRatio: 900 / 700,
        resizeMode: 'contain'
    },
    choice: {
        marginVertical: 30,
        fontSize: 30,
        fontWeight: "bold",
        padding: 10
    },
    buttons: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 10,
        width: "90%",
        padding: 20
    }
})