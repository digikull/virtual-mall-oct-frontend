
import React, { useState } from "react";
import axios from "axios";
import Registration from './Registration.css'

function Resetpassword(props) {
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const handleClick = (event) => {
   
    if (password !== confirmpassword) {
      alert("Passwords don't match");
  } 
     if(!password&&!confirmpassword ){
      alert("please enter the password.!")
    }else{
      alert("Password change successfully");
    }

    axios({
      method: "PUT",
      url: `http://127.0.0.1:8000/UserAPI/User_resetpassword/${props.match.params.id}`,
      data: { password: password, password: confirmpassword },
      
     
    })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
      setPassword("")
      setconfirmPassword("")
      
  };

  return (
    <div class="col-md-4 col-md-offset-4 border p-3 shadow-lg"
    style={{
      fontFamily:"sans-serif",
      fontWeight:"normal",
      fontStyle:"normal",
      textAlign: "center",
      position: "absolute",
      marginLeft: "500px",
      marginTop: "180px",
      width:"auto",
      height:"auto"
      
     
    }}>
      <h2>Set a New Password</h2>
      <p>Please Enter Your New Password</p>
      <label htmlFor="password"></label>
      <br />
      <input
        class="form-control"
        type="password"
        id="password"
        value={password}
        placeholder="password"
        style={{marginTop:"-10px",marginLeft:"20px",width:"90%"}}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      /><br/>

      <label htmlFor="password"></label>
      <br />
      <input
        class="form-control"
        type="password"
        id="confirmpassword"
        value={confirmpassword}
        placeholder="Confirm password"
        style={{marginTop:"-30px",marginLeft:"20px", width:"90%"}}
        
        onChange={(e) => {
          setconfirmPassword(e.target.value);
        }}
      /><br/>

      <button
        className="btn btn-primary"
        style={{
          margin: "auto",
          margin: "20px",
          marginTop:"-10px",
          textAlign:"center",
          marginLeft: "20px",
          width: "300px",
        }}
        type="submit"
        onClick={() => {
          handleClick();
        }}
      >
        Reset Password
      </button>
    </div>

  
  );
}
export default Resetpassword;
