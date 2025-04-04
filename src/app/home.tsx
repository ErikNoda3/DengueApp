import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import { InitialButton } from "@/components/initialButton"

export default function Home() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>OPÇÕES</Text>
            <InitialButton title="Tratamento" onPress={() => { router.navigate("/codigoArea") }} />
            <InitialButton title="LI + T" onPress={() => { router.navigate("/codigoArea") }} />
            <InitialButton title="Sair" onPress={() => { router.back() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
        gap: 16
    },
    title: {
        color: "#453467",
        fontSize: 24,
        fontWeight: "bold"
    }
})