import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import { InitialButton } from "@/components/initialButton"
import { Input } from "@/components/input"

export default function Index() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Input placeholder="Usuário" />
            <Input placeholder="Senha" autoComplete="password" secureTextEntry />
            <InitialButton title="Entrar" onPress={() => { router.navigate("/home") }} />
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