import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'

const TopBar = ({input, onAddTask, setInput}) => {    
    return (
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
    )
}

export default TopBar

const styles = StyleSheet.create({
    view1: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'azure',
        width: '100%'
    },
    inputStyle: {
        width: 150,
        borderBottomColor: 'deepskyblue',
        borderBottomWidth: 3,
        marginBottom: 8,
        marginRight: 10
    },
})