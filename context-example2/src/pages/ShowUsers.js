import { useUserContext } from '../context/UserContextProvider';

const ShowUsers = () => {
  //? users bilgisini context'den okuduk
  return (
    <div>
      <h2>User List</h2>
      {/* {users.map((user) => (
        <User key={user.id} user={user} />
      ))} */}
    </div>
  );
};

export default ShowUsers;
