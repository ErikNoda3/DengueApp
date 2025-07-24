import { useState } from "react"
import { View, Text } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { InitialButton } from "@/components/Buttons/initialButton"
import { styles } from "../styles/styles"
import { Opcoes } from "@/components/dropdowns/opcoes"
import { BackButton } from "@/components/Buttons/backButton"

export default function CodigoArea() {
    const params = useLocalSearchParams()
    const [CPF, setCPF] = useState(params.CPF.toString());
    const [matricula, setMatricula] = useState(params.matricula.toString());

    const [selectedArea, setSelectedArea] = useState<string | null>(null);
    function selecionarArea() {

        switch (selectedArea) {
            case "1":
                // router.navigate("./mapa1");
                router.push({ pathname: "./mapa1", params: { CPF: CPF, matricula: matricula } })
                break;
            case '2':
                router.push({ pathname: "./mapa2", params: { CPF: CPF, matricula: matricula } })
                break;
            case '3':
                router.push({ pathname: "./mapa3", params: { CPF: CPF, matricula: matricula } })
                break;
            case '4':
                router.push({ pathname: "./mapa4", params: { CPF: CPF, matricula: matricula } })
                break;
            case '5':
                router.push({ pathname: "./mapa5", params: { CPF: CPF, matricula: matricula } })
                break;
            case '6':
                router.push({ pathname: "./mapa6", params: { CPF: CPF, matricula: matricula } })
                break;
            case '7':
                router.push({ pathname: "./mapa7", params: { CPF: CPF, matricula: matricula } })
                break;
            default:
                alert("Selecione uma área primeiro!");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Insira o codigo da área</Text>
            <Opcoes value={selectedArea} onChange={setSelectedArea} />

            <InitialButton title="Entrar" onPress={selecionarArea} />
            <BackButton title="Voltar" onPress={() => { router.back() }} />
        </View>
    )
}