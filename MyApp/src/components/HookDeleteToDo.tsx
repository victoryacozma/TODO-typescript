import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function HookDeleteToDoContainer(props: any) {
    const listOfToDos = useSelector((state : any) => state.todos.todoList)
    const dispatch = useDispatch();
    const [checkboxState, setCheckboxState] = useState(false);
    
    return (
        // <TouchableOpacity onPress = {() => dispatch(deleteToDo(item.key))}>
            
        //     <Text style = {styles.item}> {item.text}</Text>
        // </TouchableOpacity>
        <BouncyCheckbox
                    style={{ marginTop: 16 }}
                    //ref={(ref: any) => (bouncyCheckboxRef = ref)}
                    isChecked={checkboxState}
                    text={props.item.text}
                    disableBuiltInState
                    onPress={() => setCheckboxState(!checkboxState)}
                />
    )
}

const styles = StyleSheet.create({
    item: {
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 1,
    }
  });

export default HookDeleteToDoContainer;
