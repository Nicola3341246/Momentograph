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
    viewContainer: {},

    image: {
        height: 50,
    },
});
