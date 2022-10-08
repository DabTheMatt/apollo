import ship from "../../assets/images/small-p.png"
import fuelImg from "../../assets/images/fuel.png"

const LeftPanel = (props) => {

  console.log('cargo', props.cargo)
  return (
    <div className="l">
      <h1>{props.shipName}</h1>
      <div className="left-panel-ship-wrapper"><img className="left-panel-ship" src={ship}></img></div>
      <h3 className="font-light">{props.type}</h3>
      <h3 className="font-light">docked in: <span className="font-bold">{props.dockedOn}</span> starport</h3>
      <div className="cargo-bay">
          {props.cargo.length === 0 ? 
          <div>Cargo bay empty</div> : 
          <div className="cargo-crate-wrapper">
            {props.cargo.map((cargo) => {
              return (
                <div onClick={(e) => props.handleSell(e, cargo.id, cargo.name, cargo.index)} className={`cargo-crate ${cargo.name}`}>{cargo.name.charAt(0)}</div>
              )
            })}
          </div>}
          <p className="hold-capacity">Cargo capacity: {props.cargoCapacity-props.cargo.length}</p>
      </div>
      <div className="ship-stats">
        <p>Fuel: {props.fuel}</p>
        <div className="cargo-crate-wrapper">
        {Array.from(Array(props.fuel/10).keys()).map((crate) => {
          return (
            <div
              className={`fuel`}
              >
            </div>
          )
        }
      )}
      </div>
        <p>Credits: {props.credits} Cr</p>
        <h3 className="alert-message">{alert}</h3>
      </div>
    
    </div>
  );
}

export default LeftPanel;