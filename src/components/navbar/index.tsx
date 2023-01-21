import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export const Navbar = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <div className="bg-[#662606] text-white flex flex-col leading-12 h-24 justify-center">
            <span className="pl-2 flex text-left font-thin text-3xl  laptop:text-lg tablet:text-md phone:text-md pocket:text-sm">
              <NavLink to="/" className="no-underline">
                {" "}
                EB Doceria
              </NavLink>
            </span>
            <span className="m-0 text-2xl pl-2 flex text-left">
              <NavLink
                to="/"
                className="no-underline m-0 font-brush text-2xl laptop:text-lg tablet:text-md phone:text-md pocket:text-sm tracking-widest"
              >
                {" "}
                Gourmet
              </NavLink>
            </span>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="w-1/2 absolute flex bg-[#662606] text-white leading-14 h-24">
            <Grid
              container
              className="text-xl laptop:text-md tablet:text-md phone:text-sm pocket:text-xs self-center items-center"
            >
              <Grid item xs={4}>
                <span className="hover:text-[#dda15e] duration-300 pocket:hidden">
                  <NavLink to="/FAQ" className="no-underline ">
                    {" "}
                    FAQ{" "}
                  </NavLink>
                </span>
              </Grid>
              <Grid item xs={4}>
                <span className="pocket:hidden">
                  <NavLink
                    to="/cardapio"
                    className="hover:text-[#dda15e] duration-300 "
                  >
                    {" "}
                    Cardápio{" "}
                  </NavLink>
                </span>
              </Grid>
              <Grid item xs={4}>
                <div className="self-center items-center justify-end flex pocket:justify-items-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="top-0 right-0 w-24 h-24 tablet:w-20 tablet:h-20 phone:w-20 phone:h-20 pocket:w-20 pocket:h-20 rounded-full object-cover p-3 pocket:object-fill pocket:absolute pocket:mt-2"
                /></div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
