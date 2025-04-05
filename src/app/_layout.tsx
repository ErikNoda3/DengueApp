import { Stack } from "expo-router";

export default function MainLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="home"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="codigoArea"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="mapaJdEsperanca"
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