import { useState } from "react";
import GithubUser from "./GithubUser";
const FindUser = () => {
    const [user,setuser]=useState("");
    return ( <>
    <div className="container-fluid text-center " style={{width:""}}>
     <h2 className="mt-5">Find User</h2>
     <input type="text" className="mt-3" onChange={(event)=>{setuser(event.target.value)}} placeholder="Enter Username" style={{width:'65vw',height:"6vh",border:"3px solid black",borderRadius:'6px'}}/>
   {user ? <GithubUser username={user}/> : <h2 className="mt-4">Please Initiate a Search!!!</h2>} 
    </div>
    </> );
}
 
export default FindUser;