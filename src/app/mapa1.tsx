import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { router } from 'expo-router'
import { MapsButton } from '@/components/Buttons/mapsButton'
import { BackButton } from '@/components/Buttons/backButton'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'

export default function Mapas() {
    const scale = useSharedValue(1)
    const savedScale = useSharedValue(1)

    const pinchGesture = Gesture.Pinch()
        .onStart(() => {
            savedScale.value = scale.value
        })
        .onUpdate((event) => {
            const newScale = savedScale.value * event.scale;
            scale.value = Math.min(Math.max(newScale, 1), 3); // entre 1x e 3x de zoom
        })


    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    const items = []
    for (let i = 1; i <= 37; i++) {
        items.push(
            <MapsButton
                key={i}
                title={i.toString()}
                onPress={() => router.push({ pathname: "/opcoes", params: { quarteirao: i } })}
            />
        )
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>Mapa 1</Text>

                    <GestureDetector gesture={pinchGesture}>
                        <Animated.Image
                            style={[styles.img, animatedStyle]}
                            source={require('../../assets/images/mapa1.jpg')}
                        />
                    </GestureDetector>

                    <Text style={styles.choice}>Selecione o quarteirão</Text>
                    <View style={styles.buttons}>
                        {items}
                    </View>
                    <BackButton title="Voltar" onPress={() => router.back()} />
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    title: {
        marginVertical: 50,
        padding: 15,
        fontSize: 50,
        fontWeight: "bold",
    },
    img: {
        width: 900,
        height: 700,
        resizeMode: 'cover',
    },
    choice: {
        marginVertical: 30,
        fontSize: 30,
        fontWeight: "bold",
        padding: 10
    },
    buttons: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 10,
        width: "90%",
        padding: 20
    }
})
