import { useState } from "react";
import { ServiceFunctions } from "../service/serviceFunctions";

const PDFUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState("");
   const [error, setError] = useState("");

  return (
    <div>
    <div className="auth-form">
      <div className="input-block">
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files![0])}
        />
      </div>
      <div className="align-center">
        <button
          className="primary-btn"
          onClick={() => ServiceFunctions.handleSubmit(file, setSummary, setError)}
        >
          Summarize
        </button>
      </div>

    </div>
      <div className="summary-block">
        {error && error.length > 0 && <p className="error-message">{error}</p>}
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default PDFUploader;
