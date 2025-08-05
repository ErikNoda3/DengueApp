import { View, Text, StyleSheet, ScrollView } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { InitialButton } from "@/components/Buttons/initialButton"
import { BackButton } from "@/components/Buttons/backButton"
import { styles } from "../styles/styles"
import { useState } from "react"

export default function Opcoes() {

    const { quarteirao } = useLocalSearchParams()
    const params = useLocalSearchParams()
    const [CPF, setCPF] = useState(params.CPF.toString());
    const [matricula, setMatricula] = useState(params.matricula.toString());
    const [mapa, setMapa] = useState(params.mapa)
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Quarteirão selecionado: {quarteirao}</Text>
                <Text style={styles.title}>Opções</Text>
                <InitialButton title="Tratamento (T)" onPress={() => router.push({ pathname: "/tratamento", params: { quarteirao: quarteirao, CPF: CPF, matricula: matricula, mapa: mapa } })} />
                <InitialButton title="Levantamento de indices (LI)" onPress={() => router.push({ pathname: "/levIndices", params: { quarteirao: quarteirao, CPF: CPF, matricula: matricula, mapa: mapa } })} />
                <InitialButton title="Li + T" onPress={() => router.push({ pathname: "/lit", params: { quarteirao: quarteirao, CPF: CPF, matricula: matricula, mapa: mapa } })} />
                <BackButton title="Sair" onPress={() => { router.back() }} />
            </View>
        </ScrollView>
    )
}

