import { useState } from 'react'



function App() {

  const [input,setinput] = useState("")
  const [val,setval] = useState([])
  function handle(e){
    setinput(e.target.value)
  }


  function submit(){
    setval([...val, {name: input, id: Date.now()}])
    setinput("")
  }


function sethandl(id){
  let filterdata = val.filter(function(e){
    
    return e.id !== id
  })
  setval(filterdata)

}
 return <>
 
 <input type="text" value={input} onChange={handle} />
 <button onClick={submit}>Add todo</button>

 {val.map(function(ele){
  return <li key={ele.id}>{ele.name}
  <button onClick={ ()=>sethandl(ele.id)}>Delete</button>
  </li>

 })}
 </>
}

export default App
