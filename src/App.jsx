
const App = () => {
  
  const PostFormData = (event)=> {
    event.preventDefault();

    alert('Form Submit')
  }

  return (
    <div>
     <form onSubmit={PostFormData} action="">
      <input type="text" placeholder="name" />
      <button type="submit">SUbmit</button>
     </form>

    </div>
  );
};

export default App;