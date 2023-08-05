import React, { useState } from "react";
import "/home/john/CloudHacks-Team11/frontend/cloudhacks-2023/src/App.css";

const Ingestion = () => {
  return (
    <div className="ingestion-container">
      <p>
        Step 3:
        <span style={{ fontSize: "25px", fontWeight: "bold" }}>
          Ingest your data with this button
        </span>
      </p>
      <button className="ingestion-button">Ingest your files here</button>
    </div>
  );
};

export default Ingestion;
