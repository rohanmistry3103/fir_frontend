import React, { useState } from 'react';
import './ManualFIR.css';

const ManualFIR = () => {
  const [formData, setFormData] = useState({
    complainantName: '',
    inspectorName: '',
    incidentDateTime: '',
    placeOfCrime: '',
    policeStation: '',
    incidentDetails: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    try {
      const response = await fetch('/your-backend-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Result from backend:', result);

        // Handle success - update UI or perform necessary actions
      } else {
        console.error('Error:', response.statusText);
        // Handle error - display error message or perform necessary actions
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error - display error message or perform necessary actions
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="manualFIR">
      <h1>Manual FIR</h1>
      <form className="firForm" onSubmit={handleSubmit}>
        <label htmlFor="complainantName">Complainant Name:</label>
        <input
          type="text"
          id="complainantName"
          name="complainantName"
          value={formData.complainantName}
          onChange={handleChange}
          required
        />

        <label htmlFor="inspectorName">Inspector Name:</label>
        <input
          type="text"
          id="inspectorName"
          name="inspectorName"
          value={formData.inspectorName}
          onChange={handleChange}
          required
        />

        <label htmlFor="incidentDateTime">Incident Date and Time:</label>
        <input
          type="datetime-local"
          id="incidentDateTime"
          name="incidentDateTime"
          value={formData.incidentDateTime}
          onChange={handleChange}
          required
        />

        <label htmlFor="placeOfCrime">Place of Crime:</label>
        <input
          type="text"
          id="placeOfCrime"
          name="placeOfCrime"
          value={formData.placeOfCrime}
          onChange={handleChange}
          required
        />

        <label htmlFor="policeStation">Police Station:</label>
        <input
          type="text"
          id="policeStation"
          name="policeStation"
          value={formData.policeStation}
          onChange={handleChange}
          required
        />

        <label htmlFor="incidentDetails">Crime/Incident Details:</label>
        <textarea
          id="incidentDetails"
          name="incidentDetails"
          value={formData.incidentDetails}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ManualFIR;
