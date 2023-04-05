import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="App flex items-center justify-center w-screen h-screen bg-secondowhite">
      <div className="w-[45%] h-3/4 pl-5 pt-3 flex flex-col items-start justify-start bg-white rounded-br-[200px] rounded-tr-3xl rounded-l-3xl">
        <FormComponent />
        <hr />
      </div>
    </div>
  );
}

export default App;
