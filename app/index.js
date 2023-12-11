import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import MainPage from "./components/MainPage.js";

export default function App() {
    const loadNewMomentPage = () => {
        router.replace("components/Camera");
    };

    return (
        <View style={styles.container}>
            <MainPage loadNewMomentsPage={loadNewMomentPage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
