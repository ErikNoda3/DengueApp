import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';


type OpcoesProps = {
    value: string | null;
    onChange: (value: string) => void;
};

export function Opcoes({ value, onChange }: OpcoesProps) {

    const data = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
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
            placeholder="Selecionar área"
            searchPlaceholder="Digite..."
            value={value}
            onChange={item => {
                onChange(item.value);
            }}
        />
    );
};

