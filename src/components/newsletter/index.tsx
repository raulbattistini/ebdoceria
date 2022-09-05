import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Formik, Form } from "formik";
import { newsletterSchema } from "../../helpers/schemas";

export const Newsletter = () => {
  const [emailNotification, setEmailNotification] = useState("");
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (email: string) =>{
    console.log(email);
  }
  return (
    <div className="bg-[#A0A934]">
      <span className="font-inter text-3xl font-thin pl-24 pt-2 pb-2 top-10 text-white flex">
        Inscreva-se na nossa newsletter!
      </span>
      <p className="font-inter text-white font-thin pl-3">
        Falamos de culinária, boas práticas na cozinha, sugerimos receitas e
        dicas e muito mais! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Accusamus hic fugit, omnis veritatis id dolorum similique
        obcaecati delectus minus quasi ab iusto aliquid totam facere ipsam harum
        sequi, ipsum maxime.
      </p>
      <div>
        <button
          className="bg-[#15CC74] font-inter font-thin text-2xl text-center flex flex-end self-center justify-center p-3 m-auto mt-3 rounded-md text-white"
          onClick={handleClickOpen}
        >
          Quero me inscrever!
        </button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Inscreva-se na nossa newsletter!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Falamos de culinária, boas práticas na cozinha, sugerimos receitas
              e dicas e muito mais! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusamus hic fugit, omnis veritatis id dolorum
              similique obcaecati delectus minus quasi ab iusto aliquid totam
              facere ipsam harum sequi, ipsum maxime.
            </DialogContentText>
            <Formik
              initialValues={{
                emailNotification: "",
              }}
              onSubmit={(values)=>{handleSubmit(values.emailNotification)}}
              validationSchema={newsletterSchema}
            >
              {({ values, errors, touched, handleChange }) => {
                return (
                  <Form>
                    <label htmlFor="Email" className="flex flex-col text-center text-[#211e1e] font-inter">Digite seu email</label>
                    <input
                      type="email"
                      placeholder="myemail@example.com"
                      value={values.emailNotification}
                      name='emailNotification'
                      onChange={handleChange}
                      className="w-96 outline-0 leading-3 pl-2 pt-2 pb-2 mt-2 ml-20 bg-[#fBfBfB] border-2    border-[#81B6E2] rounded-md"
                    />
                    <span className="text-red-400 mt-2 text-center flex flex-col font-inter">
                        {!!touched.emailNotification && errors.emailNotification}
                        {touched.emailNotification && !!errors.emailNotification}
                    </span>
                    <DialogActions>
                      <Button autoFocus onClick={handleClose}>
                        Cancelar
                      </Button>
                      <Button type='submit' autoFocus>
                        Enviar
                      </Button>
                    </DialogActions>
                  </Form>
                );
              }}
            </Formik>
          </DialogContent>
        </Dialog>
      </div>
      <div className="bg-[#A0A934] mt-3">
      ⠀
      </div>
    </div>
  );
};
