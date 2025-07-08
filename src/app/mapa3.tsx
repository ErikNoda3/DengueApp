import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { router } from "expo-router"
import { MapsButton } from "@/components/Buttons/mapsButton"
import { BackButton } from "@/components/Buttons/backButton"

export default function Mapas() {
    const items = []


    for (let i = 1; i <= 45; i++) {
        items.push(<MapsButton key={i} title={i.toString()} onPress={() => router.push({ pathname: "/opcoes", params: { quarteirao: i } })} />)
    }

    return (

        <ScrollView style={styles.scrollContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Mapa 3</Text>
                <ScrollView
                    style={styles.zoomContainer}
                    contentContainerStyle={styles.imgContainer}
                    maximumZoomScale={5}
                    minimumZoomScale={1}
                    pinchGestureEnabled={true}
                    horizontal
                >
                    <Image style={styles.img} source={require('../../assets/images/mapa3.jpg')} />
                </ScrollView>
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
        // width: '100%',
        height: '100%',
    },
    imgContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 900,
        height: 700,
        resizeMode: "contain",

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