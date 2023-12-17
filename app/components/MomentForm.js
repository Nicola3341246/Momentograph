import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TextInput,
    Image,
    Pressable,
    AsyncStorage,
} from "react-native";
import { useState, useEffect } from "react";
import { router } from "expo-router";
import Pic from "../../assets/icon.png";

export default function MomentForm() {
    const [weatherInfo, setWeatherInfo] = useState("");

    const GetCurrentPicture = () => {
        return Pic;
    };
    const pic = GetCurrentPicture();

    const ReturnCamera = () => {
        router.replace("/components/CameraTaker");
    };

    const ReturnToMainPage = () => {
        router.replace("/");
    };

    const getWeather = async () => {
        const apiKey = "Erstellen sie sich kostenlos einen API Key auf weatherapi.com";
        const location = "Zürich";

        let weather = "";

        return (weather = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                weather =
                    "Temperatur: " +
                    data.current.temp_c +
                    "°C Wind: " +
                    data.current.wind_kph +
                    "km/h";
                console.log(weather);
                return weather;
            }));
    };

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const weather = await getWeather();
                setWeatherInfo(weather);
            } catch (error) {
                console.error("Error in fetchWeather:", error);
            }
        };

        fetchWeather();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.button} onPress={ReturnCamera}>
                    <Text style={styles.text}>Nochmal</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={ReturnToMainPage}>
                    <Text style={styles.text}>Abrechen</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.formContainer}>
                <Text>Titel</Text>
                <TextInput style={styles.input} placeholder="Titel" />
                <Text>Beschreibung</Text>
                <TextInput style={styles.input} />
                <Image style={styles.image} source={GetCurrentPicture()} />
                <Text>Wetter: {weatherInfo}</Text>
                <Pressable style={styles.submitButton} onPress={ReturnToMainPage}>
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

    submitButton: {
        margin: 10,
        padding: 10,
        width: "80%",
        borderRadius: 10,
        elevation: 3,
        alignSelf: "center",
        backgroundColor: "#3884ff",
        alignItems: "center",
    },
});
