import "./BotonFiltrado.css";

export default function BotonFiltrado({ Filtrado }) {
  return (
    <div>
      <select
      id='filteredRegion'
        className="selectOp"
        defaultValue={"DEFAULT"}
        onChange={(e) => Filtrado(e.target.value)}
      >
        <option className="selectOption" value="DEFAULT" disabled>
          Filter by region
        </option>
        <option className="selectFop" value="">
          All regions
        </option>
        <option className="selectFop" value="Europe">
          Europe
        </option>
        <option className="selectFop" value="Asia">
          Asia
        </option>
        <option className="selectFop" value="Africa">
          Africa
        </option>
        <option className="selectFop" value="Americas">
          Americas
        </option>
        <option className="selectFop" value="Oceania">
          Oceania
        </option>
      </select>
    </div>
  );
}
