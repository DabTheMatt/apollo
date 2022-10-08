import ship from "../../assets/images/small-p.png"


const MainPanel = (props) => {
    return (
      <div className="main-panel-wrapper">
        <div className="main-panel-grid">
        {Array.from(Array(100).keys()).map((sector, index) => {
                    return (
                      <div className="grid-sector">
                        {props.planets.map((planet) => {
                          if(planet.position === index+1) {
                            return (
                              <div
                              
                              onClick={(e)=>props.planetClick(e, planet.id)}
                              //onMouseOver={(e)=>props.overPlanet(e, planet.id)}
                              className={`planet-position`}>
                                <span style={{transform: `scale(${planet.developementLevel * 0.3})`}} className={`planet-circle ${planet.selected}`}>
                                  </span>
                                  {planet.current ? <img 
                                                      className={`ship ${props.traveling}`}
                                                       
                                                      src={ship}
                                                      // style={{top: `${planet.x}px`, left: `${planet.y}px`}}
                                                      ></img>
                                                       : ''}
                                  
                                  
                                  <span className="planet-name">{planet.name}</span>
                                  {!planet.current ? 
                                  (<div 
                                onClick={(e)=>props.planetGo(e, planet.id)}
                                className={`fly-to ${props.traveling}`} style={{visibility: `${planet.flyTo}`}}><span className={`fly-go`}>go</span></div>
                              ) : ('')}
                              </div>
                            )
                          }
                        })}
                      </div>
                    )
                  })}
        </div>
        {props.planets.map((planet) => {
          return (
            <p></p>
          )
          // return (
          //   <div
            
          //   onClick={(e)=>props.planetClick(e, planet.id)}
          //   //onMouseOver={(e)=>props.overPlanet(e, planet.id)}
          //   className={`planet-position`} style={{top: `${planet.x}px`, left: `${planet.y}px`}}>
          //     <span style={{transform: `scale(${planet.developementLevel * 0.3})`}} className={`planet-circle ${planet.selected}`}>
          //       </span>
          //       {planet.current ? <img 
          //                           className={`ship ${props.traveling}`}
                                     
          //                           src={ship}
          //                           // style={{top: `${planet.x}px`, left: `${planet.y}px`}}
          //                           ></img>
          //                            : ''}
                
                
          //       {planet.name}
          //       {!planet.current ? 
          //       (<div 
          //     onClick={(e)=>props.planetGo(e, planet.id)}
          //     className={`fly-to ${props.traveling}`} style={{visibility: `${planet.flyTo}`}}><span className={`fly-go`}>go</span></div>
          //   ) : ('')}
          //   </div>
          // )
        })}
        
        {/* <svg className="line-wraper" width="600" height="600">
          <line x1="53" y1="50" x2="222" y2="395" stroke="grey"/>
        <line x1="520" y1="212" x2="217" y2="395" stroke="grey"/>
        </svg> */}


      </div>
    );
  }

export default MainPanel;