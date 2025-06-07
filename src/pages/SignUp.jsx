import React from "react";
import "../../public/style.css";
import Image from "../../components/Image";
import SignUpImage from "../assets/signup image.png";
import Label from "../../components/Label";
import Input from "../../components/Login-input-text";

function SignUp() {
  return (
    <div className="sign-up-container">
      <div className="first-Rectangle">
        <div className="second-Rectangle">
          <Image src={SignUpImage} alt="" height="300px" width="300px" />

          <div className="form-container">
            <h1 className="">Register</h1>
            <form className="flex-container" action="signUp.html" method="post">
              <div className="label-container">
                <Label for={"userId"} label={"User ID"} />

                <Label for={"name"} label={"Name"} />

                <Label for={"password"} label={"Password"} />

                <Label for={"Confrim password"} label={"Confrim password"} />
              </div>
              <div className="line-separator"></div>

              <div className="input-container">
                <Input type="text" name="userid" id="textBox" required />
                <Input type="text" name="name" id="textBox" required />
                <Input type="text" name="password" id="textBox" required />
                <Input
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
