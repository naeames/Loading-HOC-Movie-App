import React from "react";
import './spinner.css';

function Spinner() {
  return (
    
    <div className="spinner-grow spinner" role="status" >
      <span className="sr-only">Loading...</span>
    </div>
    
  );
}

export default Spinner;