import "./BotonFiltradoAZ.css";

export default function BotonFiltradoAZ({ FiltradoAZ }) {
  return (
    <div>
      <select
      id='filtredAZ'
        className="selectOption"
        defaultValue={"DEFAULT"}
        onChange={(e) => FiltradoAZ(e.target.value)}
      >
        <option className="selectFop" value="DEFAULT" disabled>
          Sort by:
        </option>
        <option className="selectFop" value="">
          All regions
        </option>
        <option className="selectFop" value="AZ">
          AZ
        </option>
        <option className="selectFop" value="ZA">
          ZA
        </option>
        <option className="selectFop" value="PopulationASC">
          Area ASC
        </option>
        <option className="selectFop" value="PopulationDES">
          Area DES
        </option>
      </select>
    </div>
  );
}
