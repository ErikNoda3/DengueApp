import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { useRegistro } from "../context/registroContext"
import { styles } from "../styles/styles"
import { LitInput } from "@/components/inputs/litInput"
import { BackButton } from "@/components/Buttons/backButton"
import { InitialButton } from "@/components/Buttons/initialButton"
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import { TipoImovel } from "@/components/dropdowns/tipoImovel"
import { Visita } from "@/components/dropdowns/visita"
import { Pendencia } from "@/components/dropdowns/pendencia"


type Registro = {
    quarteirao: string;
    sequencia: string;
    lado: string;
    nome: string;
    numero: string;
    seq: string;
    complemento: string;
    tipo: string;
    hora: string;
    visita: string;
    pendencia: string;

    // tratamento
    depositos: string;
    imovel: string;
    tipo1: string;
    qtdeGrama1: string;
    qtdeDep1: string;
    tipo2: string;
    qtdeGrama2: string;
    qtdeDep2: string;
    tipo3: string;
    qtdeCarga: string;
};

export default function Lit() {

    const { registros, adicionarRegistro, limparRegistros } = useRegistro();
    const params = useLocalSearchParams()
    const [quarteirao, setQuarteirao] = useState(params.quarteirao ? params.quarteirao.toString() : '');
    const [sequencia, setSequencia] = useState('');
    const [lado, setLado] = useState('');
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [seq, setSeq] = useState('');
    const [complemento, setComplemento] = useState('')
    const [tipo, setTipo] = useState('');
    const [hora, setHora] = useState('');
    const [visita, setVisita] = useState('');
    const [pendencia, setPendencia] = useState('')

    // Tratamento
    const [depositos, setDepositos] = useState('');
    const [imovel, setImovel] = useState('');
    const [tipo1, setTipo1] = useState('');
    const [qtdeGrama1, setQtdeGrama1] = useState('');
    const [qtdeDep1, setQtdeDep1] = useState('');
    const [tipo2, setTipo2] = useState('');
    const [qtdeGrama2, setQtdeGrama2] = useState('');
    const [qtdeDep2, setQtdeDep2] = useState('');
    const [tipo3, setTipo3] = useState('');
    const [qtdeCarga, setQtdeCarga] = useState('');

    // =====================================================================================================================
    function salvarRegistro() {
        if (!sequencia || !lado || !numero || !seq || !complemento || !tipo || !hora || !visita || !pendencia) {
            Alert.alert("Campos sem informação", "Preencha todos os campos");
            return;
        }

        const novoRegistro = {
            quarteirao,
            sequencia,
            lado,
            nome,
            numero,
            seq,
            complemento,
            tipo,
            hora,
            visita,
            pendencia,
            depositos,
            imovel,
            tipo1,
            qtdeGrama1,
            qtdeDep1,
            tipo2,
            qtdeGrama2,
            qtdeDep2,
            tipo3,
            qtdeCarga
        };

        adicionarRegistro(novoRegistro); // Adicionando o registro ao contexto
        Alert.alert("Sucesso!", "Registro salvo");

        // Resetando os campos após salvar
        setSequencia('');
        setLado('');
        setNome('');
        setNumero('');
        setSeq('');
        setComplemento('');
        setTipo('');
        setHora('');
        setVisita('');
        setPendencia('');
    }
    // =====================================================================================================================
    async function exportarCSV() {
        if (registros.length === 0) {
            Alert.alert("Nada para exportar", "Adicione pelo menos um registro")
            return
        }

        const header = 'Quarteirao,Sequencia,Lado,Nome do logradouro,Numero,Seq,Complemento,Tipo,Hora,Visita,Pendencia,Depositos Eliminados,Imovel,Larvicida1 Tipo,Larvicida1 Qtde(Grama),Larvicida1 Qtde dep._trat,Larvicida2 Tipo,Larvicida2 Qtde(Grama), Larvicida2 Qtde dep._trat,Adulticida Tipo, Adulticidan Qtde Carga\n';

        const linhas = registros.map((r) => {
            return `${r.quarteirao},${r.sequencia},${r.lado},${r.nome},${r.numero},${r.seq},${r.complemento},${r.tipo},${r.hora},${r.visita},${r.pendencia},${r.depositos},${r.imovel},${r.tipo1},${r.qtdeGrama1},${r.qtdeDep1},${r.tipo2},${r.qtdeGrama2},${r.qtdeDep2},${r.tipo3},${r.qtdeCarga}`
        });

        const conteudo = header + linhas.join("\n")

        const caminho = FileSystem.documentDirectory + 'LI+T.csv'

        await FileSystem.writeAsStringAsync(caminho, conteudo, {
            encoding: FileSystem.EncodingType.UTF8
        })

        if (await Sharing.isAvailableAsync()) {
            await Sharing.shareAsync(caminho);
        } else {
            Alert.alert("Erro", "Compartilhamento falhou")
        }

        Alert.alert("Sucesso", "CSV exportado!")
        limparRegistros();

        // Limpar os campos após exportação
        setSequencia('');
        setLado('');
        setNome('');
        setNumero('');
        setSeq('');
        setComplemento('');
        setTipo('');
        setHora('');
        setVisita('');
        setPendencia('');
        setDepositos('');
        setImovel('');
        setTipo1('');
        setQtdeGrama1('');
        setQtdeDep1('');
        setTipo2('');
        setQtdeGrama2('');
        setQtdeDep2('');
        setTipo3('');
        setQtdeCarga('');
    }

    // =====================================================================================================================
    return (

        <ScrollView style={styles.scrollContainer}>

            <View style={styles.container}>

                <Text style={styles.title}>Li + T</Text>
                <Text style={styles.quarteiraoText}>Quarteirão selecionado: {quarteirao}</Text>
                <LitInput label="Sequência" placeholder="Digite a sequência" value={sequencia} onChangeText={setSequencia} />
                <LitInput label="Lado" placeholder="Digite o lado" value={lado} onChangeText={setLado} />
                <LitInput label="Nome do logradouro" placeholder="Digite o nome do logradouro" value={nome} onChangeText={setNome} />
                <LitInput label="Número" placeholder="Digite o número" value={numero} onChangeText={setNumero} />
                <LitInput label="Seq." placeholder="Digite a sequência" value={seq} onChangeText={setSeq} />
                <LitInput label="Complemento" placeholder="Digite o complemento" value={complemento} onChangeText={setComplemento} />
                <TipoImovel value={tipo} onChange={setTipo} />
                <LitInput label="Hora de entrada" placeholder="Digite a hora de entrada" value={hora} onChangeText={setHora} />
                <Visita value={visita} onChange={setVisita} />
                <Pendencia value={pendencia} onChange={setPendencia} />

                <Text style={styles.title}>Tratamento</Text>
                <LitInput label="Depósitos elmininados" placeholder="Digite a quantidade de depósitos eliminados" value={depositos} onChangeText={setDepositos} />
                <LitInput label="Imóvel" placeholder="Digite o imóvel" value={imovel} onChangeText={setImovel} />

                <Text style={styles.title}>Focal</Text>
                <Text style={styles.subtitle}>Larvicida (1)</Text>
                <LitInput label="Tipo" placeholder="Digite o tipo" value={tipo1} onChangeText={setTipo1} />
                <LitInput label="Qtde (Grama)" placeholder="Digite a quantidade" value={qtdeGrama1} onChangeText={setQtdeGrama1} />
                <LitInput label="Qtde dep. trat" placeholder="Digite a quantidade dep. trat" value={qtdeDep1} onChangeText={setQtdeDep1} />

                <Text style={styles.subtitle}>Larvicida (2)</Text>
                <LitInput label="Tipo" placeholder="Digite o tipo" value={tipo2} onChangeText={setTipo2} />
                <LitInput label="Qtde (Grama)" placeholder="Digite a quantidade" value={qtdeGrama2} onChangeText={setQtdeGrama2} />
                <LitInput label="Qtde dep. trat" placeholder="Digite a quantidade dep. trat" value={qtdeDep2} onChangeText={setQtdeDep2} />

                <Text style={styles.title}>Perifocal</Text>
                <Text style={styles.subtitle}>Adulticida</Text>
                <LitInput label="Tipo" placeholder="Digite o tipo" value={tipo3} onChangeText={setTipo3} />
                <LitInput label="Qtde carga" placeholder="Digite a quantidade" value={qtdeCarga} onChangeText={setQtdeCarga} />


                <InitialButton title="Salvar Registro" onPress={salvarRegistro} />
                <InitialButton title="Exportar CSV" onPress={exportarCSV} />
                <BackButton title="Voltar" onPress={() => { router.back() }} />
            </View>
        </ScrollView>
    )
}
