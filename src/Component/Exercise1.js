import React, { useState } from "react";

const Exercise1 = () => {
  const [inputValue, setinputValue] = useState("");
  const [outputValue, setouttValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = () => {
    setouttValue(inputValue);
  };

  return (
    <div className="container-fluid text-center mt-5 pt-5">
      <p>Masukkan nilai, kemudian submit, maka nilai akan muncul.</p>
      <h5>Input</h5>
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <button onClick={handleSubmit}>Submit</button>
      <h5>Output</h5>
      <h1 id="result" style={{ color: "red", fontWeight: "bold" }}>
        {outputValue}
      </h1>
      <br />
      <p id="code"></p>
      <li>Menggunakan useState()</li>
      <div className="code">
        <p style={{ color: "green" }}>Code :</p>
        <code>{`import React, { useState } from "react";

const Exercise1 = () => {
  const [inputValue, setinputValue] = useState("");
  const [outputValue, setouttValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = () => {
    setouttValue(inputValue);
  };

  return (
    <div className="tc">
      <h5>Input</h5>
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <button onClick={handleSubmit}>Submit</button>
      <h5>Output</h5>
      <h1 id="result" style={{ color: "red", fontWeight: "bold" }}>
        {outputValue}
      </h1>
      <br />
      <p id="code"></p>
      </div>
    </div>
  );
};

export default Exercise1;`}</code>
      </div>
    </div>
  );
};

export default Exercise1;
