import "./App.css";
import Chatbox from "./components/chatbox";
import FileUpload from "./components/inputFile";
import ImageUpload from "./components/inputImage";
import Ingestion from "./components/ingestion";

function App() {
  return (
    <div className="App">
      <Chatbox />
      <FileUpload />
      <ImageUpload />
      <Ingestion />
    </div>
  );
}

export default App;
