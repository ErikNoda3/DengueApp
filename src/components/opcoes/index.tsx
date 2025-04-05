import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './styles';

export function Opcoes() {

    const data = [
        { label: 'Jardim Esperança', value: '1' },
    ];

    const [value, setValue] = useState(null);

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
            placeholder="Selecionar área"
            searchPlaceholder="Digite..."
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
        />
    );
};

