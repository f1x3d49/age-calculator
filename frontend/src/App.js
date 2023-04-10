import FormComponent from "./components/FormComponent";
import { BDayContext } from "./components/FormComponent";

function App() {
  return (
    <BDayContext.Provider value="hello">
      <div className="App flex items-center justify-center w-screen h-screen bg-secondowhite font-poppins">
        <div className="w-[45%] h-3/4 pl-14 pt-8 flex flex-col items-start justify-start bg-white rounded-br-[200px] rounded-tr-3xl rounded-l-3xl">
          <FormComponent />
        </div>
      </div>
    </BDayContext.Provider>
  );
}

export default App;
