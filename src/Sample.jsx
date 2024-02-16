import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({ name: '', age: 0, city: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddData = async () => {
    try {
      await axios.post('http://localhost:5000/api/data', newData);
      setNewData({ name: '', age: 0, city: '' });
      fetchData();
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <h1>Data from Flask API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{`${item.name}, ${item.age}, ${item.city}`}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newData.name}
          onChange={(e) => setNewData({ ...newData, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={newData.age}
          onChange={(e) => setNewData({ ...newData, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          value={newData.city}
          onChange={(e) => setNewData({ ...newData, city: e.target.value })}
        />
        <button onClick={handleAddData}>Add Data</button>
      </div>
    </div>
  );
};

export default MyComponent;
