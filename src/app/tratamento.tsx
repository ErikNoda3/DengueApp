import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import colors from "@/constants/colors"
import { BackButton } from "@/components/Buttons/backButton"

export default function Tratamento() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tratamento</Text>
            <BackButton title="Voltar" onPress={() => { router.back() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
        gap: 16

    },
    title: {
        color: colors.text,
        fontSize: 24,
        fontWeight: "bold"
    }
})