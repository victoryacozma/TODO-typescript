import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HookAddToDoContainer from '../components/HookAddToDo';
import HookDeleteToDoContainer from '../components/HookDeleteToDo';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';



export default function ToDoList() {

    const todos = useSelector((state : {todos: any}) => state.todos.todoList)

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('Dissmissed keyboard')

        }}>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    {/* <AddToDo submitHandler = {submitHandler}/> */}
                    <HookAddToDoContainer />
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                // <ToDoItem item = {item} pressHandler = {pressHandler}/>
                                <HookDeleteToDoContainer item={item} />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        // backgroundColor : 'pink',
        padding: 40,
    },
    list: {
        flex: 1,
        marginTop: 20,
        //backgroundColor : 'yellow',
    },
});