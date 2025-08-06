import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import { View, Text } from 'react-native';


type OpcoesProps = {
    value: string | null;
    onChange: (value: string) => void;
};

export function Mapa2_ruas({ value, onChange }: OpcoesProps) {

    const data = [
        { label: 'R. Marialva', value: 'R. Marialva' },
        { label: 'R. José Cardoso Sobrinho', value: 'R. José Cardoso Sobrinho' },
        { label: 'R. João Luís Orlando', value: 'R. João Luís Orlando' },
        { label: 'R. Nelson Beckedorf', value: 'R. Nelson Beckedorf' },
        { label: 'R. Hernando Pombo Ricardo', value: 'R. Hernando Pombo Ricardo' },
        { label: 'R. Clóvis da Fonseca', value: 'R. Clóvis da Fonseca' },
        { label: 'R. Renê Camargo de Azambuja', value: 'R. Renê Camargo de Azambuja' },
        { label: 'R. João Cândido Ferreira', value: 'R. João Cândido Ferreira' },
        { label: 'R. Irineu Sacheli', value: 'R. Irineu Sacheli' },
        { label: 'R. Hercília Maciel', value: 'R. Hercília Maciel' },
        { label: 'R. Osório Ribas de Paula', value: 'R. Osório Ribas de Paula' },
        { label: 'R. Nova Ucrânia', value: 'R. Nova Ucrânia' },
        { label: 'TV. João Reis de Andrade', value: 'TV. João Reis de Andrade' },
        { label: 'R. Prof. Erasto Gaertner', value: 'R. Prof. Erasto Gaertner' },
        { label: 'R. Jarbas Paula Lima', value: 'R. Jarbas Paula Lima' },
        { label: 'R. Ítalo Ado Fontanini', value: 'R. Ítalo Ado Fontanini' },
        { label: 'R. São Pedro', value: 'R. São Pedro' },
        { label: 'R. Miguel Cláudio Moreno', value: 'R. Miguel Cláudio Moreno' },
        { label: 'R. Osvaldo Santa Ana', value: 'R. Osvaldo Santa Ana' },
        { label: 'R. João Antônio Braga Cortês', value: 'R. João Antônio Braga Cortês' },
        { label: 'R. Horeslau Saviski', value: 'R. Horeslau Saviski' },
        { label: 'R. Alexandra', value: 'R. Alexandra' },
        { label: 'R. José Jorge', value: 'R. José Jorge' },
        { label: 'R. Bandeirantes', value: 'R. Bandeirantes' },
        { label: 'R. Gastão Vidigal', value: 'R. Gastão Vidigal' },
        { label: 'R. Rio Branco', value: 'R. Rio Branco' },
        { label: 'R. César Preto', value: 'R. César Preto' },
        { label: 'R. Talita Bresolin', value: 'R. Talita Bresolin' },
        { label: 'Tv. Carlos Krizanowski', value: 'Tv. Carlos Krizanowski' },
        { label: 'R. Manoel G. Horta', value: 'R. Manoel G. Horta' },
        { label: 'R. Miguel Radui', value: 'R. Miguel Radui' },
        { label: 'R. Pedro Ribeiro Valim', value: 'Tv. Pedro Ribeiro Valim' },
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
                searchPlaceholder="Digite..."
                value={value}
                onChange={item => {
                    onChange(item.value);
                }}
            />
        </View>
    );
};

