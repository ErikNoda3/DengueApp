import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';


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
            placeholder="Visita"
            // searchPlaceholder="Digite..."
            value={value}
            onChange={item => {
                onChange(item.value);
            }}
        />
    );
};

