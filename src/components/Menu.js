import Meal from "./Meal";
import Basket from "./Basket";

const Menu = ({ data, basket, setBasket, sstotal, setSstotal }) => {
  return (
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
                      <Meal
                        meal={meal}
                        basket={basket}
                        setBasket={setBasket}
                        setSstotal={setSstotal}
                        key={meal.id}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <Basket
          basket={basket}
          setBasket={setBasket}
          sstotal={sstotal}
          setSstotal={setSstotal}
        />
      </div>
    </section>
  );
};

export default Menu;
