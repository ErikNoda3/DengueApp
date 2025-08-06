import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import { View, Text } from 'react-native';


type OpcoesProps = {
    value: string | null;
    onChange: (value: string) => void;
};

export function Mapa3_ruas({ value, onChange }: OpcoesProps) {

    const data = [
        { label: 'Av. Curitiba', value: 'Av. Curitiba' },
        { label: 'Pç. Rui Barbosa', value: 'Pç. Rui Barbosa' },
        { label: 'Av. Minas Gerais', value: 'Av. Minas Gerais' },
        { label: 'R. Carlos Schimidt', value: 'R. Carlos Schimidt' },
        { label: 'R. Dom José Marelo', value: 'R. Dom José Marelo' },
        { label: 'R. Do Colégio', value: 'R. Do Colégio' },
        { label: 'R. Edvaldo Canezin Toschio', value: 'R. Edvaldo Canezin Toschio' },
        { label: 'R. Esmeralda', value: 'R. Esmeralda' },
        { label: 'R. Firman Neto', value: 'R. Firman Neto' },
        { label: 'R. Galdino Gluck Junior', value: 'R. Galdino Gluck Junior' },
        { label: 'R. João Cândido Ferreira', value: 'R. João Cândido Ferreira' },
        { label: 'R. Gastão Vidigal', value: 'R. Gastão Vidigal' },
        { label: 'R. José Alves de Paula Filho', value: 'R. José Alves de Paula Filho' },
        { label: 'R. Ouro Branco', value: 'R. Ouro Branco' },
        { label: 'R. Manoel G. Horta', value: 'R. Manoel G. Horta' },
        { label: 'R. Clovis da Fonseca', value: 'R. Clovis da Fonseca' },
        { label: 'R. Nagib Daher', value: 'R. Nagib Daher' },
        { label: 'R. Ponta Grossa', value: 'R. Ponta Grossa' },
        { label: 'R. Rio Branco', value: 'R. Rio Branco' },
        { label: 'R. Osório Ribas de Paula', value: 'R. Osório Ribas de Paula' },
        { label: 'R. Maracahi', value: 'R. Maracahi' },
        { label: 'R. Ouro Fino', value: 'R. Ouro Fino' },
        { label: 'R. Rubi', value: 'R. Rubi' },
        { label: 'R. Topázio', value: 'R. Topázio' },
        { label: 'R. Renê Camargo de Azambuja', value: 'R. Renê Camargo de Azambuja' },
        { label: 'R. Demétrio dos Santos Moreira', value: 'R. Demétrio dos Santos Moreira' },
        { label: 'R. Pe. Severino Ceruti', value: 'R. Pe. Severino Ceruti' },
        { label: 'Av. Rio de Janeiro', value: 'Av. Rio de Janeiro' },
        { label: 'Av. Paraná', value: 'Av. Paraná' },
        { label: 'Tv. Do Gera', value: 'Tv. Do Gera' },
        { label: 'R. São Paulo', value: 'R. São Paulo' },
        { label: 'R. Santo Antônio', value: 'R. Santo Antônio' },
        { label: 'R. Karel Kober', value: 'R. Karel Kober' },
        { label: 'R. Artur Bernardes', value: 'R. Artur Bernardes' },
        { label: 'Tv. Tadue Baruti', value: 'Tv. Tadue Baruti' },
        { label: 'R. Campo Largo', value: 'R. Campo Largo' },
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

