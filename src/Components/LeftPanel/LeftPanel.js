

const LeftPanel = (props) => {

    console.log(props.cargo[0])
    return (
      <div className="left-panel-wrapper">
        left panel
        <h1>{props.name}</h1>
        <h2>{props.type}</h2>
        <div className="cargo-bay">
            {props.cargo.map((cargoUnit) => {
                return (
                    <div className="cargo-row">
                        {Array.from(Array(cargoUnit.quantity).keys()).map((life) => {
					return <div className="cargo-crate">{cargoUnit.cargoName}</div>
				})}
                    </div>
                )
                
            })}
        </div>
      </div>
    );
  }

export default LeftPanel;