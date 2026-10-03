import "./card.css";
import { deletePokemon } from "../services/pokemon.service";
import { updatePokemon } from "../services/pokemon.service";
const card = ({ name, type, id }) => {
  return (
    <>
      <div className="outer-card">
        <div className="inner-card">
          <div className="top-inner-card">
            <p>{name}</p>
            <p>{type}</p>
          </div>
          {/* <p>{id}</p> */}
          <div className="bottom-inner-card"></div>
          <button
            className="edit-btn"
            onClick={() => {
              updatePokemon(id, name, type);
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              deletePokemon(id);
            }}
            className="del-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default card;
