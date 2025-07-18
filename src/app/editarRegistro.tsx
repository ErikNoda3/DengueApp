import { router, useLocalSearchParams } from "expo-router";
import { useRegistro } from "../context/registroContext";
import { useState } from "react";
import { Alert, Button, ScrollView, Text, View } from "react-native";
import { LitInput } from "@/components/inputs/litInput";
import { TipoImovel } from "@/components/dropdowns/tipoImovel";
import { Visita } from "@/components/dropdowns/visita";
import { Pendencia } from "@/components/dropdowns/pendencia";
import { InitialButton } from "@/components/Buttons/initialButton";
import { BackButton } from "@/components/Buttons/backButton";
import { styles } from "../styles/styles";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function EditarRegistro() {
    const [mostrarHora, setMostrarHora] = useState(false);

    const { registros, limparRegistros, adicionarRegistro } = useRegistro();
    const { index } = useLocalSearchParams();

    const i = parseInt(index as string, 10);
    const registro = registros[i]

    const [form, setForm] = useState({ ...registro });

    const atualizarCampo = (campo: string, valor: string) => {
        setForm({ ...form, [campo]: valor })
    }

    const salvarAlteracoes = () => {
        const obrigatorios = [form.sequencia, form.lado, form.numero, form.seq, form.complemento, form.tipo, form.hora, form.visita, form.pendencia];
        if (!obrigatorios.every(Boolean)) {
            Alert.alert("Campos obrigatórios faltando", "Preencha todos os campos obrigatórios.");
            return;
        }
        registros[i] = form;
        limparRegistros();
        registros.forEach(r => adicionarRegistro(r));
        Alert.alert("Sucesso", "Registro atualizado com sucesso!")

        router.back()
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Editar Registro</Text>

                <Text style={styles.quarteiraoText}>Quarteirão selecionado: {form.quarteirao}</Text>

                <View style={styles.containerData}>
                    <Text style={[styles.data, styles.negrito]}>Data da visita: </Text>
                    <Text style={styles.data}>{form.data} </Text>
                </View>

                <LitInput label="Sequência" keyboardType="numeric" value={form.sequencia} onChangeText={(v) => atualizarCampo('sequencia', v)} />
                <LitInput label="Lado" keyboardType="numeric" value={form.lado} onChangeText={(v) => atualizarCampo('lado', v)} />
                <LitInput label="Nome do logradouro" value={form.nome} onChangeText={(v) => atualizarCampo('nome', v)} />
                <LitInput label="Número" keyboardType="numeric" value={form.numero} onChangeText={(v) => atualizarCampo('numero', v)} />
                <LitInput label="Seq." keyboardType="numeric" value={form.seq} onChangeText={(v) => atualizarCampo('seq', v)} />
                <LitInput label="Complemento" value={form.complemento} onChangeText={(v) => atualizarCampo('complemento', v)} />
                <TipoImovel value={form.tipo} onChange={(v) => atualizarCampo('tipo', v)} />

                <View style={styles.containerData}>
                    <Text style={{ fontSize: 16, marginBottom: 10 }}>
                        <Text style={[styles.data, styles.negrito]}>Hora da visita: </Text>
                        <Text style={styles.data}>{form.hora} </Text>
                    </Text>
                    <Button title="Alterar Hora" onPress={() => setMostrarHora(true)} />
                </View>

                {mostrarHora && (
                    <DateTimePicker
                        value={new Date(`1970-01-01T${form.hora}:00`)} // usa a hora atual do form
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={(_, selectedDate) => {
                            if (selectedDate) {
                                const hora = selectedDate.toLocaleTimeString("pt-BR", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                });
                                atualizarCampo("hora", hora);
                                setMostrarHora(false);
                            }
                        }}
                    />
                )}

                <Visita value={form.visita} onChange={(v) => atualizarCampo('visita', v)} />
                <Pendencia value={form.pendencia} onChange={(v) => atualizarCampo('pendencia', v)} />

                {/*---------------------------- LI-------------------------------------------------------- */}
                <Text style={styles.title}>Levantamento de Índice</Text>
                <LitInput label="Número de depósito A1 (caixa d'água)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={form.N_A1} onChangeText={(v) => atualizarCampo('N_A1', v)} />
                <LitInput label="Número de depósito A2 (Outros depósitos de armazenamento de água)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={form.N_A2} onChangeText={(v) => atualizarCampo('N_A2', v)} />
                <LitInput label="Número de depósito B (Pequenos depósitos móveis)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={form.N_B} onChangeText={(v) => atualizarCampo('N_B', v)} />
                <LitInput label="Número de depósito C (Depósitos fixos)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={form.N_C} onChangeText={(v) => atualizarCampo('N_C', v)} />
                <LitInput label="Número de depósito D1 (Pneus e outros materiais rodantes)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={form.N_D1} onChangeText={(v) => atualizarCampo('N_D1', v)} />
                <LitInput label="Número de depósito D2 (Lixo (recipientes plásticos, latas) sucatas, entulhos)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={form.N_D2} onChangeText={(v) => atualizarCampo('N_D2', v)} />
                <LitInput label="Número de depósito E (Depósitos naturais)" keyboardType="numeric" placeholder="Digite o número de depósitos inspecionados" value={form.N_E} onChangeText={(v) => atualizarCampo('N_E', v)} />
                <LitInput label="Número da amostra inicial" keyboardType="numeric" placeholder="Digite o número da amostra inicial" value={form.amostra_inicial} onChangeText={(v) => atualizarCampo('amostra_inicial', v)} />
                <LitInput label="Número da amostra final" keyboardType="numeric" placeholder="Digite o número da amostra final" value={form.amostra_final} onChangeText={(v) => atualizarCampo('amostra_final', v)} />
                <LitInput label="Quantidade de Tubitos" keyboardType="numeric" placeholder="Digite a quantidade de tubitos utilizados" value={form.quantidade_tubitos} onChangeText={(v) => atualizarCampo('quantidade_tubitos', v)} />
                <LitInput label="Depósitos eliminados" keyboardType="numeric" value={form.depositos} onChangeText={(v) => atualizarCampo('depositos', v)} />
                <LitInput label="Imóvel" value={form.imovel} onChangeText={(v) => atualizarCampo('imovel', v)} />

                {/*---------------------------- T -------------------------------------------------------- */}
                <Text style={styles.title}>Tratamento</Text>

                <Text style={styles.title}>Focal</Text>
                <Text style={styles.subtitle}>Larvicida (1)</Text>
                <LitInput label="Tipo" value={form.tipo1} onChangeText={(v) => atualizarCampo('tipo1', v)} />
                <LitInput label="Qtde (Grama)" value={form.qtdeGrama1} onChangeText={(v) => atualizarCampo('qtdeGrama1', v)} />
                <LitInput label="Qtde dep. trat" value={form.qtdeDep1} onChangeText={(v) => atualizarCampo('qtdeDep1', v)} />

                <Text style={styles.subtitle}>Larvicida (2)</Text>
                <LitInput label="Tipo" value={form.tipo2} onChangeText={(v) => atualizarCampo('tipo2', v)} />
                <LitInput label="Qtde (Grama)" value={form.qtdeGrama2} onChangeText={(v) => atualizarCampo('qtdeGrama2', v)} />
                <LitInput label="Qtde dep. trat" value={form.qtdeDep2} onChangeText={(v) => atualizarCampo('qtdeDep2', v)} />

                <Text style={styles.title}>Perifocal</Text>
                <LitInput label="Tipo (Adulticida)" value={form.tipo3} onChangeText={(v) => atualizarCampo('tipo3', v)} />
                <LitInput label="Qtde carga" value={form.qtdeCarga} onChangeText={(v) => atualizarCampo('qtdeCarga', v)} />

                <InitialButton title="Salvar Alterações" onPress={salvarAlteracoes} />
                <BackButton title="Cancelar" onPress={() => router.back()} />
            </View>
        </ScrollView>
    )

}