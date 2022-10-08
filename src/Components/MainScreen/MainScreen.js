import LeftPanel from "../LeftPanel/LeftPanel";
import MainPanel from "../MainPanel/MainPanel";
import RightPanel from "../RightPanel/RightPanel";
import { useState, useEffect } from "react";
import smallFrigate from "../../assets/images/small-frigate.png"

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
    alert: 'no alerts',
    image: '../../assets/images/small-frigate.png'
  })

  const [planets, setPlanets] = useState([
    {
      id: 1,
      current: true,
      name: 'Alpha Minor II',
      developementLevel: 2,
      x: 50,
      y: 10,
      position: 22,
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
      name: 'Beta geminae 45',
      developementLevel: 3,
      x: 375,
      y: 178,
      position: 56,
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
      name: 'Theta prime',
      developementLevel: 5,
      x: 175,
      y: 478,
      position: 78,
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
    },
    {
      id: 4,
      current: false,
      name: 'Gamma X',
      developementLevel: 4,
      x: 175,
      y: 478,
      position: 83,
      selected: '',
      flyTo: 'hidden',
      sources: [
        {
          id: 1,
          name: 'water',
          quantity: 60,
        },
        {
          id: 2,
          name: 'food',
          quantity: 5,
        },
        {
          id: 3,
          name: 'fuel',
          quantity: 5,
        }
      ]
    },
    {
      id: 5,
      current: false,
      name: 'Epsilon IV',
      developementLevel: 1,
      x: 175,
      y: 478,
      position: 19,
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
          name: 'uranium',
          quantity: 5,
        },
        {
          id: 3,
          name: 'fuel',
          quantity: 12,
        }
      ]
    },
    {
      id: 6,
      current: false,
      name: 'Clover I',
      developementLevel: 2,
      x: 175,
      y: 478,
      position: 72,
      selected: '',
      flyTo: 'hidden',
      sources: [
        {
          id: 1,
          name: 'gold',
          quantity: 17,
        },
        {
          id: 2,
          name: 'food',
          quantity: 4,
        },
        {
          id: 3,
          name: 'water',
          quantity: 70,
        }
      ]
    }
  ])

  const [adventures, setAdventures] = useState([
    {
      id: 1,
      title: 'pirates',
      text: 'atteced your ship!',
      currentAdventure: false,
      losts: 20
    },
    {
      id: 2,
      title: 'cats',
      text: 'atteced your ship!',
      currentAdventure: false,
      losts: 20
    },
    {
      id: 3,
      title: 'dogs',
      text: 'atteced your ship!',
      currentAdventure: false,
      losts: 20
    },
    {
      id: 4,
      title: 'fishes',
      text: 'atteced your ship!',
      currentAdventure: false,
      losts: 20
    },
    {
      id: 5,
      title: 'horses',
      text: 'atteced your ship!',
      currentAdventure: false,
      losts: 20
    },
    {
      id: 6,
      title: 'humans',
      text: 'atteced your ship!',
      currentAdventure: false,
      losts: 20
    },
  ])

  const [currentPlanet, setCurrentPlanet] = useState([]);
  const [aFuelCost, setFuelCost] = useState(10);
  const [traveling, setTraveling] = useState('');
  const [adventureEvent, setAdventureEvent] = useState('');
  const [cargoId, setcCargoId] = useState(1);

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

  const travelAdventure = () => {
    let adventureNumber = Math.floor(Math.random() * (adventures.length - 1) + 1);
    console.log('random number', adventureNumber);
    let temAdventures = adventures;
    temAdventures.forEach((adventure) => {
      if(adventure.id === adventureNumber) {
        adventure.currentAdventure = true
        setAdventureEvent('adventureEvent')
        ship.credits -= adventure.losts
      } else {
        adventure.currentAdventure = false
      }
    })
    setAdventures([...temAdventures])
    console.log('adventures', adventures)
  }

  const handlePlanetGo = (e, id) => {
    setTimeout(function() {
      travelAdventure();
    }, 2000)
    setTraveling('traveling');
    setTimeout(function() {
      console.log('gogogo')
    let tempPlanet = planets;
    tempPlanet.forEach((planet) => {
      if(planet.id === id) {
        planet.current = true
        ship.fuel -= aFuelCost * planet.developementLevel
        ship.dockedOn = planet.name
      } else {
        planet.current = false
        planet.selected = ''
      }
      
    });
    setTraveling('ariving');
    setPlanets([...tempPlanet])
  }, 5000);
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

  const handleBuy = (e, id, name, index) => {
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
              ship.cargo = [...ship.cargo, {id: cargoId, name: name, index: index}]
              ship.credits -= 20
            } 
            setcCargoId(cargoId +1);
          }
        })
    })
    setCurrentPlanet([...tempPlanet]);
  }

  const handleSell = (e, id, name, index) => {
    console.log('sell', ship.cargo);
    let tempCargo = ship.cargo;
    console.log('id', id)
    let newCargo = tempCargo.filter(el => el.id !== id)
    
    let tempPlanet = planets;
    tempPlanet.forEach((planet) => {
      if(planet.current) {
        console.log('on planet', planet.name)
        let tempSources = planet.sources;
        tempSources.forEach((source) => {
          
          if(source.name === name) {
          source.quantity += 1
          console.log('name sone', name, source.name)
          ship.credits +=10
        } else {
            planet.sources = [...planet.sources, { id: cargoId + 10, name: name, index: index}]
          }
        })
        console.log('planetttttt', tempPlanet)
      }
     // setPlanets([...tempPlanet])
    })
   
    ship.cargo = [...newCargo];
    ship.cargoCapacity -= 1;
    console.log('scccccc', ship.cargo);
    console.log('sh', ship)
    setShip({...ship}, [...ship.cargo, newCargo])

  }



  const handleAdventureClose = () => {
    setAdventureEvent('');
  }

console.log('cp', currentPlanet)
    return (
      <div className="main-background">
        <div 
        onClick={handleAdventureClose}
        className={`adventure-wrapper ${adventureEvent}`}>
          {adventures.map((adventure) => {
            if(adventure.currentAdventure) {
              return (
                <div>
                <h1>{adventure.title}</h1>
                <p></p>
                <h2>{adventure.title} {adventure.text}</h2>
                <hr></hr>
                <h3>You lost {adventure.losts} credits!</h3>
                </div>
              ) 
            } else {
              return
            }
            <div>This time nothing happened</div>
          })}
        </div>
      <div className="main-screen-wrapper">
        <div className="side-panel left-panel">
          <LeftPanel 
           {...ship}
           handleSell={handleSell}
          />
        </div>
        <div className="main-panel">
          <MainPanel 
            planets={planets}
            planetGo={handlePlanetGo}
            planetClick={handlePlanetClick}
            traveling={traveling}
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