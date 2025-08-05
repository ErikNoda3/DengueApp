import React, { useState } from "react";
import { View, Text, ScrollView, Alert, Button } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { useRegistro } from "../context/registroContext"
import DateTimePicker from "@react-native-community/datetimepicker"
import { styles } from "../styles/styles"
import { LitInput } from "@/components/inputs/litInput"
import { BackButton } from "@/components/Buttons/backButton"
import { InitialButton } from "@/components/Buttons/initialButton"
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import { TipoImovel } from "@/components/dropdowns/tipoImovel"
import { Visita } from "@/components/dropdowns/visita"
import { Pendencia } from "@/components/dropdowns/pendencia"
import { Mapa1_ruas } from "@/components/dropdowns/Mapa1_ruas";
import { Mapa2_ruas } from "@/components/dropdowns/Mapa2_ruas";
import { Mapa3_ruas } from "@/components/dropdowns/Mapa3_ruas";
import { Mapa4_ruas } from "@/components/dropdowns/Mapa4_ruas";
import { Mapa5_ruas } from "@/components/dropdowns/Mapa5_ruas";
import { Mapa6_ruas } from "@/components/dropdowns/Mapa6_ruas";
import { Mapa7_ruas } from "@/components/dropdowns/Mapa7_ruas";

export default function Lit() {
    const params = useLocalSearchParams()

    const { registros, adicionarRegistro, limparRegistros } = useRegistro();
    const [CPF, setCPF] = useState(params.CPF.toString());
    const [matricula, setMatricua] = useState(params.matricula.toString());
    const [mapa, setMapa] = useState(params.mapa.toString());
    const [data, setData] = useState(new Date())
    const [atividade, setAtividade] = useState('LI + T')
    const [quarteirao, setQuarteirao] = useState(params.quarteirao.toString());
    const [sequencia, setSequencia] = useState('');
    const [lado, setLado] = useState('');
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [seq, setSeq] = useState('');
    const [complemento, setComplemento] = useState('')
    const [tipo, setTipo] = useState('');

    const [hora, setHora] = useState(new Date());
    const [mostrar, setMostrar] = useState(false)
    const onChange = (_event: any, selectedDate?: Date) => {
        if (selectedDate) {
            setHora(selectedDate);
            setMostrar(false)
        }
    };

    const [visita, setVisita] = useState('');
    const [pendencia, setPendencia] = useState('')

    //LI
    const [N_A1, setNA1] = useState('')
    const [N_A2, setNA2] = useState('')
    const [N_B, setNB] = useState('')
    const [N_C, setNC] = useState('')
    const [N_D1, setND1] = useState('')
    const [N_D2, setND2] = useState('')
    const [N_E, setNE] = useState('')
    const [amostra_inicial, setAmostraInicial] = useState('')
    const [amostra_final, setAmostrafinal] = useState('')
    const [quantidade_tubitos, setQuantidadeTubitos] = useState('')
    const [depositos, setDepositos] = useState('');
    const [imovel, setImovel] = useState('');

    // Tratamento
    const [tipo1, setTipo1] = useState('');
    const [qtdeGrama1, setQtdeGrama1] = useState('');
    const [qtdeDep1, setQtdeDep1] = useState('');
    const [tipo2, setTipo2] = useState('');
    const [qtdeGrama2, setQtdeGrama2] = useState('');
    const [qtdeDep2, setQtdeDep2] = useState('');
    const [tipo3, setTipo3] = useState('');
    const [qtdeCarga, setQtdeCarga] = useState('');

    // ====================Salva os registros==================================================================
    function salvarRegistro() {
        // if (!sequencia || !lado || !numero || !seq || !complemento || !tipo || !hora || !visita || !pendencia) {
        //     Alert.alert("Campos sem informação", "Preencha todos os campos");
        //     return;
        // }

        const novoRegistro = {
            CPF: CPF,
            matricula: matricula,
            data: data.toLocaleDateString("pt-BR").toString().split("T")[0],
            atividade,
            quarteirao,
            sequencia,
            lado,
            nome,
            numero,
            seq,
            complemento,
            tipo,
            hora: hora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
            visita,
            pendencia,
            //LI
            N_A1,
            N_A2,
            N_B,
            N_C,
            N_D1,
            N_D2,
            N_E,
            amostra_inicial,
            amostra_final,
            quantidade_tubitos,
            depositos,
            imovel,
            //T
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
        setHora(new Date());
        setTipo('');
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
        setNA1('');
        setNA2('');
        setNB('');
        setNC('');
        setND1('');
        setND2('');
        setNE('');
        setAmostraInicial('');
        setAmostrafinal('');
        setQuantidadeTubitos('');


    }

    // ==========================Exporta CSV============================================================
    async function exportarCSV() {
        if (registros.length === 0) {
            Alert.alert("Nada para exportar", "Adicione pelo menos um registro")
            return
        }

        const header = 'CPF,Matricula,Data,Atividade,Quarteirao,Sequencia,Lado,Nome do logradouro,Numero,Seq,Complemento,Tipo,Hora,Visita,Pendencia,N_A1, N_A2, N_B, N_C, N_D1, N_D2, N_E, Amostra inicial, Amostra final, Quantidade de tubitos, Depositos Eliminados,Imovel,Larvicida1 Tipo,Larvicida1 Qtde(Grama),Larvicida1 Qtde dep._trat,Larvicida2 Tipo,Larvicida2 Qtde(Grama), Larvicida2 Qtde dep._trat,Adulticida Tipo, Adulticida Qtde Carga\n';

        const linhas = registros.map((r) => {
            return `${r.CPF},${r.matricula},${r.data},${atividade},${r.quarteirao},${r.sequencia},${r.lado},${r.nome},${r.numero},${r.seq},${r.complemento},${r.tipo},${r.hora},${r.visita},${r.pendencia},${r.N_A1},${r.N_A2},${r.N_B},${r.N_C},${r.N_D1},${r.N_D2},${r.N_E},${r.amostra_inicial},${r.amostra_final},${r.quantidade_tubitos},${r.depositos},${r.imovel},${r.tipo1},${r.qtdeGrama1},${r.qtdeDep1},${r.tipo2},${r.qtdeGrama2},${r.qtdeDep2},${r.tipo3},${r.qtdeCarga}`
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
        setHora(new Date());
        setTipo('');
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
        setNA1('');
        setNA2('');
        setNB('');
        setNC('');
        setND1('');
        setND2('');
        setNE('');
        setAmostraInicial('');
        setAmostrafinal('');
        setQuantidadeTubitos('');


    }

    // =====================================================================================================================
    return (

        <ScrollView style={styles.scrollContainer}>

            <View style={styles.container}>

                <Text style={styles.title}>Li + T</Text>
                <Text style={styles.quarteiraoText}>CPF: {CPF}</Text>
                <Text style={styles.quarteiraoText}>Matricula: {matricula}</Text>
                <Text style={styles.quarteiraoText}>Quarteirão selecionado: {quarteirao}</Text>

                <View style={styles.containerData}>
                    <Text style={[styles.data, styles.negrito]}>Data da visita: </Text>
                    <Text style={styles.data}>{data.toLocaleDateString("pt-BR")} </Text>
                </View>

                <LitInput label="Sequência" keyboardType="numeric" placeholder="Digite a sequência" value={sequencia} onChangeText={setSequencia} />
                <LitInput label="Lado" keyboardType="numeric" placeholder="Digite o lado" value={lado} onChangeText={setLado} />

                {mapa === '1' &&
                    <Mapa1_ruas value={nome} onChange={setNome} />
                }
                {mapa === '2' &&
                    <Mapa2_ruas value={nome} onChange={setNome} />
                }
                {mapa === '3' &&
                    <Mapa3_ruas value={nome} onChange={setNome} />
                }
                {mapa === '4' &&
                    <Mapa4_ruas value={nome} onChange={setNome} />
                }
                {mapa === '5' &&
                    <Mapa5_ruas value={nome} onChange={setNome} />
                }
                {mapa === '6' &&
                    <Mapa6_ruas value={nome} onChange={setNome} />
                }
                {mapa === '7' &&
                    <Mapa7_ruas value={nome} onChange={setNome} />
                }
                <LitInput label="Número" keyboardType="numeric" placeholder="Digite o número" value={numero} onChangeText={setNumero} />
                <LitInput label="Seq." keyboardType="numeric" placeholder="Digite a sequência" value={seq} onChangeText={setSeq} />
                <LitInput label="Complemento" placeholder="Digite o complemento" value={complemento} onChangeText={setComplemento} />
                <TipoImovel value={tipo} onChange={setTipo} />

                <View style={styles.containerData}>

                    <Text style={{ fontSize: 16, marginBottom: 10 }}>
                        <Text style={[styles.data, styles.negrito]}>Hora da visita: </Text>
                        <Text style={styles.data}>{hora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })} </Text>
                    </Text>
                    <Button title="Selecionar Hora" onPress={() => setMostrar(true)} />
                </View>

                {mostrar && (
                    <DateTimePicker
                        value={hora}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}

                <Visita value={visita} onChange={setVisita} />
                <Pendencia value={pendencia} onChange={setPendencia} />

                {/* ========================= LI ============================================ */}
                <Text style={styles.title}>Levantamento de Índice</Text>
                <LitInput label="Número de depósito A1 (caixa d'água)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={N_A1} onChangeText={setNA1} />
                <LitInput label="Número de depósito A2 (Outros depósitos de armazenamento de água)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={N_A2} onChangeText={setNA2} />
                <LitInput label="Número de depósito B (Pequenos depósitos móveis)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={N_B} onChangeText={setNB} />
                <LitInput label="Número de depósito C (Depósitos fixos)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={N_C} onChangeText={setNC} />
                <LitInput label="Número de depósito D1 (Pneus e outros materiais rodantes)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={N_D1} onChangeText={setND1} />
                <LitInput label="Número de depósito D2 (Lixo (recipientes plásticos, latas) sucatas, entulhos)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={N_D2} onChangeText={setND2} />
                <LitInput label="Número de depósito E (Depósitos naturais)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={N_E} onChangeText={setNE} />
                <LitInput label="Número da amostra inicial" keyboardType="numeric" placeholder="Digite o número da amostra inicial" value={amostra_inicial} onChangeText={setAmostraInicial} />
                <LitInput label="Número da amostra final" keyboardType="numeric" placeholder="Digite o número da amostra final" value={amostra_final} onChangeText={setAmostrafinal} />
                <LitInput label="Quantidade de Tubitos" keyboardType="numeric" placeholder="Digite a quantidade de tubitos utilizados" value={quantidade_tubitos} onChangeText={setQuantidadeTubitos} />

                <LitInput label="Depósitos elmininados" keyboardType="numeric" placeholder="Digite a quantidade eliminada" value={depositos} onChangeText={setDepositos} />
                <LitInput label="Imóveis tratados" placeholder="Digite o imóvel" value={imovel} onChangeText={setImovel} />

                {/* ========================== T ==============================================*/}
                <Text style={styles.title}>Tratamento</Text>
                <Text style={styles.title}>Focal</Text>
                <Text style={styles.subtitle}>Larvicida (1)</Text>
                <LitInput label="Tipo" placeholder="Digite o tipo" value={tipo1} onChangeText={setTipo1} />
                <LitInput label="Qtde (Grama)" keyboardType="numeric" placeholder="Digite a quantidade" value={qtdeGrama1} onChangeText={setQtdeGrama1} />
                <LitInput label="Qtde dep. trat" keyboardType="numeric" placeholder="Digite a quantidade dep. trat" value={qtdeDep1} onChangeText={setQtdeDep1} />

                <Text style={styles.subtitle}>Larvicida (2)</Text>
                <LitInput label="Tipo" placeholder="Digite o tipo" value={tipo2} onChangeText={setTipo2} />
                <LitInput label="Qtde (Grama)" keyboardType="numeric" placeholder="Digite a quantidade" value={qtdeGrama2} onChangeText={setQtdeGrama2} />
                <LitInput label="Qtde dep. trat" keyboardType="numeric" placeholder="Digite a quantidade dep. trat" value={qtdeDep2} onChangeText={setQtdeDep2} />

                <Text style={styles.title}>Perifocal</Text>
                <Text style={styles.subtitle}>Adulticida</Text>
                <LitInput label="Tipo" placeholder="Digite o tipo" value={tipo3} onChangeText={setTipo3} />
                <LitInput label="Qtde carga" keyboardType="numeric" placeholder="Digite a quantidade" value={qtdeCarga} onChangeText={setQtdeCarga} />


                <InitialButton title="Salvar Registro" onPress={salvarRegistro} />
                <InitialButton title="Visualizar Registros" onPress={() => router.push("/registrosSalvos")} />
                <InitialButton title="Exportar CSV" onPress={exportarCSV} />
                <BackButton title="Voltar" onPress={() => { router.back() }} />
            </View>
        </ScrollView>
    )
}
