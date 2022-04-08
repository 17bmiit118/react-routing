import { useNavigate } from "react-router-dom";
const Dashboard = () => {

    let navigate = useNavigate();

    let data = {
        'msg':'User Not Logged In..'
      }
    return (
        <>
        <div>Dashboard Page</div>
        <button onClick={()=>{navigate("/login", {state: data})}}>Logout</button>
        </>
    )
  }
  
  export default Dashboard;