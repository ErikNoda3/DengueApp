import { View, Text } from "react-native"
import { router } from "expo-router"
import { InitialButton } from "@/components/Buttons/initialButton"
import { LoginInput } from "@/components/inputs/loginInput"
import { styles } from "../styles/styles"
import { useState } from "react"

export default function Index() {
    const [CPF, setCPF] = useState('')
    const [matricula, setMatricula] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <LoginInput keyboardType="numeric" onChangeText={(text) => { setCPF(text) }} value={CPF} placeholder="CPF (apenas os numeros)" />
            <LoginInput keyboardType="numeric" onChangeText={(text) => { setMatricula(text) }} value={matricula} placeholder="Matricula" />
            <InitialButton title="Entrar" onPress={() => router.push({ pathname: "/codigoArea", params: { CPF: CPF, matricula: matricula } })} />
        </View>
    )
}
