import "./App.css";
import Chatbox from "./pages/chatbox";
import FileUpload from "./pages/inputFile";
import ImageUpload from "./pages/inputImage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Chatbox />
      <FileUpload />
      <ImageUpload />
    </div>
  );
}

export default App;
