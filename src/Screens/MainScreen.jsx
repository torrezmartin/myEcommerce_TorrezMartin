import { Button, StyleSheet, Text, TextInput, View, FlatList, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'

const renderItemTask = ({item}) => {
    return <View style={styles.task} key={item.id}>
            <Text>{item.task}</Text>
        </View>
}

const MainScreen = ({ taskList }) => {
    const [list, setList] = useState(taskList);
    const [input, setInput] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const onAddTask = () => {
        setList([
            ...list, 
            {
                id: list.length + 1,
                task: input,
                completed: false
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Ingrese un ítem'
                    value={input}
                    onChangeText={setInput}
                    />
                <Button
                    title='Agregar'
                    onPress={onAddTask}
                />
            </View>
            <View style={styles.view2}>
                <FlatList
                style={styles.flatList}
                data={list}
                keyExtractor={item => item.id}
                renderItem={renderItemTask}
                />
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            </View>
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
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view1: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'azure',
        width: '100%'
    },
    view2: {
        flex: 6,
        backgroundColor: 'blue',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15
    },
    inputStyle: {
        width: 150,
        borderBottomColor: 'deepskyblue',
        borderBottomWidth: 3,
        marginBottom: 8,
        marginRight: 10
    },
    task: {
        width: '100%',
        backgroundColor: 'azure',
        padding: 10,
        margin: 10
    },
    flatList: {
        width: '90%',
    },

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
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
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
})