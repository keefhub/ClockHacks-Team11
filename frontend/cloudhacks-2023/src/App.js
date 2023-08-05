import "./App.css";
import Chatbox from "./pages/ChatboxPage";
import FileUpload from "./pages/FileUploadPage";
import ImageUpload from "./pages/ImageUploadPage";

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
