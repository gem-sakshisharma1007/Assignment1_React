import './App.css';
import React, { useState } from 'react';

  const App = () => {
    const [displayDetails, setDisplayDetails] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const toggleDetails = () => {
      setDisplayDetails(!displayDetails);
      setClickCount(clickCount + 1);
    };
  
    const addItem = () => {
      setItems([...items, inputValue]);
      setInputValue('');
    };
  return (
    <>
    <div className="container my-3">
      <h3>REACT Assignment1</h3>
    </div>
    <div className="container my-3">
    <button className='btn btn-primary' onClick={toggleDetails}>Display details</button>
    {displayDetails && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nobis necessitatibus doloremque rem quas? Itaque nisi non facere vero voluptas.</p>}
    <p className="para1">Number of 'Display details' button clicks: {clickCount}</p>
    <div className="input-group mb-3">
      <input type="text" className="form-control" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  placeholder="Enter any text to add " aria-label="Enter any text to add" aria-describedby="basic-addon2" />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={addItem} type="button">Add</button>
      </div>
    </div>
    {/*
     <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <button className='btn btn-warning' onClick={addItem}>Add</button>

  */}
   
    <ul>
        {items.map((item, index) => (
          <li className="li_style"
            key={index}
            style={{ background: index % 5 === 4 ? 'blue' : 'transparent' }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    </>
    
  );
}

export default App;
