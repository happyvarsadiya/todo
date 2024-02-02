import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [name, setname] = useState("");
  let [result, setresult] = useState([]);
  let [edit, setedit] = useState();
  let [reset, setreset] = useState([]);
  let [search, setsearch] = useState("");

  const addbtn = () => {
    if (edit) {
      const updated = [...result];
      updated[edit].name1 = name;
      setresult(updated);
      setedit(undefined);
    } else 
    {
      setresult([...result, { name1: name, completed: false }]);
      setreset([...reset, { name1: name, completed: false }]);
    }
    // setresult([...result, name]);
    setname("");
  }
  const btndel = (index) => {
    const del = result.filter((item, i) => i !== index);
    setresult(del);
    setreset(del);
  }
  const btnedit = (index) => {
    setname(result[index].name1)
    setedit(index);
  }

  const checkbtn = (index) => {
    const demo = [...result];
    demo[index].completed = !demo[index].completed;
    setresult(demo);
    setreset(demo);
  }

  const Clickbtn = () => {
    let info = [...reset];
    var data = info.filter((item, index) => {
      return item.name1 === search;
    })
    setresult(data);
    setsearch("");
  };

  const allbtn = () => {
    setresult([...reset]);
  }
  
  const combtn = () => {
    let completebtn = reset.filter((item,index)=>{
      return item.completed == true;
    })
    setresult(completebtn);
  }

  const uncombtn = () => {
    let completebtn = reset.filter((item,index)=>{
      return item.completed === false;
    })
    setresult(completebtn);
  }


  return (
    <div>
      <p className='title'>TO-Do-LIST...!!</p>
      <div className="App">
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter Task'></input>
        <input type="button" value="ADD" onClick={addbtn}></input>
        <div>

            <input type='text'  value={search} placeholder='Search' onChange={(e) => setsearch(e.target.value)} ></input>
            <input type='button' value={"Click"} onClick={Clickbtn}></input>
            <input type='button' value={"Completed"} onClick={combtn}></input>
            <input type='button' value={"Uncompleted"} onClick={uncombtn}></input>
            <input type='button' value={"All"} onClick={() => allbtn()}></input>
          <ul>
            {
              result.map((item, index) => (
                <li key={index}>
                  <input type='checkbox' onClick={() => checkbtn(index)} checked={item.completed}></input>
                  <span  style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.name1}</span>
                  <input type='button' value={"Delete"} onClick={() => btndel(index)} ></input>
                  <input type='button' value={"Edit"} onClick={() => btnedit(index)}></input></li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>

  );
}


export default App;