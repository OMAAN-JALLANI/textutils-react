import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
  };

  return (
    <>
      <Navbar title="TextUtils..." about="About" mode={mode} ChangeMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter text.." mode={mode} />
      </div>
    </>
  );
}

export default App;