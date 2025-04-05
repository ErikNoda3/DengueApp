import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import { styles } from "./styles"
import { BackButton } from "@/components/Buttons/backButton"

export default function Lit() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Levantamento de indices</Text>
            <BackButton title="Voltar" onPress={() => { router.back() }} />
        </View>
    )
}