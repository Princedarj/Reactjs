import {useState } from "react";

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    
    copyTask.push({title,details})
    
    setTask(copyTask)
    // console.log(copyTask);
    

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];

    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  return (
    <div className= " lg:flex h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
            submitHandler(e)
          }} className="flex lg:w-1/2 p-10 gap-4 flex-col items-start ">
          
          <h1 className="font-bold text-4xl">Add Notes</h1>
        
        {/* First Input */}
        
        <input 
        type="text" 
        placeholder="Enter Notes Heading"
        className="w-full px-5 py-2 font-medium border-2 outline-none rounded"
        value={title}
        onChange={(e) => {
         setTitle(e.target.value);
          
        }}
        />
        
        {/* Detail Input */}
        
        <textarea
        type="text" 
        className="w-full px-5 h-32 py-2 border-2 font-medium flex item-start flex-row rounded outline-none"
        placeholder="Write Details Here"
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
        }}
        />

        <button 
        className="active:scale-98 active:bg-slate-400 bg-white text-black font-medium w-full px-5 py-2 rounded outline-none"
        >Add Notes</button>
      </form>

      <div className="lg:border-l-2 rounded-4xl p-10 lg:1/2">
          <h1 className="font-bold text-4xl">Recent Notes</h1>
           <div className="flex gap-5 flex-wrap mt-5 overflow-auto h-[90%]">
             {task.map(function(elem,idx){
              return <div key={idx} className="flex justify-between flex-col items-start relative  px-4 py-1 bg-cover h-52 w-40 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>
                  <h3 className="mt-4 leading-tight text-xl font-bold text-black ">{elem.title}</h3>
                <p className="mt-3 leading-tight font-medium text-gray-500 ">{elem.details}</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }} 
                className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white">Delete</button>
              </div>

              
             })}              
           </div>
      </div>
    </div>
  )
}

export default App
