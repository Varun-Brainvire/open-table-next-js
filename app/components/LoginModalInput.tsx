import React, { useState } from "react";

interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

const LoginModalInput = ({isSignIn }: Props) => {

  const [input, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const [errors, setErrors] = useState<Object>({});

  const renderContent = (signIn: string, signUp: string) => {
    return isSignIn ? signIn : signUp;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const validationCheck = () => {
    let isValid = true
    if(input.firstName == "") {
        errors.firstname = "First Name is empty"
        isValid = false
    }
    if(input.lastName === "") {
        errors.lastname = "Last Name is empty"
        isValid = false
    }
    if((input.email === "") || (!/\S+@\S+\.\S+/.test(input.email))) {
        debugger
        errors.email = "Email is not valid"
        isValid = false
    }
    if(input.phone == "") { 
        errors.phone = "Phone is empty"
        isValid = false
    }
    if(input.city == "") {
        errors.city = "City is empty"
        isValid = false
    }
    if(input.password == "") {
        errors.password = "Password is empty"
        isValid = false
    }

    return isValid

    // console.log(input.firstName)
  }
  
  const submitHandler = () => {
    // alert("clicked")
    // console.log(validationCheck())
    if(validationCheck()) {
        console.log("form Valid")
    }
    else {
        console.log("Form Invalid")
    }
  }

  console.log(input)
  
  return (
    <div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            placeholder="First Name"
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            value={input.firstName}
            onChange={handleChange}
            name="firstName"
          />
          <input
            placeholder="Last Name"
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            value={input.lastName}
            onChange={handleChange}
            name="lastName"
          />
        </div>
      )}

      <div className="my-3 flex justify-between text-sm">
        <input
          placeholder="Email"
          type="email"
          className="border rounded p-2 py-3 w-full"
          value={input.email}
          onChange={handleChange}
          name="email"
        />
      </div>

      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            placeholder="Phone"
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            value={input.phone}
            onChange={handleChange}
            name="phone"
          />
          <input
            placeholder="City"
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            value={input.city}
            onChange={handleChange}
            name="city"
          />
        </div>
      )}

      <div className="my-3 flex justify-between text-sm">
        <input
          placeholder="Password"
          type="password"
          className="border rounded p-2 py-3 w-full"
          value={input.password}
          onChange={handleChange}
          name="password"
        />
      </div>
      <button onClick={submitHandler} className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400">
                {renderContent("Sign In","Create Account")}
              </button>
    </div>
  );
};

export default LoginModalInput;
