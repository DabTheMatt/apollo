import { Link } from "react-router-dom";

export default function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
        <div>
            <Link to="/apollo/play">PLAY</Link>
        </div>
       
        <div>v0.1-apollo-1</div>
      </div>
    );
  }