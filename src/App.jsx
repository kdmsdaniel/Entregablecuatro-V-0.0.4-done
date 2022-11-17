import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import "./styles.css";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [usersSelected, setUsersSelected] = useState(null);
 
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsersList(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsersList(res.data));
  };
   
  const selectUsers = (Users) => {
    setUsersSelected(Users);
  };

  const deleteUsers = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then((res) => getUsers(res.data));
  };

  const deselectUsers = () => setUsersSelected(null);

  return (
    <div className="App">
      <UsersForm
        getUsers={getUsers}
        usersSelected={usersSelected}
        deselectUsers={deselectUsers}
      />
      <UsersList 
      usersList={usersList} 
      deleteUsers={deleteUsers}
      selectUsers={selectUsers} 
       />
    </div>
  );
}

export default App;
