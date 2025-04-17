import { View, Text, StyleSheet } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { InitialButton } from "@/components/Buttons/initialButton"
import { BackButton } from "@/components/Buttons/backButton"
import { styles } from "./styles"

export default function Opcoes() {

    const { quarteirao } = useLocalSearchParams()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quarteirão selecionado: {quarteirao}</Text>
            <Text style={styles.title}>Opções</Text>
            <InitialButton title="Tratamento" onPress={() => { router.navigate("/tratamento") }} />
            <InitialButton title="LI + T" onPress={() => router.push({ pathname: "/lit", params: { quarteirao: quarteirao } })} />
            <BackButton title="Sair" onPress={() => { router.back() }} />
        </View>
    )
}
