import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import { View, Text } from 'react-native';


type OpcoesProps = {
    value: string | null;
    onChange: (value: string) => void;
};

export function Mapa1_ruas({ value, onChange }: OpcoesProps) {

    const data = [
        { label: 'R. Orquídea', value: 'R. Orquídea' },
        { label: 'R. Santa Rita', value: 'R. Santa Rita' },
        { label: 'R. Lauro Teixeira Osório', value: 'R. Lauro Teixeira Osório' },
        { label: 'R. Nova Ucrânia', value: 'R. Nova Ucrânia' },
        { label: 'R. Antonio A. de Almeida', value: 'R. Antonio A. de Almeida' },
        { label: 'R. Antônio Péres Clabonde', value: 'R. Antônio Péres Clabonde' },
        { label: 'R. Janos Desselwffy', value: 'R. Janos Desselwffy' },
        { label: 'Av. Contorno Sul', value: 'Av. Contorno Sul' },
        { label: 'R. Cel. José P. de Castro', value: 'R. Cel. José P. de Castro' },
        { label: 'R. Jorge Herculano', value: 'R. Jorge Herculano' },
        { label: 'R. Presidente Jackson', value: 'R. Presidente Jackson' },
        { label: 'R. Presidente Jéferson', value: 'R. Presidente Jéferson' },
        { label: 'R. Presidente Wilson', value: 'R. Presidente Wilson' },
        { label: 'R. Presidente Lincolin', value: 'R. Presidente Lincolin' },
        { label: 'R. Presidente Roselvelt', value: 'R. Presidente Roselvelt' },
        { label: 'R. Presidente Hover', value: 'R. Presidente Hover' },
        { label: 'R. Conselheiro Zacarias Góes de Vasconcelos', value: 'R. Conselheiro Zacarias Góes de Vasconcelos' },
        { label: 'R. Colonial', value: 'R. Colonial' },
        { label: 'R. Rio Ivaí', value: 'R. Rio Ivaí' },
        { label: 'R. Benevides Mesquita', value: 'R. Benevides Mesquita' },
        { label: 'R. Gen. Mário Tourinho', value: 'R. Gen. Mário Tourinho' },
        { label: 'R. Sussumu Shimura', value: 'R. Sussumu Shimura' },
        { label: 'R. João Batista Vidor', value: 'R. João Batista Vidor' },
        { label: 'R. Antônio Viêira', value: 'R. Antônio Viêira' },
        { label: 'R. João Juventino Lemos', value: 'R. João Juventino Lemos' },
        { label: 'Estrada Biguaçú', value: 'Estrada Biguaçú' },

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

