import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-hero">
        <h1 className="landing-title">
          Inventory<br />Management<br />System
        </h1>

        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
  );
}

export default LandingPage;
