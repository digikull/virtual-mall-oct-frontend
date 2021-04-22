import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Registration from './Registration.css'

function Forgotpass(props) {
  const [enteremail, setEnteremail] = useState("");

  const handleClick = () => {
    if (enteremail === null) {
      alert("please enter the email");
    }

    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/UserAPI/User_email/",
      data: { email: enteremail },
    })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };

  return (
    <div
      class="form-gap"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        paddingLeft: "490px",
        width: "100%",
      }}
    >
      <div class="container  ">
        <div class="row ">
          <div
            class="col-md-4 col-md-offset-4 border p-3 shadow-lg"
            style={{ background: "white" }}
          >
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3>
                    <i class="fa fa-lock fa-4x"></i>
                  </h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
                    <form id="register-form">
                      <div class="form-group ">
                        <div class="input-group ">
                          <span class="input-group-addon">
                            <i class="glyphicon glyphicon-envelope color-blue"></i>
                          </span>
                          <input
                            type="email"
                            id="username"
                            placeholder="example@gmail.com"
                            value={enteremail}
                            onChange={(e) => {
                              setEnteremail(e.target.value);
                            }}
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <Link to="Msg">
                          <button
                            class="btn btn-lg btn-primary btn-block"
                            type="submit"
                            data-toggle="modal"
                            data-target="#myModal"
                            onClick={() => {
                              handleClick();
                            }}
                          >
                            Send Email
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forgotpass;
