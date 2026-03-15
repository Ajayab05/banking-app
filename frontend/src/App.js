import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {

 const [accounts,setAccounts] = useState([]);
 const [name,setName] = useState("");
 const [balance,setBalance] = useState("");

 const loadAccounts = async () => {
  const res = await axios.get("http://localhost:8080/accounts");
  setAccounts(res.data);
 }

 const createAccount = async () => {
  await axios.post("http://localhost:8080/accounts",{
   name:name,
   balance:balance
  });
  loadAccounts();
 }

 useEffect(()=>{
  loadAccounts();
 },[])

 return (
  <div style={{padding:"40px"}}>
   <h1>Banking App</h1>

   <input
    placeholder="Name"
    onChange={(e)=>setName(e.target.value)}
   />

   <input
    placeholder="Balance"
    onChange={(e)=>setBalance(e.target.value)}
   />

   <button onClick={createAccount}>
    Create Account
   </button>

   <h2>Accounts</h2>

   {accounts.map(a=>(
    <div key={a.id}>
     {a.name} - ₹{a.balance}
    </div>
   ))}

  </div>
 )

}

export default App;