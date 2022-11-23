import { useState } from "react";

const UseStateExample = () => {
  const [dog, setDog] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);



  const fetchDog = () => {
    console.log("buton çalıştı");
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
        setDog(data.message);
        console.log("Api den veri geldi");
        setLoading(false);
      })
      .catch(() => {
        setError("ERROR!! DATA CAN NOT BE FETCHED");
        setLoading(false);
      });
  };

  console.log("render")
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={fetchDog}
        disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="" />}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default UseStateExample;
