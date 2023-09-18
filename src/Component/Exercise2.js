import { useState } from "react";

const Exercise2 = () => {
  const [count, setCount] = useState(0);

  // const countLess = () => {
  //   setCount(count - 1);
  // };

  // const countAdd = () => {
  //   setCount(count - 1);
  // };
  const countLess = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count <= 0) {
      alert("Ga Bisa Kurang Lagi Bos !");
    }
  };

  const countAdd = () => {
    if (count < 10) {
      setCount(count + 1);
    }
    if (count >= 10) {
      alert("Ga Bisa Tambah Lagi Bos !");
    }
  };

  return (
    <div className="container-fluid text-center mt-5 pt-5">
      <p>
        Nilai dimulai dari <strong>0</strong>, dan maksimal nilai adalah{" "}
        <strong>10</strong>.
      </p>
      <h3> count : {count}</h3>
      <br />
      <button onClick={countLess} className="btn btn-secondary m-3">
        Kurang
      </button>
      <button onClick={countAdd} className="btn btn-secondary m-3">
        Tambah
      </button>
      <br />
      <li>Menggunakan useState()</li>
      <li>Menggunakan if else</li>
      <div className="code">
        <p style={{ color: "green" }}>Code :</p>
        <code>
          {`import { useState } from "react";

const Exercise2 = () => {
  const [count, setCount] = useState(0);
  const countLess = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count <= 0) {
      alert("Net ! Raiso Kurang");
    }
  };

  const countAdd = () => {
    if (count < 10) {
      setCount(count + 1);
    }
    if (count >= 10) {
      alert("Net ! Raiso Lebih");
    }
  };

  return (
    <div className="tc">
      <p>Start 0 s/d 10</p>
      <h3> count : {count}</h3>
      <br />
      <button onClick={countLess} style={{ margin: "10px" }}>
        Kurang
      </button>
      <button onClick={countAdd} style={{ margin: "10px" }}>
        Tambah
      </button>
    </div>
  );
};
export default Exercise2;
`}
        </code>
      </div>
    </div>
  );
};
export default Exercise2;
