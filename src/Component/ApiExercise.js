import { useState, useEffect } from "react";
const apiKey = process.env.REACT_APP_API_KEY;
console.log("API Key:", apiKey);

const ApiExercise = () => {
  const category = "success";
  const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=" + category;
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, []);

  function fetchData() {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        console.log(quote);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  }

  return (
    <div className="container-fluid text-center mt-5 pt-5">
      <h1 className="">Belajar Api</h1>
      <span className="mt-3">"{quote}"</span>
      <br />
      <br />
      <span>{author}</span>
    </div>
  );
};

export default ApiExercise;
