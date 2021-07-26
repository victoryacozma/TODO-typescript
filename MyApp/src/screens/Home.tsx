import React from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';

export default function Home(props: any){

    const pressHandler = () => {
        props.navigation.navigate('ToDoList');
    }

    return(
        <View style = {styles.container}> 
            <Text >Home page</Text>
            <Button title = 'View the To-do list' onPress = {pressHandler}/> 
            <Button title = 'Go back' onPress = {pressHandler}/> 
            <Button title = 'Button for Git' onPress = {pressHandler}/> 
        </View>
    )
}

const styles = StyleSheet.create({
   
      container: {
       padding: 38
      }

});