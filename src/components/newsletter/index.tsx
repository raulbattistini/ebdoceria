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
import { useNavigate } from "react-router-dom";

export const Newsletter = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (email: string) => {
    console.log(email);
    navigate("/thank-you");
  };
  return (
    <div className=" bg-[#fefae0] h-full pb-10">
      <span className=" text-3xl font-light pl-24 pt-2 pb-2 top-10 text-[#211e1e] flex">
        Inscreva-se na nossa newsletter!
      </span>
      <p className=" text-[#211e1e] font-extralight pl-5 pr-3 text-center">
        Falamos de culinária, boas práticas na cozinha, sugerimos receitas e
        dicas e muito mais. E tudo com base em 30 anos de experiência! 
      </p>
      <div>
        <button
          className="bg-[#BD722F] font-thin text-2xl flex flex-end p-3 m-auto mt-5 rounded-md text-white hover:bg-[#dda15e] duration-300"
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
              Não enviamos spam. Não divulgamos seus dados. Você pode se desinscrever a qualquer momento.
            </DialogContentText>
            <Formik
              initialValues={{
                emailNotification: "",
              }}
              onSubmit={(values) => {
                handleSubmit(values.emailNotification);
              }}
              validationSchema={newsletterSchema}
            >
              {({ values, errors, touched, handleChange }) => {
                return (
                  <Form>
                    <label
                      htmlFor="Email"
                      className="flex flex-col text-center text-[#211e1e] "
                    >
                      Digite seu email
                    </label>
                    <input
                      type="email"
                      placeholder="myemail@example.com"
                      value={values.emailNotification}
                      name="emailNotification"
                      onChange={handleChange}
                      className="w-96 outline-0 leading-3 pl-2 pt-2 pb-2 mt-2 ml-20 bg-[#fBfBfB] border-2    border-[#81B6E2] rounded-md"
                    />
                    <span className="text-red-400 mt-2 text-center flex flex-col ">
                      {!!touched.emailNotification && errors.emailNotification}
                      {touched.emailNotification && !!errors.emailNotification}
                    </span>
                    <DialogActions>
                      <Button autoFocus onClick={handleClose}>
                        Cancelar
                      </Button>
                      <Button type="submit" autoFocus>
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
    </div>
  );
};
