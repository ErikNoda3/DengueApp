import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import { View, Text } from 'react-native';


type OpcoesProps = {
    value: string | null;
    onChange: (value: string) => void;
};

export function Mapa6_ruas({ value, onChange }: OpcoesProps) {

    const data = [
        { label: 'R. Casemiro de Abreu', value: 'R. Casemiro de Abreu' },
        { label: 'R. Bahia', value: 'R. Bahia' },
        { label: 'R. Antônio Domingos Alves', value: 'R. Antônio Domingos Alves' },
        { label: 'R. Artur Miler Tomás', value: 'R. Artur Miler Tomás' },
        { label: 'R. Paulo Setúbal', value: 'R. Paulo Setúbal' },
        { label: 'R. Italo Ado Fontanini', value: 'R. Italo Ado Fontanini' },
        { label: 'R. Nações Unidas', value: 'R. Nações Unidas' },
        { label: 'R. Monteiro Lobato', value: 'R. Monteiro Lobato' },
        { label: 'R. Topázio', value: 'R. Topázio' },
        { label: 'R. Rosa Stabile', value: 'R. Rosa Stabile' },
        { label: 'R. Tiradentes', value: 'R. Tiradentes' },
        { label: 'R. Cristóvão Colombo', value: 'R. Cristóvão Colombo' },
        { label: 'R. Mal. Deodoro', value: 'R. Mal. Deodoro' },
        { label: 'R. Benedito J. dos Santos', value: 'R. Benedito J. dos Santos' },
        { label: 'R. João Sampaio', value: 'R. João Sampaio' },
        { label: 'R. Adão Kanievski', value: 'R. Adão Kanievski' },
        { label: 'R. João Radui', value: 'R. João Radui' },
        { label: 'R. Wolfgang Weterer', value: 'R. Wolfgang Weterer' },
        { label: 'R. Dom Pedro I', value: 'R. Dom Pedro I' },
        { label: 'R. César Marcos Navia', value: 'R. César Marcos Navia' },
        { label: 'R. Mario Panont', value: 'R. Mario Panont' },
        { label: 'R. Herculano A. Galvão', value: 'R. Herculano A. Galvão' },
        { label: 'R. Aldo de Deus Marchiori', value: 'R. Aldo de Deus Marchiori' },
        { label: 'R. José Tejada Garcia', value: 'R. José Tejada Garcia' },
        { label: 'R. Diniz José Silvério', value: 'R. Diniz José Silvério' },
        { label: 'R. Áureo Sampaio Morais', value: 'R. Áureo Sampaio Morais' },
        { label: 'R. Lucidoro São Karner', value: 'R. Lucidoro São Karner' },
        { label: 'R. Estéfano Kutianski', value: 'R. Estéfano Kutianski' },
        { label: 'R. Pio X', value: 'R. Pio X' },
        { label: 'R. Humberto Contato', value: 'R. Humberto Contato' },
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

