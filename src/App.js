import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [bucket, setBucket] = useState([]);
  const [sstotal, setSstotal] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--backend-deliveroo--97yqlpf4l44b.code.run/"
      );
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <Header />
      <main>
        <Hero data={data} />
        <Menu
          data={data}
          bucket={bucket}
          setBucket={setBucket}
          sstotal={sstotal}
          setSstotal={setSstotal}
        />
      </main>
    </div>
  );
}

export default App;
