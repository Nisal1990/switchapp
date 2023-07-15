import { Link } from "react-router-dom";

const Welcome = () => {
  const logo = require("../assets/images/logo.png")
    return(
    <div className="container mx-auto">
      <div className="w-full h-screen flex justify-center align-middle flex-col gap-5 text-center">
        <h1 className="text-center text-orange-600 text-3xl font-bold">Welcome</h1>
          <img className="w-1/3 mx-auto" src={logo} />
          <Link to="/login"><button className="bg-amber-600 hover:bg-orange-600 rounded-full w-40 text-white py-3 mx-auto text-xl font-bold">Login</button></Link>
          
      </div>
      
    </div>
    )
}

export default Welcome;