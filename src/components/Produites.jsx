import axios from "axios";
import { useEffect, useState } from "react";

const Produites = () => {
    const img = "https:/via.placeholder.com/360x480";
    const [produits,setProduits] = useState([]); 


    useEffect(() => {
        const fetchEvent = async () =>{

            try {
              const response = await axios.get(
                "https://fakestoreapi.com/products?limit=30"
              );
              setProduits(response.data);
            } catch (err) {
                console.log(err)
            }
        };
        fetchEvent();
    }, [])

    return (
      <section className="container mt-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {produits.map((p) => (
            <div className="col w-25">
              <div className="card px-1 py-3">
                <img
                  src={p.image || img}
                  className="card-img-top"
                  height={250}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fs-5">{p.title || "vide"}</h5>
                  <div className="container my-1">
                    <span className="badge text-bg-secondary">
                      {p.category || "vide"}
                    </span>
                  </div>

                  <div className="p-1  my-4 bg-secondary-subtle text-secondary-emphasis fs-2 text-center rounded-pill">
                    {p.price || "vide"} €
                  </div>

                  <div
                    className="btn-group container d-flex justify-content-center"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button type="button" className="btn btn-outline-primary">
                      Details..
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                      Panier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      //   <div className="col">
      //           <div className="card">
      //             <img src={p.image || img} className="card-img-top" alt="..." />
      //             <div className="card-body">
      //               <h5 className="card-title">{p.title || "vide"}</h5>
      //               <div className="container my-1">
      //                 <span className="badge text-bg-secondary">{p.category || "vide"}</span>
      //               </div>

      //               <div className="p-1  my-4 bg-secondary-subtle text-secondary-emphasis fs-2 text-center rounded-pill">
      //                 {p.price || "vide"} €
      //               </div>

      //               <div
      //                 className="btn-group container d-flex justify-content-center"
      //                 role="group"
      //                 aria-label="Basic outlined example"
      //               >
      //                 <button type="button" className="btn btn-outline-primary">
      //                   Details..
      //                 </button>
      //                 <button type="button" className="btn btn-outline-primary">
      //                   Panier
      //                 </button>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
    );
}
export default Produites;