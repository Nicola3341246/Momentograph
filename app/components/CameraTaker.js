import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Camera, CameraType } from "expo-camera";
import Index from "../index.js";

export default function CameraTaker() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const width = Dimensions.get("window").width;
    const height = Math.round((width * 4) / 3);

    const toggleCameraType = () => {
        setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
    };

    const goBack = () => {
        router.replace(Index);
    };

    const shootPhoto = () => {
        alert("Photo");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.button} onPress={toggleCameraType}>
                    <Text style={styles.text}>Umdrehen</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={goBack}>
                    <Text style={styles.text}>Abrechen</Text>
                </Pressable>
            </View>
            <Camera ratio="4:3" style={[styles.camera, { height: height }]} type={type}></Camera>
            <View style={styles.footer}>
                <Pressable style={styles.shotButton} onPress={shootPhoto}></Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },

    header: {
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "white",
    },

    camera: {
        width: "100%",
    },

    footer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    shotButton: {
        backgroundColor: "white",
        height: 80,
        width: 80,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: "grey",
    },
});
