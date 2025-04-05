import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import { InitialButton } from "@/components/Buttons/initialButton"
import { styles } from "./styles"
import { Opcoes } from "@/components/opcoes"
import { BackButton } from "@/components/Buttons/backButton"

export default function CodigoArea() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Insira o codigo da área</Text>
            <Opcoes />
            <InitialButton title="Entrar" onPress={() => { router.navigate("./mapaJdEsperanca") }} />
            <BackButton title="Voltar" onPress={() => { router.back() }} />
        </View>
    )
}