import { useReducer, } from "react";
import { initialState, reducer } from "./reducer";

const UserReducerExample = () => {


  // const [dog, setDog] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  //? Yukarıdaki state lerin yerine aşağıdaki gibi state leri useReducer hooku ile birleştiriyoruzz..//

  const [state, dispatch ]= useReducer(reducer,initialState);

console.log(state)

const {loading, error, dog} = state;

  const fetchDog = () => {
    console.log("buton çalıştı");
    // setLoading(true);
    //? setLoading(true) yerine set fonksiyonu yerine dispatch functionunu kullandık..
    dispatch({type:"START"})
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
        // setDog(data.message);
        // console.log("Api den veri geldi");
        // setLoading(false);
        //? Yukarıdaki setter fonksiyonu yerine aşağıdaki dispatch fonksiyonunu kullanıyoruz..
        dispatch({type:"SUCCESS", payload: data.message })
      })
      .catch(() => {
        // setError("ERROR!! DATA CAN NOT BE FETCHED");
        // setLoading(false);
        dispatch({type:"FAIL", payload: "ERROR!! DATA CAN NOT BE FETCHED" })

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

export default UserReducerExample;
