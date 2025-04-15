import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { styles } from './styles';

type Props = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
} & TextInputProps;

export function LitInput({ label, value, onChangeText, ...rest }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} value={value} onChangeText={onChangeText} {...rest} />
        </View>
    );
}

