import React, {useState, useRef} from "react";
import Card from "../UI/Card";
import Wrapper from "../Helpers/Wrapper";

import styles from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) =>{

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    
        // const [enteredUserName, setEnteredUserName] = useState('');
        // const [enteredUserAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


const addUserhandler = (event) =>{
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
        setError({
            title : 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
        })
        return;
    }
    if(+enteredAge < 1){
        setError({
            title:'Invalid age',
            message:'Please enter a valid age (>0)'
        })
        return;
    }

    props.onAddUser(enteredName, enteredAge);
    //props.onAddUser(enteredUserName, enteredUserAge);
    // setEnteredAge('');
    // setEnteredUserName('');
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
}

// const userNameChangeHandler = (event) =>{
//     setEnteredUserName(event.target.value);
// }

// const ageChangeHandler = (event) =>{
//     setEnteredAge(event.target.value);
// }

const errorHandler = () =>{
    setError(null);
}

    return(
        <Wrapper>
            {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)}
        <Card className={styles.input}>
                <form onSubmit={addUserhandler}>
                    <label htmlFor="username">UserName</label>
                    <input id="usernme" type="text" ref={nameInputRef} />   
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number"  ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
        </Card>
        </Wrapper>
     
  
    )
}

export default AddUser;