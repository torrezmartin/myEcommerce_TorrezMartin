import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const MainScreen = ({ taskList }) => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <TextInput style={styles.inputStyle} />
                <Button
                    title='Agregar tarea'
                />
            </View>
            <View style={styles.view2}>
                {taskList.map(item => {
                    return <View style={styles.task} key={item.id}>
                        <Text>{item.task}</Text>
                    </View>
                })}
            </View>
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
        width: '80%',
        backgroundColor: 'azure',
        padding: 10,
    }
})