import { useAuth0 } from "@auth0/auth0-react";
import "./landing.css";
const Landing = () => {
  const { user } = useAuth0()
  return (
    <div className="landing_container">
    <div className="landing_box">
      Welcome {user?.name}🎉🎉
    </div>
    </div>
  );
}

export default Landing;
