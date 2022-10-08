

const RightPanel = (props) => {

  console.log('pdl', props.planets)
  return (
    
    <div className="">
      {props.planets.map((planet) => {
        {console.log('ppp', planet)}
        if(planet.current) {
        return (
          <div>
          <h1>{planet.name}</h1>
          <h3 className="font-light">Developement level: {planet.developementLevel}</h3>
          <div className="market-place">
            {planet.sources.map((source) => {
              return (
                <div key={source.id}>
                  <p>{source.name} : {source.quantity} ( price: 20 Cr/crate)</p>
                  <div className="cargo-crate-wrapper">
                  {Array.from(Array(source.quantity).keys()).map((crate, index) => {
                    return (
                      <div 
                        onClick={(e)=>props.handleBuy(e, source.id, source.name, index)}
                        className={`cargo-crate ${source.name}`}>{source.name.charAt(0)}
                      </div>
                    )
                  })}
                </div>
              </div>
              )
            })}
          </div>
        </div>
      )} else {
          <p>not</p>
        }
      })}
      </div>
    
    );
  }

export default RightPanel;