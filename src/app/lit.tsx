import { useState } from "react"
import { View, Text, ScrollView, Alert } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { styles } from "./styles"
import { LitInput } from "@/components/inputs/litInput"
import { BackButton } from "@/components/Buttons/backButton"
import { InitialButton } from "@/components/Buttons/initialButton"
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import { TipoImovel } from "@/components/dropdowns/tipoImovel"


type Registro = {
    quarteirao: string;
    sequencia: string;
    lado: string;
    numero: string;
    seq: string;
    complemento: string;
    tipo: string;
    hora: string;
};

export default function Lit() {
    const params = useLocalSearchParams()
    const [quarteirao, setQuarteirao] = useState(params.quarteirao.toString());
    const [sequencia, setSequencia] = useState('');
    const [lado, setLado] = useState('');
    const [numero, setNumero] = useState('');
    const [seq, setSeq] = useState('');
    const [complemento, setComplemento] = useState('')
    const [tipo, setTipo] = useState('');
    const [hora, setHora] = useState('');
    const [registros, setRegistros] = useState<Registro[]>([])

    // =====================================================================================================================
    function salvarRegistro() {
        if (!quarteirao || !sequencia || !lado || !numero) {
            Alert.alert("Campos sem informação", "Preencha todos os campos")
            return
        }


        const novoRegistro: Registro = {
            quarteirao,
            sequencia,
            lado,
            numero,
            seq,
            complemento,
            tipo,
            hora,
        };

        setRegistros((prev) => [...prev, novoRegistro])

        setQuarteirao('');
        setSequencia('');
        setLado('');
        setNumero('');
        setSeq('');
        setComplemento('');
        setTipo('');
        setHora('');
        Alert.alert("Sucesso!", "Registro salvo")

    }
    // =====================================================================================================================
    async function exportarCSV() {
        if (registros.length === 0) {
            Alert.alert("Nada para exportar", "Adicione pelo menos um registro")
            return
        }
        const header = 'Quarteirao,Sequencia,Lado,Numero,Seq,Complemento,Tipo,Hora\n'

        const linhas = registros.map((r) => {
            return `${r.quarteirao},${r.sequencia},${r.lado},${r.numero},${r.seq},${r.complemento},${r.tipo},${r.hora}`
        })

        const conteudo = header + linhas.join("\n")

        const caminho = FileSystem.documentDirectory + 'levantamento.csv'

        await FileSystem.writeAsStringAsync(caminho, conteudo, {
            encoding: FileSystem.EncodingType.UTF8
        })

        if (await Sharing.isAvailableAsync()) {
            await Sharing.shareAsync(caminho);
        } else {
            Alert.alert("Erro", "Compartilhamento falhou")
        }
        Alert.alert("Sucesso", "CSV exportado!")
    }
    // =====================================================================================================================
    return (

        <ScrollView style={styles.scrollContainer}>

            <View style={styles.container}>
                <Text style={styles.title}>Levantamento de indices</Text>
                <Text style={styles.quarteiraoText}>Quarteirão selecionado: {quarteirao}</Text>
                <LitInput label="Sequência" value={sequencia} onChangeText={setSequencia} />
                <LitInput label="Lado" value={lado} onChangeText={setLado} />
                <LitInput label="Número" value={numero} onChangeText={setNumero} />
                <LitInput label="Seq." value={seq} onChangeText={setSeq} />
                <LitInput label="Complemento" value={complemento} onChangeText={setComplemento} />
                <TipoImovel value={tipo} onChange={setTipo} />
                <LitInput label="Hora de entrada" value={hora} onChangeText={setHora} />
                <InitialButton title="Salvar Registro" onPress={salvarRegistro} />
                <InitialButton title="Exportar CSV" onPress={exportarCSV} />
                <BackButton title="Voltar" onPress={() => { router.back() }} />
            </View>
        </ScrollView>
    )
}
