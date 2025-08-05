import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import { View, Text } from 'react-native';


type OpcoesProps = {
    value: string | null;
    onChange: (value: string) => void;
};

export function Mapa5_ruas({ value, onChange }: OpcoesProps) {

    const data = [
        { label: 'Av. Minas Gerais', value: 'Av. Minas Gerais' },
        { label: 'R. Pe. Severino Ceruti', value: 'R. Pe. Severino Ceruti' },
        { label: 'R. Pérola', value: 'R. Pérola' },
        { label: 'R. Rubi', value: 'R. Rubi' },
        { label: 'R. Ouro Fino', value: 'R. Ouro Fino' },
        { label: 'R. Platina', value: 'R. Platina' },
        { label: 'R. Ouro Branco', value: 'R. Ouro Branco' },
        { label: 'R. Rússia', value: 'R. Rússia' },
        { label: 'R. Marialva', value: 'R. Marialva' },
        { label: 'R. Manoel G. Horta', value: 'R. Manoel G. Horta' },
        { label: 'R. Finlândia', value: 'R. Finlândia' },
        { label: 'R. Noruega', value: 'R. Noruega' },
        { label: 'R. Dinamarca', value: 'R. Dinamarca' },
        { label: 'R. Topázio', value: 'R. Topázio' },
        { label: 'R. Esmeralda', value: 'R. Esmeralda' },
        { label: 'R. Mal. Deodoro', value: 'R. Mal. Deodoro' },
        { label: 'R. Humberto Contato', value: 'R. Humberto Contato' },
        { label: 'R. Nações Unidas', value: 'R. Nações Unidas' },
        { label: 'R. Pedro Álvares Cabral', value: 'R. Pedro Álvares Cabral' },
        { label: 'R. Rosa Stabile', value: 'R. Rosa Stabile' },
        { label: 'R. Pe. José Canale', value: 'R. Pe. José Canale' },
        { label: 'R. Italo Ado Fontanini', value: 'R. Italo Ado Fontanini' },
        { label: 'R. Monteiro Lobato', value: 'R. Monteiro Lobato' },
        { label: 'R. Paulo Setubal', value: 'R. Paulo Setubal' },
        { label: 'R. China', value: 'R. China' },
        { label: 'R. Suécia', value: 'R. Suécia' },
        { label: 'R. Bandeirantes', value: 'R. Bandeirantes' },
        { label: 'R. Antonio Domingos Alves', value: 'R. Antonio Domingos Alves' },
        { label: 'R. Edvaldo Canzin Toschio', value: 'R. Edvaldo Canzin Toschio' },
        { label: 'R. Casemiro de Abreu', value: 'R. Casemiro de Abreu' },
        { label: 'R. Bahia', value: 'R. Bahia' },
        { label: 'R. Imbituva', value: 'R. Imbituva' },
        { label: 'R. Ouro Negro', value: 'R. Ouro Negro' },
        { label: 'R. Pio X', value: 'R. Pio X' },
    ];


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nome do logradouro</Text>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Selecione"
                // searchPlaceholder="Digite..."
                value={value}
                onChange={item => {
                    onChange(item.value);
                }}
            />
        </View>
    );
};

