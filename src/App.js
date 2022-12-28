import Controller from "./components/Controller";


function App() {
  return (
    <div className="App" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1 style={{marginTop:'2rem'}}>Todo List</h1>
      <Controller/>
      
    </div>
  );
}

export default App;
