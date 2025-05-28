import { useState } from "react"
import { View, Text } from "react-native"
import { router } from "expo-router"
import { InitialButton } from "@/components/Buttons/initialButton"
import { styles } from "../styles/styles"
import { Opcoes } from "@/components/dropdowns/opcoes"
import { BackButton } from "@/components/Buttons/backButton"

export default function CodigoArea() {
    const [selectedArea, setSelectedArea] = useState<string | null>(null);

    function selecionarArea() {

        switch (selectedArea) {
            case "1":
                router.navigate("./mapa1");
                break;
            case '2':
                router.navigate("./mapa2");
                break;
            case '3':
                router.navigate("./mapa3");
                break;
            case '4':
                router.navigate("./mapa4");
                break;
            case '5':
                router.navigate("./mapa5");
                break;
            case '6':
                router.navigate("./mapa6");
                break;
            case '7':
                router.navigate("./mapa7");
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