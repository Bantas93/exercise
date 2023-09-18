import { useState } from "react";

const Exercise3 = () => {
  const [product, setProduct] = useState(0);
  const [toping, setToping] = useState(0);

  const setProductValue = (event) => {
    setProduct(event.target.value);
  };

  const setTopingValue = (event) => {
    setToping(event.target.value);
  };
  const total = parseInt(product) + parseInt(toping);
  return (
    <div className="container-fluid text-center mt-5 pt-5">
      <h4>Makan Apa ?</h4>
      <input
        type="radio"
        name="product"
        value={12000}
        onChange={setProductValue}
      />
      Bakso
      <br />
      <input
        type="radio"
        name="product"
        value={15000}
        onChange={setProductValue}
      />
      Mie Ayam
      <br />
      <input type="radio" name="product" value={0} onChange={setProductValue} />
      Gak Mau Makan
      <br />
      <br />
      <h1>{product}</h1>
      <h4>Toping Apa ?</h4>
      <input
        type="radio"
        name="toping"
        value={2000}
        onChange={setTopingValue}
      />
      Sosis
      <br />
      <input
        type="radio"
        name="toping"
        value={5000}
        onChange={setTopingValue}
      />
      Keju
      <br />
      <input
        type="radio"
        name="toping"
        value={7000}
        onChange={setTopingValue}
      />
      Sosis & Keju
      <br />
      <input type="radio" name="toping" value={0} onChange={setTopingValue} />
      Gak Pake Toping
      <br />
      <h1>{toping}</h1>
      <br />
      <h3>Total Harga</h3>
      <input value={`Rp ${total},00`} disabled />
      {/* <h3>Bayar</h3>
      <input type="number" placeholder="Masukkan Nominal" />
      <h3>Kembali</h3>
      <input type="number" placeholder="Masukkan Nominal" disabled /> */}
      <div className="code">
        <p style={{ color: "green" }}>Code :</p>
        <code>{`import { useState } from "react";

const Exercise3 = () => {
  const [product, setProduct] = useState(0);
  const [toping, setToping] = useState(0);

  const setProductValue = (event) => {
    setProduct(event.target.value);
  };

  const setTopingValue = (event) => {
    setToping(event.target.value);
  };
  const total = parseInt(product) + parseInt(toping);
  return (
    <div className="container-fluid text-center mt-5 pt-5">
      <h4>Makan Apa ?</h4>
      <input
        type="radio"
        name="product"
        value={12000}
        onChange={setProductValue}
      />
      Bakso
      <br />
      <input
        type="radio"
        name="product"
        value={15000}
        onChange={setProductValue}
      />
      Mie Ayam
      <br />
      <input type="radio" name="product" value={0} onChange={setProductValue} />
      Gak Mau Makan
      <br />
      <br />
      <h1>{product}</h1>
      <h4>Toping Apa ?</h4>
      <input
        type="radio"
        name="toping"
        value={2000}
        onChange={setTopingValue}
      />
      Sosis
      <br />
      <input
        type="radio"
        name="toping"
        value={5000}
        onChange={setTopingValue}
      />
      Keju
      <br />
      <input
        type="radio"
        name="toping"
        value={7000}
        onChange={setTopingValue}
      />
      Sosis & Keju
      <br />
      <input type="radio" name="toping" value={0} onChange={setTopingValue} />
      Gak Pake Toping
      <br />
      <h1>{toping}</h1>
      <br />
      <h3>Total Harga</h3>
      <input value={\`Rp ${total},00\`} disabled /></div>
      </div>
    );
  };
  export default Exercise3;`}</code>
      </div>
    </div>
  );
};
export default Exercise3;
