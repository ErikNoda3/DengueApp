import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import { InitialButton } from "@/components/Buttons/initialButton"
import { BackButton } from "@/components/Buttons/backButton"
import { styles } from "./styles"

export default function Home() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>OPÇÕES</Text>
            <InitialButton title="Tratamento" onPress={() => { router.navigate("/codigoArea") }} />
            <InitialButton title="LI + T" onPress={() => { router.navigate("/codigoArea") }} />
            <BackButton title="Sair" onPress={() => { router.back() }} />
        </View>
    )
}
