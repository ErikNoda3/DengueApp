import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import { View, Text } from 'react-native';


type OpcoesProps = {
    value: string | null;
    onChange: (value: string) => void;
};

export function Visita({ value, onChange }: OpcoesProps) {

    const data = [
        { label: 'N - normal', value: 'N' },
        { label: 'R - recup.', value: 'R' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Visita</Text>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={data}
                // search
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

