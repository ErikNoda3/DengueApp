import { Stack } from "expo-router";

export default function MainLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="codigoArea"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="mapa1"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="mapa2"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="mapa3"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="mapa4"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="mapa5"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="mapa6"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="mapa7"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="opcoes"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="tratamento"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="lit"
                options={{ headerShown: false }}
            />

        </Stack>
    )
}