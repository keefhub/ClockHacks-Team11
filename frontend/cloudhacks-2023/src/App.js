import "./App.css";
import Chatbox from "./components/chatbox";
import FileUpload from "./components/inputFile";
import ImageUpload from "./components/inputImage";
import Ingestion from "./components/ingestion";

function App() {
  return (
    <div className="App">
      <div className="App-cols1">
        <FileUpload />
        <ImageUpload />
        <Ingestion />
      </div>

      <div className="App-cols2">
        <Chatbox />
      </div>
    </div>
  );
}

export default App;
