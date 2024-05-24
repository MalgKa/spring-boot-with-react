import './App.css';
import {getContacts} from "./api/ContactService";

function App() {

    const getAllContacts =async (page=0, size=10) =>{
        console.log(await getContacts(page,size))
    }
  return (
      <div>
        <h1>so hello :)</h1>
          <button onClick={() =>getAllContacts()}>get all contacts</button>
      </div>
  );
}

export default App;
