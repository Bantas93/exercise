import React, { useState } from "react";

const Exercise4 = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [bayar, setBayar] = useState(0);
  const handleCheckbox1Change = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckbox2Change = () => {
    setIsChecked2(!isChecked2);
  };

  const handleCheckbox3Change = () => {
    setIsChecked3(!isChecked3);
  };
  const handleBayar = (event) => {
    setBayar(event.target.value);
  };
  console.log(bayar);
  // Harga masing-masing item
  const hargaTas = 10000;
  const hargaSepatu = 15000;
  const hargaKoper = 35000;

  // Menghitung total harga berdasarkan checkbox yang dicentang
  const totalHarga =
    (isChecked1 ? hargaTas : 0) +
    (isChecked2 ? hargaSepatu : 0) +
    (isChecked3 ? hargaKoper : 0);
  const kembali = bayar - parseInt(totalHarga);
  return (
    <div className="container-fluid text-center mt-5 pt-5">
      <h4>Checkb-ox</h4>

      <label>
        <input
          type="checkbox"
          checked={isChecked1}
          onChange={handleCheckbox1Change}
        />{" "}
        Tas
      </label>

      <label>
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={handleCheckbox2Change}
        />{" "}
        Sepatu
      </label>

      <label>
        <input
          type="checkbox"
          checked={isChecked3}
          onChange={handleCheckbox3Change}
        />{" "}
        Koper
      </label>

      <p>Tas dipilih: {isChecked1 ? "Ya" : "Tidak"}</p>
      <p>Sepatu dipilih: {isChecked2 ? "Ya" : "Tidak"}</p>
      <p>Koper dipilih: {isChecked3 ? "Ya" : "Tidak"}</p>
      <br />
      <p>Total Harga: {totalHarga}</p>
      <p className="text-center">Bayar :</p>
      <input
        value={bayar}
        onChange={handleBayar}
        className="text-center"
      ></input>
      <p className="text-center">Kembali :</p>
      <p>{kembali}</p>
    </div>
  );
};

export default Exercise4;
