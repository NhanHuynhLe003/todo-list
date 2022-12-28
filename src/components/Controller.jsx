import React, { useEffect, useState } from 'react'
import './controller.css'
import MyTask from './MyTask'
export default function Controller() {
    const [task, setTask] = useState([]);
    const [value, setValue] = useState('');
    const [myIndex, setMyIndex] = useState(-1);
    const [color, setColor] = useState('#eee')
    
    useEffect(() => {
      if(myIndex !== -1){
        setColor('#FFFFCC');
      } else {
        setColor('#eee');
      }
    },[myIndex])

    function handleValue(e){
            setValue(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(value !== '' && myIndex == -1){
            setTask(prev => (
                [...prev, value]
            ));
        }
        //khi bam vao edit
        if(myIndex !== -1){
          let output = [];
          task.forEach((myTask,index) => {
            if(index === myIndex){
              myTask = value;
            }
            output.push(myTask);
          })
          setTask(output);
          setMyIndex(-1);
        } 
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input style={{backgroundColor:color}} onChange={handleValue} type="text" name="task" id="task" value={value} />
        <button type="submit">Submit</button>
      </form>
      <div id="taskContainer">
        <MyTask mytask={task} 
        removeTask={prev => setTask(prev)} 
        getValue={prev => setValue(prev)}
        getIndex = {preIndex => setMyIndex(preIndex)}
        />
      </div>
    </div>
  )
}
