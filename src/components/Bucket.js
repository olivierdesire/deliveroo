const Bucket = ({ bucket, setBucket, sstotal, setSstotal }) => {
  return (
    <div className="panier">
      <button
        className={
          bucket.length === 0
            ? "validation color-vide"
            : "validation color-nonvide"
        }
      >
        Valider mon panier
      </button>
      <div>
        {bucket.map((element, index) => {
          return (
            <div key={index}>
              <div className="detail-panier">
                <div>
                  <button
                    onClick={() => {
                      if (element.quantity > 1) {
                        const copytab = [...bucket];
                        copytab[index].quantity -= 1;
                        copytab[index].amount =
                          copytab[index].price * copytab[index].quantity;
                        setBucket(copytab);

                        let count = 0;
                        for (let i = 0; i < copytab.length; i++) {
                          count = count + copytab[i].amount;
                        }
                        setSstotal(count);
                      } else {
                        const newtab = [];
                        for (let i = 0; i < bucket.length; i++) {
                          if (i !== index) {
                            newtab.push(bucket[i]);
                          }
                        }
                        setBucket(newtab);
                        let count = 0;
                        for (let i = 0; i < newtab.length; i++) {
                          count = count + newtab[i].amount;
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
                      const copytab = [...bucket];
                      copytab[index].quantity += 1;
                      copytab[index].amount =
                        copytab[index].price * copytab[index].quantity;
                      setBucket(copytab);

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
                <p>{element.amount} €</p>
              </div>
            </div>
          );
        })}
        {bucket.length !== 0 ? (
          <div className="validation-2">
            <p className="trait"></p>
            <div className="totaux">
              <p>Sous-total</p>
              <p>{sstotal} €</p>
            </div>
            <div className="totaux">
              <p>Frais de livraison</p>
              <p>2.50 €</p>
            </div>
            <p className="trait"></p>
            <div className="totaux final">
              <p>Total</p>
              <p>{sstotal + 2.5} €</p>
            </div>{" "}
          </div>
        ) : (
          <div className="panier-vide">
            <p> Votre panier est vide</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bucket;
