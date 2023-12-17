import { StyleSheet, View, Text, Pressable } from "react-native";
import Header from "./Mainpage/Header.js";
import MomentsLists from "./Mainpage/MomentsList.js";

export default function MainPage({ loadNewMomentsPage }) {
    return (
        <View style={styles.container}>
            <Header />
            <MomentsLists />
            <Pressable onPress={loadNewMomentsPage} style={styles.button}>
                <Text>Neuer Moment</Text>
            </Pressable>
        </View>
    );
}

const styles = new StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },

    button: {
        padding: 10,
        backgroundColor: "blue",
    },
});
