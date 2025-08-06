import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import { View, Text } from 'react-native';


type OpcoesProps = {
    value: string | null;
    onChange: (value: string) => void;
};

export function Mapa7_ruas({ value, onChange }: OpcoesProps) {

    const data = [
        { label: 'R. Ouro Branco', value: 'R. Ouro Branco' },
        { label: 'R. Pedro Álvares Cabral', value: 'R. Pedro Álvares Cabral' },
        { label: 'R. Cristóvão Colombo', value: 'R. Cristóvão Colombo' },
        { label: 'R. Marechal Floriano', value: 'R. Marechal Floriano' },
        { label: 'R. Padre Antonio', value: 'R. Padre Antonio' },
        { label: 'R. Justo Laranjeiras', value: 'R. Justo Laranjeiras' },
        { label: 'R. Diniz J. Silvério', value: 'R. Diniz J. Silvério' },
        { label: 'R. Quintino Bocaiúva', value: 'R. Quintino Bocaiúva' },
        { label: 'R. Hermes da Fonseca', value: 'R. Hermes da Fonseca' },
        { label: 'R. Gregório Holak', value: 'R. Gregório Holak' },
        { label: 'R. Dom Romeu Albertti', value: 'R. Dom Romeu Albertti' },
        { label: 'R. Bom Jesus da Lapa', value: 'R. Bom Jesus da Lapa' },
        { label: 'R. Marquesa de Santos', value: 'R. Marquesa de Santos' },
        { label: 'R. Princesa Dona Leopoldina', value: 'R. Princesa Dona Leopoldina' },
        { label: 'R. Padre Diogo Feijó', value: 'R. Padre Diogo Feijó' },
        { label: 'Tv. Maria da Glória', value: 'Tv. Maria da Glória' },
        { label: 'R. Princ. Dom Miguel', value: 'R. Princ. Dom Miguel' },
        { label: 'R. Otávio Pereira Melo', value: 'R. Otávio Pereira Melo' },
        { label: 'R. Paulino P. de Macedo', value: 'R. Paulino P. de Macedo' },
        { label: 'R. Albano Rizo', value: 'R. Albano Rizo' },
        { label: 'R. Manoel Pereira de Luanda', value: 'R. Manoel Pereira de Luanda' },
        { label: 'R. João Palka', value: 'R. João Palka' },
        { label: 'R. João Marqueto', value: 'R. João Marqueto' },
        { label: 'R. Nicolau Treuk', value: 'R. Nicolau Treuk' },
        { label: 'R. Manoel Moliani', value: 'R. Manoel Moliani' },
        { label: 'R. Joaquim Alves', value: 'R. Joaquim Alves' },
        { label: 'Av. Minas Gerais', value: 'Av. Minas Gerais' },
        { label: 'R. Honorato Rossi', value: 'R. Honorato Rossi' },
        { label: 'R. Silva Jardim', value: 'R. Silva Jardim' },
        { label: 'R. Francisco Coelho Vilela', value: 'R. Francisco Coelho Vilela' },
        { label: 'R. Valdevino J. Teixeira', value: 'R. Valdevino J. Teixeira' },
        { label: 'R. Jeronimo M. de Freitas', value: 'R. Jeronimo M. de Freitas' },
        { label: 'R. Andraski', value: 'R. Andraski' },
        { label: 'R. José Ramos Sanches', value: 'R. José Ramos Sanches' },
        { label: 'Tv. Ipiranga', value: 'Tv. Ipiranga' },
        { label: 'R. Antônio Huszsz', value: 'R. Antônio Huszsz' },
        { label: 'R. Antônio F. Befa', value: 'R. Antônio F. Befa' },
        { label: 'R. João B. Junior', value: 'R. João B. Junior' },
        { label: 'Tv. Andrada', value: 'Tv. Andrada' },
        { label: 'R. Grande Alexandre', value: 'R. Grande Alexandre' },
        { label: 'R. Humberto Vendramel', value: 'R. Humberto Vendramel' },
        { label: 'R. Osvaldo de Oliveira', value: 'R. Osvaldo de Oliveira' },
        { label: 'R. Marcio F. Viana', value: 'R. Marcio F. Viana' },
        { label: 'R. Marechal Deodoro', value: 'R. Marechal Deodoro' },
        { label: 'R. Do Seminário', value: 'R. Do Seminário' },
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

