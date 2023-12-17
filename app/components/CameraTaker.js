import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useRef } from "react";

export default function CameraTaker() {
    const router = useRouter();
    const [type, setType] = useState(CameraType.back);
    const [cameraPermission, requestCameraPermission] = Camera.useCameraPermissions();
    const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
    const cameraRef = useRef(null);

    const width = Dimensions.get("window").width;
    const height = Math.round((width * 4) / 3);

    const toggleCameraType = () => {
        setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
    };

    const goBack = () => {
        router.back();
    };

    const takePicture = async () => {
        const options = { quality: 0.5, base64: true };
        const photo = await cameraRef.current.takePictureAsync(options);
        const asset = await MediaLibrary.createAssetAsync(photo.uri);
        return asset.uri;
    };

    const createMoment = async () => {
        const photo = await takePicture();
        await AsyncStorage.setItem("currentPicture", photo);
        //console.log(await AsyncStorage.getItem("currentPicture"));
        router.push("/components/MomentForm");
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
            <Camera
                ref={cameraRef}
                ratio="4:3"
                style={[styles.camera, { height: height }]}
                type={type}
            ></Camera>
            <View style={styles.footer}>
                <Pressable style={styles.shootButton} onPress={createMoment}></Pressable>
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

    shootButton: {
        backgroundColor: "white",
        height: 80,
        width: 80,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: "grey",
    },
});
