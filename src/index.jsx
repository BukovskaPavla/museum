import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {
  const [departments, setDepartments] = useState([]);
  const [clicked, setClicked] = useState();

  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/departments`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDepartments(data.departments);
      });
  }, []);

  const handleChecked = (e) => {
    const name = toString(e.target.value);
    console.log("klikám na " + name);
    setClicked(dep.displayName)
  };

  return (
    <>
      <div className="container">
        <h1>The Metropolitan Museum of Art</h1>
      </div>
      <div>
        Filtry:
        <div>
          Odvětví:
          <div className="departments">
            {departments.map((dep) => (
              <div
                className="department"
                value={dep.displayName}
                key={dep.departmentId}
                onClick={handleChecked}
              >
                {dep.displayName}
              </div>
            ))}
          </div>
          <div>
            Časové rozpětí vzniku díla
            <label>
              Od:
              <input></input>
            </label>
            <label>
              Do:
              <input></input>
            </label>
          </div>
          <div>
            <label>
              vyhledávání podle umělce:
              <input></input>
            </label>
          </div>
          <div>
            <label>
              vyhledávání podle klíčového slova:
              <input></input>
            </label>
          </div>
        </div>
      </div>
      <p>
        Podle vybraných filtrů bych zde vypsala jednotlivé záznamy pro objekty:
      </p>
      <div className="object">
        <div className="object-name">Side Chair</div>
        <img className=""></img>
        <div className="object-department">The American Wing</div>
        <div className="object-artistDisplayedName">Conrad Henninger</div>
        <div className="object-date">1885</div>
        <div className="object-wikidata"></div>
      </div>
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
