import React, { useState, useEffect } from "react";
import axios from "axios";
import "/home/john/CloudHacks-Team11/frontend/cloudhacks-2023/src/App.css";

const Ingestion = () => {
  const [data, setData] = useState([]);

  const IngestingData = () => {
    axios
      .get("http://localhost:5000/api/ingest")
      .then((response) => {
        setData(response.data);
        alert("data ingested! GPT4All is now more knowledgeable");
      })
      .catch((error) => console.error("Error ingesting data", error));
  };

  return (
    <div className="ingestion-container">
      <p>
        Step 3:
        <span style={{ fontSize: "25px", fontWeight: "bold" }}>
          Ingest your data with this button
        </span>
      </p>
      <button className="ingestion-button" onClick={IngestingData}>
        Ingest your files here
      </button>
    </div>
  );
};

export default Ingestion;
