import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'

const ModalTask = ({ modalVisible, setModalVisible, taskActive, onPressStatus }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{taskActive.task}</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonOK]}
                            onPress={() => {
                                onPressStatus(true)
                                setModalVisible(!modalVisible)
                            }}>
                            <Text style={styles.textStyle}>Completo</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonNO]}
                            onPress={() => {
                                onPressStatus(false)
                                setModalVisible(!modalVisible)
                            }}>
                            <Text style={styles.textStyle}>Incompleto</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonCANCEL]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalTask

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#2196F3',
        marginRight: 5
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonOK: {
        backgroundColor: 'green',
    },
    buttonNO: {
        backgroundColor: 'red',
    },
    buttonCANCEL: {
        backgroundColor: 'blue',
    },
    buttonContainer: {
        flexDirection: 'row'
    }
})