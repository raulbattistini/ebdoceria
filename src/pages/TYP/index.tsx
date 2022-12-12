import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import sucess from "../../assets/images/icons/check.svg";
import home from "../../assets/images/icons/home.png";

export const TYP = () => {
  return (
    <>
      <Navbar />
      
      <div className="bg-white flex flex-col content-center mt-10 justify-center items-center">
        <img
          src={sucess}
          alt="Check verde de sucesso"
          className="flex  self-center justify-self-auto object-cover relative flex-row"
        />
        <h1 className="text-black font-inter text-4xl flex flex-row">
          Obrigado por se cadastrar!
        </h1>
        <span className="font-inter font-thin text-lg mt-5">
          {" "}
          Você receberá um email de confirmação em breve. Certifique de se
          favoritá-lo para receber as novidades.
        </span>
        <div className="float-left relative flex flex-start">
          <Link to="/">
            <span className="float-left relative flex flex-start mt-8 font-inter font-light text-2xl mr-5 pt-10 pb-4">
              {" "}
              Retornar à home
            </span>
            <img
              src={home}
              alt="Imagem de uma casa - homepage"
              className="w-12 h-12 ml-6 mt-16 flex"
            />{" "}
          </Link>
        </div>
        
      </div>
      <Footer />
      <div className="bg-[#A0A934] pb-10"></div>
    </>
  );
};
