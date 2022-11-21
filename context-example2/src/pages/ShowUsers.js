import { useUserContext } from '../context/UserContextProvider';
import User from '../components/User';


const ShowUsers = () => {


  //? users bilgisini context'den okuduk

  const {users} = useUserContext();
  
  
  console.log(users);

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <User key={user.id} user={user} />

      ))}
    </div>
  );
};

export default ShowUsers;
