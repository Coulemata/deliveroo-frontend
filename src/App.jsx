import "./App.css";
import axios from "axios"
import { useEffect, useState } from "react";

import logo from "./assets/img/logo.svg";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [addMeal, setAddMeal] = useState([0]);

  const handleAddToCart =() => ({


  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--sm75lwgc2dcj.code.run/"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <header>
        <section>
          <div className="container">
            <img src={logo} alt="Deliveroo" />
          </div>
        </section>
        <section>
          <div className="container hero">
            <div>
              <h1>{data.restaurant.name}</h1>
              <p>{data.restaurant.description}</p>
            </div>
            <img src={data.restaurant.picture} alt="" />
          </div>
        </section>
      </header>
      <main>
        <div className="container main-container">
          <div className="col-left">
            {data.categories.map((category) => {
              if (category.meals.length !== 0) {
                return (
                  <section key={category.name} >
                    <h2>{category.name}</h2>
                    <div className="meals-container">
                      {category.meals.map((meal) => {
                        return (
                          <article key={meal.id}>
                            <div onClick={() =>{newAddMeal = [...addMeal]; 
                            newAddMeal.push(meals.id) 
                             setAddMeal(newAddMeal)
                            }}>
                              <h3>{meal.title}</h3>
                              <p className="description">{meal.description}</p>
                              <div className="price-and-popular">
                                <p>{meal.price} €</p>
                                {meal.popular && (
                                  <p>
                                    {/* Populaire <FontAwesomeIcon icon="star" /> */}
                                  </p>
                                )}
                              </div>
                            </div>

                            {meal.picture && (
                              <img src={meal.picture} alt={meal.title} />
                            )}
                          </article>
                        );
                      })}
                    </div>
                  </section>
                );
              }
            })}
          </div>
          <aside className="col-right" id="panier">

          <button> Valider mon panier </button>
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;

