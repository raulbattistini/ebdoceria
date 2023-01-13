import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <div className="bg-[#662606] text-white flex flex-col leading-12 pt-3 h-24">
            <span className="pl-24  font-thin text-3xl">
              <Link to="/" className="no-underline ">
                {" "}
                EB Doceria
              </Link>
            </span>
            <span className="pl-24 m-0 text-2xl">
              <Link
                to="/"
                className="no-underline m-0 font-brush text-2xl tracking-widest"
              >
                {" "}
                Gourmet
              </Link>
            </span>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="w-1/2 absolute flex bg-[#662606] text-white leading-14 pt-4 h-24">
            <Grid container></Grid>
            <Grid item xs={4}>
              <span className=" ">
                <Link to="/FAQ" className="no-underline ">
                  {" "}
                  FAQ{" "}
                </Link>
              </span>
            </Grid>
            <Grid item xs={4}>
              <span>
                <Link to="/cardapio" className=" ">
                  {" "}
                  Cardápio{" "}
                </Link>
              </span>
            </Grid>
            <Grid item xs={4}>
              <img
                src={logo}
                alt="Logo"
                className="leading-tight flex-start top-0 right-0 absolute w-24 h-24 rounded-full object-cover p-3"
              />
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
