const Bucket = ({ bucket, setBucket, sstotal, setSstotal }) => {
  return (
    <div className="panier">
      <button>Valider mon panier</button>
      <div>
        {bucket.map((element, index) => {
          return (
            <div key={index}>
              <div className="detail-panier">
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
                <p>{element.quantity}</p>
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
                <p>{element.title}</p>
                <p>{element.amount}</p>
              </div>
            </div>
          );
        })}
        {bucket.length !== 0 ? (
          <div>
            <p className="trait"></p>
            <div>
              <p>Sous-total</p>
              <p>{sstotal}</p>
            </div>
            <div>
              <p>Frais de livraison</p>
              <p>2.50 €</p>
            </div>
            <div>
              <p>Total</p>
              <p>{sstotal + 2.5} €</p>
            </div>{" "}
          </div>
        ) : (
          <p> Votre panier est vide</p>
        )}
      </div>
    </div>
  );
};

export default Bucket;
