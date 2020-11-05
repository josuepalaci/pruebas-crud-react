import React, {useState} from 'react';
import UserTable from './components/userTable';
import { v4 as uuidv4 } from "uuid";
import AddUserForm from './components/addUser';
import EditUserForm from './components/editUser';

function App() {
  
  const data = [
    { id: uuidv4(), name: 'asdasd', username: 'asdasdas'},
    { id: uuidv4(), name: 'qweqweqweqwe', username: 'asdasdas'},
    { id: uuidv4(), name: 'zxczxczxc', username: 'asdasdas'},
  ]

  //state
  const [users, setUsers] = useState(data);
  //Add User
  const addUser = (user)=>{
    user.id = uuidv4();
    setUsers([
      ...users,
      user
    ]);
  };
  //delete user
  const deleteUser = (id)=>{
    console.log(id);
    const filtro = users.filter(user=> user.id !== id );
    setUsers( filtro );
  }; 
  //edit User
  const editUser = ()=>{

  };
  //editing
  const [edit,setEdit] = useState(false);
  //current User
  const [current,setCurrent] = useState({
    id: null, name: '', username: ''
  });

  const editRow = (user)=>{
      setEdit(true)
    setCurrent({
      id: user.id, name: user.name, username: user.username
    });
  };

  //update user
  const updateUser = (id, updateUser)=>{
    setEdit(false);

    setUsers(users.map(user=>(user.id===id ? updateUser : user)))

  };

  return (

    <div className="container">
      <h1>CRUD react app with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          {
            edit?(
              <div>
                <h2>Edit User</h2>
                <EditUserForm current={current}
                updateUser={updateUser} />
              </div>
            ) : (
              <div>
                <h2>Add User</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }
          
        </div>
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>

    );
}

export default App;
