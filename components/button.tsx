import { Pressable, StyleSheet, Text } from "react-native";

type Props={
    label:string;
    onPress:()=>void;
}

export const Button = ({ label, onPress }: Props) => {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#c0e864",
        borderRadius: 5,
        padding: 15
    },
    text:{
        color: "#000000",
        fontSize: 15,
        textAlign: "center",
        
    }
})