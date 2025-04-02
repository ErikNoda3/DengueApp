import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import { InitialButton } from "@/components/initialButton"
import { Input } from "@/components/input"

export default function Index() {

    function handleLogin() {
        router.navigate("/home")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>OPÇÕES</Text>
            <InitialButton title="Login" onPress={handleLogin} />
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