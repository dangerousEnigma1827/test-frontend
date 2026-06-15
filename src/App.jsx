import { useEffect } from "react";
import api from "./api";

function App() {

  useEffect(() => {
    const getData = async () => {
      const res = await api.get("/");
      console.log(res.data);
    };

    getData();
  }, []);

  return <h1>Hello</h1>;
}

export default App;