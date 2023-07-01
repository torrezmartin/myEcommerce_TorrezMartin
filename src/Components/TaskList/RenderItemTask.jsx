import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({ item, onPressTask }) => {
    return <Pressable onPress={() => onPressTask(item)}>
        <View style={styles.task} key={item.id}>
            <Text>{item.completed == false ? item.task + ' (Incompleto)' : item.task + ' (Completado)'}</Text>
        </View>
    </Pressable>
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
        width: '100%',
        backgroundColor: 'azure',
        padding: 10,
        margin: 10
    },
})