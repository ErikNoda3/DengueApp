import { View, Text, Alert, ScrollView, Pressable } from "react-native";
import { useRegistro } from "../context/registroContext";
import { styles } from "../styles/styles"
import { router } from "expo-router";

export default function RegistrosSalvos() {
    const { registros, limparRegistros, adicionarRegistro } = useRegistro()

    const excluirRegistro = (index: number) => {
        Alert.alert("Confirmar", "Deseja excluir esse registro?", [
            { text: "Cancelar", style: "cancel" },
            {
                text: "Excluir",
                style: "destructive",
                onPress: () => {
                    const novos = [...registros]
                    novos.splice(index, 1);
                    limparRegistros();
                    novos.forEach((r) => adicionarRegistro(r))
                }
            }
        ])
    }

    const cabecalhos = [
        'CPF', 'matricula', 'data', 'atividade', 'quarteirao', 'sequencia', 'lado', 'nome', 'numero', 'seq', 'complemento',
        'tipo', 'hora', 'visita', 'pendencia', 'N_A1', 'N_A2', 'N_B', 'N_C', 'N_D1', 'N_D2', 'N_E',
        'amostra_inicial', 'amostra_final', 'quantidade_tubitos', 'depositos', 'imovel',
        'tipo1', 'qtdeGrama1', 'qtdeDep1', 'tipo2', 'qtdeGrama2', 'qtdeDep2',
        'tipo3', 'qtdeCarga'
    ];

    return (
        <ScrollView horizontal>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={[styles.qtdeRegistros, styles.negrito]}>Quantidade de registros: {registros.length}</Text>
                <View style={styles.row}>
                    {cabecalhos.map((h, i) => (
                        <Text key={i} style={[styles.cell, styles.header]}>{h}</Text>
                    ))}
                    <Text style={[styles.cell, styles.header]}>Ações</Text>
                </View>

                {registros.map((registro, index) => (
                    <View key={index} style={styles.row}>
                        {cabecalhos.map((campo, i) => (
                            <Text key={i} style={styles.cell}>{registro[campo as keyof typeof registro]}</Text>
                        ))}

                        <View style={[styles.cell, { flexDirection: 'row' }]}>
                            <Pressable onPress={() => router.push(`/editarRegistro?index=${index}`)}>
                                <Text style={styles.link}>Editar</Text>
                            </Pressable>
                            <Pressable onPress={() => excluirRegistro(index)}>
                                <Text style={[styles.link, { color: "red", marginLeft: 10 }]}>Excluir</Text>
                            </Pressable>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    )

}