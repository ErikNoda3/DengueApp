import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import { View, Text } from 'react-native';


type OpcoesProps = {
    value: string | null;
    onChange: (value: string) => void;
};

export function Mapa4_ruas({ value, onChange }: OpcoesProps) {

    const data = [
        { label: 'R. Antonieta Silva Lautenschlanger', value: 'R. Antonieta Silva Lautenschlanger' },
        { label: 'R. Rodrigies Alves', value: 'R. Rodrigies Alves' },
        { label: 'R. Sante Formigoni', value: 'R. Sante Formigoni' },
        { label: 'Av. Munhoz da Rocha', value: 'Av. Munhoz da Rocha' },
        { label: 'Pc. Rui Barbosa', value: 'Pc. Rui Barbosa' },
        { label: 'R. Des. Clotário Portugal', value: 'R. Des. Clotário Portugal' },
        { label: 'R. Albino Bianchi', value: 'R. Albino Bianchi' },
        { label: 'R. Osório Ribas de Paula', value: 'R. Osório Ribas de Paula' },
        { label: 'Av. Minas Gerais', value: 'Av. Minas Gerais' },
        { label: 'Av. Paraná', value: 'Av. Paraná' },
        { label: 'R. Elídio Stábile', value: 'R. Elídio Stábile' },
        { label: 'R. José Francisco Ferreira', value: 'R. José Francisco Ferreira' },
        { label: 'R. Demétrio Santos Moreira', value: 'R. Demétrio Santos Moreira' },
        { label: 'R. Galdino Gluck Junior', value: 'R. Galdino Gluck Junior' },
        { label: 'R. João Lemos', value: 'R. João Lemos' },
        { label: 'R. Castro', value: 'R. Castro' },
        { label: 'R. São Paulo', value: 'R. São Paulo' },
        { label: 'Av. Curitiba', value: 'Av. Curitiba' },
        { label: 'R. Miguel Inácio Souza', value: 'R. Miguel Inácio Souza' },
        { label: 'R. Izidoro Luiz Cerávolo', value: 'R. Izidoro Luiz Cerávolo' },
        { label: 'R. Cel. Luís José dos Santos', value: 'R. Cel. Luís José dos Santos' },
        { label: 'R. Benjamin Braga Filho', value: 'R. Benjamin Braga Filho' },
        { label: 'R. Paulo Roberto de Almeida', value: 'R. Paulo Roberto de Almeida' },
        { label: 'R. Alfredo Canesin', value: 'R. Alfredo Canesin' },
        { label: 'R. das Andorinhas', value: 'R. das Andorinhas' },
        { label: 'R. Brasília', value: 'R. Brasília' },
        { label: 'R. Rio Branco', value: 'R. Rio Branco' },
        { label: 'R. Renê Camargo de Azambuja', value: 'R. Renê Camargo de Azambuja' },
        { label: 'R. Clóvis da Fonseca', value: 'R. Clóvis da Fonseca' },
        { label: 'R. Miyoje Kogure', value: 'R. Miyoje Kogure' },
        { label: 'R. Pitanga', value: 'R. Pitanga' },
        { label: 'R. Ângelo Stábile', value: 'R. Ângelo Stábile' },
        { label: 'R. Mirassol', value: 'R. Mirassol' },
        { label: 'R. Gonçalves Dias', value: 'R. Gonçalves Dias' },
        { label: 'R. Suzana Pachêco', value: 'R. Suzana Pachêco' },
        { label: 'Tv. Ver. José Humeniuk ', value: 'Tv. Ver. José Humeniuk' },
        { label: 'R. Érico Veríssimo', value: 'R. Érico Veríssimo' },
        { label: 'R. Jamil Soni', value: 'R. Jamil Soni' },
        { label: 'Calçadão Antônio T. R. de Oliveira ', value: 'Calçadão Antônio T. R. de Oliveira' },
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

