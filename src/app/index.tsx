import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import { InitialButton } from "@/components/Buttons/initialButton"
import { LoginInput } from "@/components/inputs/loginInput"
import { styles } from "../styles/styles"

export default function Index() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <LoginInput placeholder="Usuário" />
            <LoginInput placeholder="Senha" autoComplete="password" secureTextEntry />
            <InitialButton title="Entrar" onPress={() => { router.navigate("/codigoArea") }} />
        </View>
    )
}
