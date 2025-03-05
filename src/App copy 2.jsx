import Hero from "./component/Hero";

const App = () => {
  const ItemObj = {
    name: 'Gustifa Fauzan',
    age: 39,
    city: 'Indonesia'
  }
  return (
    <div>
      
      <Hero item={ItemObj} />
    </div>
  );
};

export default App;