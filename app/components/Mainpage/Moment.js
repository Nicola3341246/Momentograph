import { StyleSheet, Text, View, Image } from "react-native";

export default function Moment(data) {
    const momentData = data.data;

    return (
        <View style={styles.viewContainer}>
            <Text>{momentData.name}</Text>
            <Image source={momentData.image} style={styles.image} />
            <Text>{momentData.description}</Text>
        </View>
    );
}

const styles = new StyleSheet.create({
    viewContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: "#454545",
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },

    image: {
        width: "100%",
        height: 200,
    },
});
