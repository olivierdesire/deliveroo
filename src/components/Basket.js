import { useState } from "react";

const Basket = ({ basket, setBasket, sstotal, setSstotal }) => {
  const [valid, setValid] = useState(true);
  return (
    <div className="panier">
      <button
        className={
          basket.length === 0
            ? "validation color-vide"
            : "validation color-nonvide"
        }
        onClick={() => {
          const newtab = [];
          setBasket(newtab);
          setValid(false);
        }}
      >
        Valider mon panier
      </button>
      <div>
        {basket.map((element, index) => {
          return (
            <div key={index}>
              <div className="detail-panier">
                <div>
                  <button
                    onClick={() => {
                      const copytab = [...basket];
                      if (element.quantity > 1) {
                        copytab[index].quantity -= 1;
                        copytab[index].amount =
                          copytab[index].price * copytab[index].quantity;
                        setBasket(copytab);

                        let count = 0;
                        for (let i = 0; i < copytab.length; i++) {
                          count = count + copytab[i].amount;
                        }
                        setSstotal(count);
                      } else {
                        // const newtab = [];
                        // for (let i = 0; i < basket.length; i++) {
                        //   if (i !== index) {
                        //     newtab.push(basket[i]);
                        //   }
                        // }
                        copytab.splice(index, 1);
                        setBasket(copytab);
                        let count = 0;
                        for (let i = 0; i < copytab.length; i++) {
                          count = count + copytab[i].amount;
                        }
                        setSstotal(count);
                      }
                    }}
                  >
                    -
                  </button>
                  <p className="detail-panier-qte">{element.quantity}</p>
                  <button
                    onClick={() => {
                      const copytab = [...basket];
                      copytab[index].quantity += 1;
                      copytab[index].amount =
                        copytab[index].price * copytab[index].quantity;
                      setBasket(copytab);

                      let count = 0;
                      for (let i = 0; i < copytab.length; i++) {
                        count = count + copytab[i].amount;
                      }
                      setSstotal(count);
                    }}
                  >
                    +
                  </button>

                  <p className="detail-panier-title">{element.title}</p>
                </div>
                <p>{Number.parseFloat(element.amount).toFixed(2)} €</p>
              </div>
            </div>
          );
        })}
        {basket.length !== 0 ? (
          <div className="validation-2">
            <p className="trait"></p>
            <div className="totaux">
              <p>Sous-total</p>
              <p>{Number.parseFloat(sstotal).toFixed(2)} €</p>
            </div>
            <div className="totaux">
              <p>Frais de livraison</p>
              <p>2.50 €</p>
            </div>
            <p className="trait"></p>
            <div className="totaux final">
              <p>Total</p>
              <p>{Number.parseFloat(sstotal + 2.5).toFixed(2)} €</p>
            </div>{" "}
          </div>
        ) : (
          <div className="panier-vide">
            {valid ? <p> Votre panier est vide</p> : <p> Panier validé </p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
