import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { router } from "expo-router"
import { MapsButton } from "@/components/Buttons/mapsButton"
import { BackButton } from "@/components/Buttons/backButton"

export default function Mapas() {
    const items = []


    for (let i = 1; i <= 42; i++) {
        items.push(<MapsButton key={i} title={i.toString()} onPress={() => { router.navigate("/opcoes") }} />)
    }

    return (

        <ScrollView style={styles.scrollContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Mapa 5</Text>
                <Image style={styles.img} source={require('../../assets/images/mapa5.jpg')} />
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