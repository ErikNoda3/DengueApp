import { View, Text, Pressable, Alert } from "react-native"
import { router } from "expo-router"
import { InitialButton } from "@/components/Buttons/initialButton"
import { styles } from "../styles/styles"
import { useState } from "react"
import { LitInput } from "@/components/inputs/litInput"

export default function Index() {
    const [CPF, setCPF] = useState('')
    const [matricula, setMatricula] = useState('')

    function acessar() {
        Alert.alert("Confirmar", `Confirme seu CPF e sua matrícula, por favor.\nCPF: ${CPF}\nMatrícula: ${matricula}`, [
            { text: "Voltar", style: "cancel" },
            {
                text: "Confirmar",
                style: "destructive",
                onPress: () => {

                    router.push({ pathname: "/codigoArea", params: { CPF: CPF, matricula: matricula } })
                }
            }
        ])

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <LitInput label="CPF" keyboardType="numeric" placeholder="Apenas valores numéricos" value={CPF} onChangeText={setCPF} />
            <LitInput label="Matrícula" keyboardType="numeric" placeholder="Apenas valores numéricos" value={matricula} onChangeText={setMatricula} />
            {/* <InitialButton title="Entrar" onPress={() => router.push({ pathname: "/codigoArea", params: { CPF: CPF, matricula: matricula } })} /> */}
            <InitialButton title="Entrar" onPress={acessar} />

        </View>
    )
}
