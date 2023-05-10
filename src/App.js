
import { useState } from 'react';
import './App.css';

function App() {
  const [input, setinput] = useState('');
  const [list, setlist] = useState([]);
  const [index, setindex] = useState();
  const addItem = ()=>{

      const templist = [...list]
      templist.push(input)
      setlist(templist)
      
      setinput('')
  }
  
  const delItem = (ind)=>{
    const templist = [...list]
    templist.splice(ind,1)
    setlist(templist)
    setinput('')
  }
 console.log(list)
  return (
   <div >
    <input type='text' onChange={(e)=>(setinput(e.target.value))} value={input}></input>
    <input type='button' value={"add"} onClick={addItem}></input>
    
    {
      list.map((item,i)=>{
        return(
        <ul>
          <li key={i+1}>
            <h1>{item}</h1>
            <button onClick={()=>(delItem(i))}>
              del
            </button>
          </li>
        </ul>
      )})
    }
   </div>
   
  );
}

export default App;
