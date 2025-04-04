import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { router } from "expo-router"
import { MapsButton } from "@/components/mapsButton"
import { InitialButton } from "@/components/initialButton"


export default function Mapas() {
    const items = []


    for (let i = 1; i <= 37; i++) {
        items.push(<MapsButton key={i} title={i.toString()} onPress={() => { router.navigate("/lit") }} />)
    }

    return (

        <ScrollView style={styles.scrollContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Mapa Jardim Esperança</Text>
                <Image style={styles.img} source={require('../../assets/images/mapa1_Jd_Esperanca.jpg')} />
                <Text style={styles.choice}>Selecione o quarteirão</Text>
                <View style={styles.buttons}>
                    {items}
                </View>
                <InitialButton title="Voltar" onPress={() => { router.back() }} />
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
        alignItems: "center"
    },
    title: {
        padding: 15,
        fontSize: 50,
        fontWeight: "bold",
    },
    img: {
        width: "90%",

    },
    choice: {
        fontSize: 30,
        fontWeight: "bold",
        padding: 15
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