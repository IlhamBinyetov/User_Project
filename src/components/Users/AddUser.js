import React from "react";
import Card from "../UI/Card";

import styles from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = (props) =>{

const addUserhandler = (event) =>{
    event.preventDefault();
}

    return(
        <Card className={styles.input }>
            <form onSubmit={addUserhandler}>
                    <label htmlFor="username">UserName</label>
                    <input id="usernme" type="text" />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" />
                    <Button type="submit">Add User</Button>
                </form>
        </Card>
  
    )
}

export default AddUser