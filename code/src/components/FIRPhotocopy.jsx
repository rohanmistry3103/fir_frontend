import React, { useState } from 'react';
import './FIRPhotocopy.css';

const FIRPhotocopy = () => {
  const [inspectorName, setInspectorName] = useState('');
  const [complainantName, setComplainantName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('uploaded_by', inspectorName);
      formData.append('complainant_name', complainantName);
      formData.append('complainant_contact', contactInfo);
      formData.append('uploaded_file', file);

      const response = await fetch('http://127.0.0.1:8000/apis/fir-photocopy/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Data sent to backend:', data);
        // Handle successful submission
      } else {
        console.error('Error:', response.statusText);
        // Handle error scenario
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle exception scenario
    }
  };

  return (
    <div className="firPhotocopy">
      <h1>Upload FIR Document</h1>
      <div className="firForm">
        <label>
          Upload FIR:
          <input type="file" onChange={handleFileUpload} />
        </label>
        <label>
          Uploaded by/ Inspector Name:
          <input
            type="text"
            value={inspectorName}
            onChange={(e) => setInspectorName(e.target.value)}
            placeholder="Enter Inspector Name"
          />
        </label>
        <label>
          Complainant Name:
          <input
            type="text"
            value={complainantName}
            onChange={(e) => setComplainantName(e.target.value)}
            placeholder="Enter Complainant Name"
          />
        </label>
        <label>
          Complainant Contact :
          <input
            type="tel"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            placeholder="Enter Contact Info"
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FIRPhotocopy;
