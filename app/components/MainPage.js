import { StyleSheet, View, Text, Pressable } from "react-native";
import MomentsLists from "./Mainpage/MomentsList.js";

export default function MainPage({ loadNewMomentsPage }) {
    return (
        <View style={styles.container}>
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
