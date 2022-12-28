

export default function MyTask(props) {
    const myJob = props.mytask;
    const handleRemoveTask = (index) => {
        const r = myJob.filter((job,vitri) => index !== vitri )
        props.removeTask(r)
    }

    const editTask = (index) => {
        props.getValue(myJob[index]);
        props.getIndex(index);
    }
  return (
    <div>
      <ul>
        {myJob.map((myLi,index) => (
            <li key={`${myLi}${index}`} style={{display:'flex', justifyContent:'space-between', marginTop:'2rem'}}>
                {myLi} 
                <span className="editContainer">
                    <button
                    onClick={() => editTask(index)}
                    style={{fontSize:'10px', backgroundColor:'#fff', borderWidth: '1px', borderRadius:'5px'}}>✎</button>
                    <button 
                    onClick={() => handleRemoveTask(index)}
                    style={{fontSize:'10px', marginLeft:'3px',backgroundColor:'#fff', borderWidth: '1px', borderRadius:'5px', backgroundColor:'#ccc'}}>X</button>
                </span>
            </li>
        ))}
      </ul>
    </div>
  )
}
