import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";

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
      <Header />
      <section className="restaurant container">
        <div>
          <h1>{data.restaurant.name}</h1>
          <p> {data.restaurant.description}</p>
        </div>
        <div>
          <img src={data.restaurant.picture} alt="pic" />
        </div>
      </section>
      <section className="categories ">
        <div className="container meal">
          <div>
            {data.categories.map((category, index) => {
              return (
                <div className="container" key={index}>
                  <h2> {category.name}</h2>
                  <div className="list-parts">
                    {category.meals.map((meal) => {
                      return (
                        <div className="parts" key={meal.id}>
                          <div className="object">
                            <h3> {meal.title}</h3>
                            <p>{meal.description.slice(0, 60)}</p>
                            <h4>{meal.price} €</h4>
                          </div>
                          <div>
                            <img src={meal.picture} alt="pic1" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="panier">
            <p>Panier</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
