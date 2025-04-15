import { useState } from "react"
import { View, Text, ScrollView, Alert } from "react-native"
import { router } from "expo-router"
import { styles } from "./styles"
import { LitInput } from "@/components/inputs/litInput"
import { BackButton } from "@/components/Buttons/backButton"
import { InitialButton } from "@/components/Buttons/initialButton"
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'

export default function Lit() {
    const [quarteirao, setQuarteirao] = useState('');
    const [sequencia, setSequencia] = useState('');
    const [lado, setLado] = useState('');
    const [numero, setNumero] = useState('');
    const [seq, setSeq] = useState('');
    const [complemento, setComplemento] = useState('')
    const [topo, setTopo] = useState('');
    const [hora, setHora] = useState('');

    async function exportarCSV() {
        const header = 'Quarteirao,Sequencia,Lado,Numero,Seq,Complemento,Topo,Hora\n'
        const linha = `${quarteirao},${sequencia},${lado},${numero},${seq},${lado},${complemento},${topo},${hora}`
        const csv = header + linha;

        const caminho = FileSystem.documentDirectory + 'levantamento.csv'

        await FileSystem.writeAsStringAsync(caminho, csv, {
            encoding: FileSystem.EncodingType.UTF8
        })

        if (await Sharing.isAvailableAsync()) {
            await Sharing.shareAsync(caminho);
        } else {
            Alert.alert("Erro", "Compartilhamento falhou")
        }
        setQuarteirao('');
        setSequencia('');
        setLado('');
        setNumero('');
        setSeq('');
        setComplemento('');
        setTopo('');
        setHora('');
        Alert.alert("Sucesso", "Seu registro foi salvo!")
    }

    return (
        <ScrollView style={styles.scrollContainer}>

            <View style={styles.container}>
                <Text style={styles.title}>Levantamento de indices</Text>
                <LitInput label="Número do quarteirão" value={quarteirao} onChangeText={setQuarteirao} />
                <LitInput label="Sequência" value={sequencia} onChangeText={setSequencia} />
                <LitInput label="Lado" value={lado} onChangeText={setLado} />
                <LitInput label="Número" value={numero} onChangeText={setNumero} />
                <LitInput label="Seq." value={seq} onChangeText={setSeq} />
                <LitInput label="Complemento" value={complemento} onChangeText={setComplemento} />
                <LitInput label="Topo do imóvel" value={topo} onChangeText={setTopo} />
                <LitInput label="Hora de entrada" value={hora} onChangeText={setHora} />
                <InitialButton title="Enviar" onPress={exportarCSV} />
                <BackButton title="Voltar" onPress={() => { router.back() }} />
            </View>
        </ScrollView>
    )
}
