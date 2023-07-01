import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import TaskList from '../Components/TaskList'
import ModalTask from '../Components/Modal'

const MainScreen = ({ taskList }) => {
    const [list, setList] = useState(taskList);
    const [input, setInput] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [taskActive, setTaskActive] = useState({});

    console.log(list);
    
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

    const onPressTask = (task) => {
        setTaskActive(task)
        setModalVisible(true)
    }

    const onPressStatus = (valueStatus) => {
        const filteredList = list.filter(taskList => taskList.id !== taskActive.id);
        const sortList = [
            ...filteredList,
            {
                ...taskActive,
                completed: valueStatus
            }
        ].sort(function (a, b) {
            if (a.id > b.id) { return 1 }
            if (a.id < b.id) { return -1 }
            return 0
        });
        setList(sortList);
    }

    return (
        <View style={styles.container}>
            <TopBar
                input={input}
                onAddTask={onAddTask}
                setInput={setInput}
            />
            <TaskList
                list={list}
                onPressTask={onPressTask}
            />
            <ModalTask
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                taskActive={taskActive}
                onPressStatus={onPressStatus}
            />
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
    }
})