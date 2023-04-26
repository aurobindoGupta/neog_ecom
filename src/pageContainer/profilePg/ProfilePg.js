import NavBar from "../../Components/navbar/NavBar";
import { useLoginContext } from "../../context/loginProvider";
import "./profilePg.css";

function ProfilePg() {
  const [isLoggedIn, setIsLoggedIn] = useLoginContext();

  return (
    <div className="profilePg">
      {/* <!-- ................BASE CONTAINER............. --> */}
      <div className="baseContainer">
        {/* <!-- ................NAV BAR............. --> */}

        <NavBar searchBar={true} login={isLoggedIn ? true : false} />
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}

        <div className="page-content">
          <div>
            <h1> MONKEY</h1>
          </div>
          {/* <!-- ................PAGE CONTENT ............................... --> */}
          {/* <!-- ................FOOTER ............................... --> */}

          {/* <!-- ................FOOTER ............................... --> */}
        </div>
        {/* <!-- ................BASE CONTAINER............. --> */}
      </div>
    </div>
  );
}
export default ProfilePg;
