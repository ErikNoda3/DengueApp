import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import { View, Text } from 'react-native';


type OpcoesProps = {
    value: string | null;
    onChange: (value: string) => void;
};

export function TipoImovel({ value, onChange }: OpcoesProps) {

    const data = [
        { label: 'R - residencial', value: 'R' },
        { label: 'C - comércio', value: 'C' },
        { label: 'TB - terreno baldio', value: 'TB' },
        { label: 'PE - ponto estratégico', value: 'PE' },
        { label: 'O - outro', value: 'O' },
    ];

    return (
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
            placeholder="Tipo do imóvel"
            searchPlaceholder="Digite..."
            value={value}
            onChange={item => {
                onChange(item.value);
            }}
        />
    );
};

