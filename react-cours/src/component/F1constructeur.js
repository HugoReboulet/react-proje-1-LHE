import React, { useState } from "react";
import F1constructeur from "./Page2/F1-constructeur";

const App = () => {
  const [mesConstruteurs, setMesConstructeurs] = useState([]);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  async function getData() {
    const response = await fetch(
      "http://ergast.com/api/f1/2021/constructors.json"
    );
    const data = await response.json();
    setMesConstructeurs(data.MRData.ConstructorTable.Constructors);
    console.log(mesConstruteurs);
  }

  getData();

  return (
    <div>
      <F1constructeur nomConstructeur={mesConstruteurs} origine={"Pays"} />

      {mesConstruteurs.map((constructeur) => {
        return (
          <div key={constructeur.constructorId}>
            {constructeur.constructorId}
          </div>
        );
      })}
    </div>
  );
};

export default App;
