import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View styles={styles.header}>
            <Text>This is a header hehe</Text>
        </View>
    );
}

const styles = new StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
    },
});
