import { StyleSheet, View, ScrollView, Text, TextInput, Image, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import * as MediaLibrary from "expo-media-library";

export default function MomentForm() {
    const GetCurrentPicture = async () => {
        console.log("test");
        const photoUri = await AsyncStorage.getItem("current-photo");
        const photo = await MediaLibrary.getAssetInfoAsync();
        console.log(photo);
        return photoUri;
    };

    const ReturnCamera = () => {
        router.replace("/components/CameraTaker");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.button} onPress={ReturnCamera}>
                    <Text style={styles.text}>Nochmal</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Abrechen</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.formContainer}>
                <Text>Titel</Text>
                <TextInput style={styles.input} placeholder="Titel" />
                <Image style={styles.image} source={GetCurrentPicture} />
                <Text>Beschreibung</Text>
                <TextInput style={styles.input} />
                <Pressable style={styles.button}>
                    <Text>Fertig</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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

    formContainer: {
        paddingLeft: "5%",
        paddingRight: "5%",
    },

    input: {
        width: "100%",
        padding: 1,
        borderWidth: 2,
        borderColor: "grey",
    },

    image: {
        width: "100%",
        height: 200,
    },
});
