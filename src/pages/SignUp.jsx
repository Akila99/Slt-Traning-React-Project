import React from "react";
import "../../public/style.css";
import Image from "../../components/Image";
import SignUpImage from "../assets/signup image.png";
import Label from "../../components/Label";

function SignUp() {
  return (
    <div className="sign-up-container">
      <div className="first-Rectangle">
        <div className="second-Rectangle">
          <Image
            src={SignUpImage}
            alt=""
            height="300px"
            width="300px"
          />

          <div className="form-container">
            <h1 className="">Register</h1>
            <form className="flex-container" action="signUp.html" method="post">
              <div className="label-container">
                <Label for={"userId"} label={"User ID"} />
                {/* <label for="userId">User ID</label> */}
                <Label for={"name"} label={"Name"} />
                {/* <label for="name">Name</label> */}
                <Label for={"password"} label={"Password"} />
                {/* <label for="password">Password</label> */}
                <Label for={"Confrim password"} label={"Confrim password"} />
                <label for="Confrim password">Confrim password</label>
              </div>
              <div className="line-separator"></div>

              <div className="input-container">
                <input type="text" name="userid" id="textBox" required />
                <input type="text" name="name" id="textBox" required />
                <input type="text" name="password" id="textBox" required />
                <input
                  type="text"
                  name="Confrim Password"
                  id="textBox"
                  required
                />
              </div>
            </form>
            <button id="button-reg" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;