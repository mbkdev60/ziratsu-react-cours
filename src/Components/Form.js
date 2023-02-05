import { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [dataArr, setDataArr] = useState([
    { txt: "Promener le chien", id: uuidv4() },
    { txt: "Sport", id: uuidv4() },
    { txt: "Coder avec React", id: uuidv4() },
  ]);

  const [stateInput, setStateInput] = useState();

  const deleteElement = (id) => {
    // console.log(id);
    const filteredState = dataArr.filter((item) => {
      return item.id !== id;
    });
    setDataArr(filteredState);
  };

  const addTodo = (e) => {
    e.preventDefault(); //la page se mette à jour à chaque fois qu'on envoi le formulaire
    const newArr = [...dataArr]; // création d'un nouveau tableau avec tous les objets à l'intérieur, copie du state qui est déjà un tableau.

    const newTodo = {}; // création d'un nouvel objet
    newTodo.txt = stateInput;
    newTodo.id = uuidv4(); // ajout des propriétés txt et id

    newArr.push(newTodo);
    setDataArr(newArr);// changement du tableau avec les nouvelles donnèes.

    setStateInput(""); //vider l'input, le remttre à zéro.
  };

  const linkedInput = (e) => {
    setStateInput(e);
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form onSubmit={(e) => addTodo(e)} className="mb-3">
        <label htmlFor="todo" className="mt-3">
          Chose à faire
        </label>
        <input
          value={stateInput}
          onInput={(e) => linkedInput(e.target.value)}
          type="text"
          className="form-control"
          id="todo"
        />
        <button className="mt-2 btn btn-primary d-block">Envoyez</button>
      </form>
      <h2>Liste des choses à faire : </h2>
      <ul className="list-group">
        {dataArr.map((item) => {
          return (
            <Item
              txt={item.txt}
              key={item.id}
              id={item.id}
              delFunc={deleteElement}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Form;
