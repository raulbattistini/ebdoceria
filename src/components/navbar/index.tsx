import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo-nobg.png'
import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <div className="bg-[#737927] text-white flex flex-col leading-12 pt-3 h-24">
            <span className="pl-24 font-inter font-thin text-3xl">
            <Link to="/" className="no-underline font-inter"> EB Doceria</Link>
            </span>
            <span className="pl-24 m-0 font-marck text-2xl"><Link to="/" className="no-underline m-0 font-marck text-2xl">  Gourmet</Link></span>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="w-1/2 absolute flex bg-[#737927] text-white leading-14 pt-4 h-24">
            <Grid container>
            </Grid>
            <Grid item xs={4}>
              <span className=" font-inter"><Link to="/FAQ" className="no-underline font-inter"> FAQ </Link></span>
            </Grid>
            <Grid item xs={4}>
              <span><Link to="/cardapio" className=" font-inter"> Cardápio </Link></span>
            </Grid>
            <Grid item xs={4}>
            <img src={logo} alt="Logo" className="leading-tight flex-start top-0 right-0 absolute w-24 h-24" />
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
