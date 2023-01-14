import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/img/logo-teal.svg";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
      <header>
        <img className="container" src={logo} alt="logo-teal" />
      </header>

      <section className="restaurant container">
        <div>
          <h1>{data.restaurant.name}</h1>
          <p> {data.restaurant.description}</p>
        </div>
        <div>
          <img src={data.restaurant.picture} alt="pic" />
        </div>
      </section>
      <section className="categories">
        {data.categories.map((element, index) => {
          return (
            <div className="container" key={index}>
              <h2> {element.name}</h2>
              <div className="list-parts">
                {element.meals.map((element2) => {
                  return (
                    <div className="parts" key={element2.id}>
                      <div>
                        <h3> {element2.title}</h3>
                        <p>{element2.description}</p>
                        <h4>{element2.price} €</h4>
                      </div>
                      <div>
                        <img src={element2.picture} alt="pic1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
