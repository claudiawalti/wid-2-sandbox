export default function App() {
  /*
   *
   *    JAVASCRIPT hier
   */
  //const array = [1,2,3, "vier", false, [], undefined, "letzes"]; //variablen können hier definiert werden
  //const element = array[array.length - 3]; //letztes Element des Arrays
  //console.log(array.length)

  const users = ["Tim", "Anna", "Admin", "Lisa"];
  const usersTransformed = users.map(user => user + "_user");
  console.log(users);
  console.log(usersTransformed);


  const filteredUsers = users.filter(user => user !== "Admin");
  console.log(filteredUsers);

const object = {
  meinString: "User",
  meineNummer: 1,
  meinArray: [],
  meinObjekt: {}
};

//Objekte

  return (
    /*
     *
     *    HTML hier
     *    + JavaScript in {} möglich
     *
     */
     <div>
      <div>Hallo Welt</div>
      <div>{object.meinString}</div>
      <div>{object["meineNummer"]}</div>
      {users.map ((user) => (<li>{user}</li>)) }
    </div>
    /*
     *
     */
  );
}
