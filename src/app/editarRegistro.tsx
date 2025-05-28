import { router, useLocalSearchParams } from "expo-router";
import { useRegistro } from "../context/registroContext";
import { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { LitInput } from "@/components/inputs/litInput";
import { TipoImovel } from "@/components/dropdowns/tipoImovel";
import { Visita } from "@/components/dropdowns/visita";
import { Pendencia } from "@/components/dropdowns/pendencia";
import { InitialButton } from "@/components/Buttons/initialButton";
import { BackButton } from "@/components/Buttons/backButton";
import { styles } from "../styles/styles";


export default function EditarRegistro() {
    const { registros, limparRegistros, adicionarRegistro } = useRegistro();
    const { index } = useLocalSearchParams();

    const i = parseInt(index as string, 10);
    const registro = registros[i]

    const [form, setForm] = useState({ ...registro });

    const atualizarCampo = (campo: string, valor: string) => {
        setForm({ ...form, [campo]: valor })
    }

    const salvarAlteracoes = () => {
        if (!form.sequencia || !form.lado || !form.numero || !form.seq || !form.complemento || !form.tipo || !form.hora || !form.visita || !form.pendencia) {
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
                <LitInput label="Sequência" value={form.sequencia} onChangeText={(v) => atualizarCampo('sequencia', v)} />
                <LitInput label="Lado" value={form.lado} onChangeText={(v) => atualizarCampo('lado', v)} />
                <LitInput label="Nome do logradouro" value={form.nome} onChangeText={(v) => atualizarCampo('nome', v)} />
                <LitInput label="Número" value={form.numero} onChangeText={(v) => atualizarCampo('numero', v)} />
                <LitInput label="Seq." value={form.seq} onChangeText={(v) => atualizarCampo('seq', v)} />
                <LitInput label="Complemento" value={form.complemento} onChangeText={(v) => atualizarCampo('complemento', v)} />
                <TipoImovel value={form.tipo} onChange={(v) => atualizarCampo('tipo', v)} />
                <LitInput label="Hora de entrada" value={form.hora} onChangeText={(v) => atualizarCampo('hora', v)} />
                <Visita value={form.visita} onChange={(v) => atualizarCampo('visita', v)} />
                <Pendencia value={form.pendencia} onChange={(v) => atualizarCampo('pendencia', v)} />

                <Text style={styles.title}>Tratamento</Text>
                <LitInput label="Depósitos eliminados" value={form.depositos} onChangeText={(v) => atualizarCampo('depositos', v)} />
                <LitInput label="Imóvel" value={form.imovel} onChangeText={(v) => atualizarCampo('imovel', v)} />

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