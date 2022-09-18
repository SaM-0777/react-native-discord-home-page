import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#FFF',
        /*width: '100%',
        height: '100%',*/
    },
    scrollButton: {
        // flex: 1,
        ...StyleSheet.absoluteFillObject,
        opacity: 0.2,
        backgroundColor: '#000',
        zIndex: 1,
    },
    line: {
        width: '100%',
        height: 1,
        marginTop: 20,
        backgroundColor: '#E0E0E0',
    },
    headerContainer: {
        flex: 1,
    },
    inputContainer: {
        justifyContent: 'flex-end',
        marginBottom: 2,
    },
});

