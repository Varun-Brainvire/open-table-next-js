"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import LoginModalInput from "./LoginModalInput";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function LoginModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   setInputs({
  //     ...input,[e.target.name]:e.target.value
  //   })
  // } 

  // const [input,setInputs] = useState({
  //   firstName:"",
  //   lastName:"",
  //   email:"",
  //   phone:"",
  //   city:"",
  //   password:""
  // })

    // console.log(input,"Input in login modal")

  const renderContent = (signIn: string, signUp: string) => {
    return isSignIn ? signIn : signUp;
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${renderContent(
          "bg-blue-400 text-white",
          ""
        )}  border p-1 px-4 rounded mr-3`}
      >
        {/* {isSignIn ? 'Sign In' : "Sign Out"} */}
        {renderContent("Sign In", "Sign Up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2 h-[400px]">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">{renderContent("Sign In", "Sign Up")}</p>
            </div>
            <div className="m-auto">
              <h2 className="text-2xl font-light text-center">
                {renderContent("Login To Your Account", "Create Your Account")}
              </h2>
              <LoginModalInput isSignIn={isSignIn} />
              {/* <button className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400">
                {renderContent("Sign In","Create Account")}
              </button> */}
              
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
