import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'gray'
    },
    subContainer:{
        flex: 1,
        alignContent: 'flex-start'
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    button: {
        padding: 5,
        marginTop: 5,
        width: '100%',
        backgroundColor: 'blue',
        borderRadius: 10
    },
    field:{
        width: '50%',
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 5
    }
})

export default styles;