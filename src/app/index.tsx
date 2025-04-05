import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import { InitialButton } from "@/components/Buttons/initialButton"
import { Input } from "@/components/input"
import { styles } from "./styles"

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
