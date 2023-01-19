const Meal = ({ meal, bucket, setBucket, sstotal, setSstotal }) => {
  return (
    <div
      key={meal.id}
      className="parts"
      onClick={() => {
        let change = false;
        // console.log(meal.id);
        const copytab = [...bucket];
        if (copytab.length === 0) {
          copytab.push({
            id: meal.id,
            quantity: 1,
            title: meal.title,
            price: parseFloat(meal.price),
            amount: parseFloat(meal.price),
          });
        } else {
          for (let i = 0; i < copytab.length; i++) {
            // console.log(copytab[i].id);
            // console.log(meal.id);
            if (copytab[i].id === meal.id) {
              copytab[i].quantity += 1;
              copytab[i].amount = copytab[i].price * copytab[i].quantity;
              change = false;
              break;
            } else {
              change = true;
            }
          }
          if (change) {
            copytab.push({
              id: meal.id,
              quantity: 1,
              title: meal.title,
              price: parseFloat(meal.price),
              amount: parseFloat(meal.price),
            });
          }
        }
        console.log(copytab);
        setBucket(copytab);

        let count = 0;
        for (let i = 0; i < copytab.length; i++) {
          count = count + copytab[i].amount;
        }
        console.log(count);
        setSstotal(count);
      }}
    >
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
};
export default Meal;
