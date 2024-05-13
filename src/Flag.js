import "./style.css";

function Flags({ flagImg, flagAlt, flagName }) {
  return (
      <div className="countryCard">
        <img src={flagImg} alt={flagAlt} style={{width:"100px", height:"100px"}} />
        <h2>{flagName}</h2>
      </div>
  );
}

export default Flags;