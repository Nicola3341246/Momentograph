import { StyleSheet, ScrollView } from "react-native";
import Moment from "./Moment.js";
import Icon from "../../../assets/icon.png";

const GetMoments = () => {
    return [
        {
            id: "1",
            name: "Test1",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
            image: Icon,
        },
        {
            id: "1",
            name: "Test2",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
            image: Icon,
        },
        {
            id: "1",
            name: "Test3",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
            image: Icon,
        },
        {
            id: "1",
            name: "Test4",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
            image: Icon,
        },
        {
            id: "1",
            name: "Test1",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
            image: Icon,
        },
        {
            id: "1",
            name: "Test1",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
            image: Icon,
        },
        {
            id: "1",
            name: "Test1",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
            image: Icon,
        },
        {
            id: "1",
            name: "Test1",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
            image: Icon,
        },
    ];
};

export default function MomentsLists() {
    let momentList = GetMoments();
    return (
        <ScrollView style={styles.container}>
            {momentList.map((data, id) => {
                return <Moment key={id} data={data} />;
            })}
        </ScrollView>
    );
}

const styles = new StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        padding: "5%",
    },

    momentsContainer: {
        justifyContent: "space-between",
    },
});
