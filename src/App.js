import React, {useState, Fragment} from 'react';

import AddUser from './components/Users/AddUser';
import './App.css';
import UsersList from './components/Users/UsersList';

function App() {
const [usersList, setUserslist] = useState([]);

const addUserhandler = (uName,uAge) =>{
  setUserslist((prevUsersList) => {
    return[...prevUsersList,{name:uName, age:uAge, id:Math.random().toString()},]
  })
}

  return (
    <Fragment>
      <AddUser onAddUser={addUserhandler}/>
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
