import LeftPanel from "../LeftPanel/LeftPanel";
import MainPanel from "../MainPanel/MainPanel";
import RightPanel from "../RightPanel/RightPanel";
import { useState } from "react";

export default function MainScreen() {

  const [ship, setShip] = useState({
    shipName: 'Apollo',
    cannons: 4,
    fuel: 20,
    cargoCapasity: 10,
    type: 'Small frigate',
    cargo: [
      {
        id: 1,
        cargoName: 'onion',
        quantity: 5
      },
      {
        id: 2,
        cargoName: 'carrot',
        quantity: 3
      }
    ]
  })



    return (
      <div className="main-screen-wrapper">
        <div className="side-panel left-panel">
          <LeftPanel 
            name={ship.shipName}
            type={ship.type}
            cannons={ship.cannons}
            fuel={ship.fuel}
            cargoCapasity={ship.cargoCapasity}
            cargo={ship.cargo}
          />
        </div>
        <div className="main-panel">
          <MainPanel />
        </div>
        <div className="side-panel right-panel">
          <RightPanel />
        </div>
      </div>
    );
  }