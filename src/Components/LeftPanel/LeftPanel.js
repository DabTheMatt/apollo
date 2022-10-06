

const LeftPanel = ({shipName, type, cargo, fuel, credits, dockedOn, cargoCapacity, alert}) => {

  console.log('cargo', cargo)
  return (
    <div className="l">
      <h1>{shipName}</h1>
      <h3 className="font-light">{type}</h3>
      <h3 className="font-light">docked in: <span className="font-bold">{dockedOn}</span> starport</h3>
      <div className="cargo-bay">
          {cargo.length === 0 ? 
          <div>Cargo bay empty</div> : 
          <div className="cargo-crate-wrapper">
            {cargo.map((cargo) => {
              return (
                <div className={`cargo-crate ${cargo}`}>{cargo.charAt(0)}</div>
              )
            })}
          </div>}
          <p className="hold-capacity">Cargo capacity: {cargoCapacity-cargo.length}</p>
      </div>
      <div className="ship-stats">
        <p>Fuel: {fuel}</p>
        <div className="cargo-crate-wrapper">
        {Array.from(Array(fuel/10).keys()).map((crate) => {
          return (
            <div 
                        className={`fuel`}>
                      </div>
          )
        }
      )}
      </div>
        <p>Credits: {credits} Cr</p>
        <h3 className="alert-message">{alert}</h3>
      </div>
    
    </div>
  );
}

export default LeftPanel;