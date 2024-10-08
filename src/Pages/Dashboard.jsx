import { useLocation} from "@solidjs/router";
import Navbar from "../Components/Navbar";
import Lokacija from "../Components/Lokacija";
import Nagib from "../Components/Nagib";

const Homepage = () => {
  const location = useLocation();
  const name = location.state?.name || "korisniku";
  return (
      <>
      <Navbar name={name} />
      <div class="flex-container">
        <Lokacija />
        <Nagib />
      </div>
      </>
  );
};

export default Homepage;
