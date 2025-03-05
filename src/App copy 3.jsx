import Hero from "./component/Hero";

const App = () => {
  const BtnClick=()=>{
    alert("Hello Gustifa Fauzan")
  }
  return (
    <div>
      
      <Hero item={BtnClick} />
    </div>
  );
};

export default App;