import React, { useState } from "react";
import data from "../data/data.json";

const Login = () => { //arrow function
    const [Login, setLogin] = useState('') //array destructuring
    const [Password, setPassword] = useState('')

    // console.log("data =", data);

    function FormNull() {
      return Login.length > 0 && Password.length > 0;
    }

    function GetVar() {
      if ((Login === data.user1.login && Password === data.user1.password) || (Login === data.user2.login && Password === data.user2.password)) 
      {
        console.log("gagner"); 
        <div>
          {
          <h1>e ssusi conneceter</h1>
          }
        </div>
        return true
      }
      else
        return false
    }
    function handleChangePassword (evt) {
      setPassword(evt.target.value)
      // console.log(evt)//consolelog
    }
    function handleChangeLogin (evt) {
     setLogin(evt.target.value)
    //  console.log(evt)//consolelog
   } 
      return ( 
        <div>
        <h1>Sign in</h1>
        <label>Login</label>
        <input type="text" name="login" onChange={handleChangeLogin} />

       {/* { true && <div>je suis vrai</div> }*/}
        <label>Password</label>
        <input type="password"  onChange={handleChangePassword}/>
        <input type="submit" value="Submit" disabled={!FormNull()} onClick= { GetVar }/> 
        {/* { GetVar && <div>je suis vrai</div> } */}
        </div>
      //Il me reste l'affichage conditionnel pour afficher un message si on est log avec le onclick mais je n'ai pas reussi
      )
      
  }
  
  export default Login //eport vers toute l'app
  


