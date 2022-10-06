import LeftPanel from "../LeftPanel/LeftPanel";
import MainPanel from "../MainPanel/MainPanel";
import RightPanel from "../RightPanel/RightPanel";
import { useState, useEffect } from "react";

export default function MainScreen() {

  const [ship, setShip] = useState({
    shipName: 'Apollo',
    cannons: 4,
    fuel: 100,
    fuelCapacity: 150,
    cargoCapacity: 10,
    type: 'Small frigate',
    cargo: [ ],
    dockedOn: 'Alpha Minor II',
    destination: '',
    credits: 100,
    alert: 'no alerts'
  })

  const [planets, setPlanets] = useState([
    {
      id: 1,
      current: true,
      name: 'Alpha Minor II',
      developementLevel: 2,
      x: 50,
      y: 10,
      selected: 'planet-selected',
      flyTo: 'hidden',
      sources: [
        {
          id: 1,
          name: 'titanium',
          quantity: 15,
        },
        {
          id: 2,
          name: 'uranium',
          quantity: 3,
        },
        {
          id: 3,
          name: 'fuel',
          quantity: 30,
        }
      ]
    },
    {
      id: 2,
      current: false,
      name: 'Beta',
      developementLevel: 3,
      x: 375,
      y: 178,
      selected: '',
      flyTo: 'hidden',
      sources: [
        {
          id: 1,
          name: 'plutonium',
          quantity: 1,
        },
        {
          id: 2,
          name: 'aluminium',
          quantity: 10,
        }
      ]
    },
    {
      id: 3,
      current: false,
      name: 'Theta',
      developementLevel: 5,
      x: 175,
      y: 478,
      selected: '',
      flyTo: 'hidden',
      sources: [
        {
          id: 1,
          name: 'plutonium',
          quantity: 6,
        },
        {
          id: 2,
          name: 'food',
          quantity: 15,
        }
      ]
    }
  ])

  const [currentPlanet, setCurrentPlanet] = useState([]);
  const [aFuelCost, setFuelCost] = useState(10);

  useEffect(() => {
    let tempPlanet = planets;
    console.log('tp', tempPlanet);
    console.log(ship.dockedOn);
    tempPlanet.forEach((planet) => {
      if(planet.current) {
        console.log('true');
        setCurrentPlanet([planet])
      }
    });

  }, [])

  const handlePlanetClick = (e, id) => {
    console.log('id', id)
    let tempPlanet = planets;
    tempPlanet.forEach((planet) => {
      if(planet.id === id && !planet.current) {
        planet.selected = 'planet-selected'
        planet.flyTo = 'visible'
      } else {
        planet.flyTo = 'hidden'
      }
      
    });
    setPlanets([...tempPlanet])
  }

  const handlePlanetGo = (e, id) => {
    console.log('gogogo')
    let tempPlanet = planets;
    tempPlanet.forEach((planet) => {
      if(planet.id === id) {
        planet.current = true
        ship.fuel -= aFuelCost * planet.developementLevel
      } else {
        planet.current = false
        planet.selected = ''
      }
      
    });
    setPlanets([...tempPlanet])
  }

  // const handleOverPlanet = (e, id) => {
  //   console.log('over', id)
  //   let tempPlanets = planets;
  //   tempPlanets.forEach((planet) => {
  //     if(planet.id === id) {
  //       planet.selected = 'planet-selected'
  //     } else {
  //       planet.selected = ''
  //     }
  //   })
  //   setPlanets([...tempPlanets])
  // }

  const handleBuy = (e, id, name) => {
    let tempPlanet = currentPlanet;
    tempPlanet.forEach((planet) => {
        let tempSources = planet.sources.forEach((source) => {
          if (source.name === 'fuel') {
            if(ship.fuel < ship.fuelCapacity && ship.credits > 0) {
            console.log('fuel fuel')
            ship.fuel += 10
            ship.credits -= 20
            source.quantity -= 1
            } else {
              if(ship.fuel === ship.fuelCapacity) {
                ship.alert = 'tank full'
              }
              if(ship.credits === 0) {
                ship.alert = 'no credits'
              }
            }
          } else if(source.id === id) {
            if(ship.cargo.length < ship.cargoCapacity && ship.credits > 0){
              source.quantity -= 1;
              ship.cargo = [...ship.cargo, name]
              ship.credits -= 20
            } 
            
          }
        })
    })
    setCurrentPlanet([...tempPlanet]);
  }

console.log('cp', currentPlanet)
    return (
      <div className="main-background">
      <div className="main-screen-wrapper">
        <div className="side-panel left-panel">
          <LeftPanel 
           {...ship}
          />
        </div>
        <div className="main-panel">
          <MainPanel 
            planets={planets}
            planetGo={handlePlanetGo}
            planetClick={handlePlanetClick}
          />
        </div>
        <div className="side-panel right-panel">
          
            
              
                <div>
                <RightPanel
                  planets={planets}
                  
                  handleBuy={handleBuy}
                 
                />
            </div>
              
            
            

          
          
        </div>
      </div>
      </div>
    );
  }