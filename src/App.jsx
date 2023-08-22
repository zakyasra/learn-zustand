import "./App.css";
import Column from "./components/Column";
import Count from "./components/Count";
import Username from "./components/Username";

function App() {
  return (
    <>
      <Count />
      <hr />
      <Username />
      <hr />
      <div className="columnWrapper">
        <Column state={"PLANNED"} />
        <Column state={"ONGOING"} />
        <Column state={"DONE"} />
      </div>
    </>
  );
}

export default App;
