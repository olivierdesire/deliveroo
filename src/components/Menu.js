import Meal from "./Meal";
import Bucket from "./Bucket";

const Menu = ({ data, bucket, setBucket, sstotal, setSstotal }) => {
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
                        bucket={bucket}
                        setBucket={setBucket}
                        sstotal={sstotal}
                        setSstotal={setSstotal}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <Bucket
          bucket={bucket}
          setBucket={setBucket}
          sstotal={sstotal}
          setSstotal={setSstotal}
        />
      </div>
    </section>
  );
};

export default Menu;
