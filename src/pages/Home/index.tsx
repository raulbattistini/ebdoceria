import * as cheerio from "cheerio";
import { Grid } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [bannerImg, setBannerImg] = useState("");
  const [boloSectionImg, setBoloSectionImg] = useState("");
  const [jamSectionImg, setJamSectionImg] = useState("");
  useMemo(() => {
    const bannerImgPath = import.meta.env.VITE_BANNER_STATIC;
    const boloSectionImgPath = import.meta.env.VITE_BOLO_CHOCO_MORANGO_STATIC;
    const jamSectionImgPath = import.meta.env
      .VITE_GELEIA_MORANGO_SICILIANO_STATIC;
    setBannerImg(bannerImgPath);
    setBoloSectionImg(boloSectionImgPath);
    setJamSectionImg(jamSectionImgPath);
  }, []);
  return (
    <div className="">
      <span className="ultrawide:text-3xl desktop:text-2xl laptop:text-xl tablet:text-lg font-thin pocket:text-md bg-[#BD722F] justify-center pt-2 pb-2 top-10 text-white flex">
        Seja bem-vindo!
      </span>
      <img
        src={bannerImg}
        alt="Nosso banner com número de telefone e instagram"
        className="w-full object-contain"
      />
      <hr />
      <div className=" bg-[#E4C399]">
        <span className="ultrawide:text-3xl desktop:text-2xl laptop:text-xl tablet:text-lg font-thin justify-center pt-2 pb-2 top-10 text-[#211e1e] flex pocket:text-md">
          Nossos produtos
        </span>
        <Grid container className="bg-[#BD722F]">
          <Grid item xs={6}>
            <span className=" text-lg font-thin justify-center pt-2 pb-2 top-10 text-white flex">
              {" "}
              Bolos{" "}
            </span>
          </Grid>
          <Grid item xs={6}>
            <span className=" text-lg justify-center font-thin pt-2 pb-2 top-10 text-white flex">
              {" "}
              Geleias{" "}
            </span>
          </Grid>
        </Grid>
        <hr />
        <Grid container className="divide-x bg-[#BD722F]">
          <Grid item xs={6}>
            <div className="flex justify-center">
              <img
                src={boloSectionImg}
                alt="Place image..."
                className="w-1/2 -rotate-45"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="flex justify-center">
              <img
                src={jamSectionImg}
                alt="Place image..."
                className="w-1/2 -rotate-3"
              />
            </div>
          </Grid>
        </Grid>
        <hr />
        <span className="font-extralight text-2xl text-center text-[#211e1e] flex flex-end self-center justify-center pt-2 pb-2 bg-[#E4C399]">
          {" "}
          <Link to="/cardapio" className="no-underline hover:underline">
            {" "}
            Ver mais...{" "}
          </Link>
        </span>
      </div>
      <div>
        <section className="bg-[#fefae0] text-[#211E1E] px-2">
          <h2 className=" font-thin text-3xl justify-center pt-2 pb-2 top-10 flex">
            FAQ
          </h2>
          <div className="bg-[#fefae0] text-[#211E1E] max-w-lg">
            <h3 className="text-[#211E1E] text-lg flex ">
              Como fazer pedidos no site?
            </h3>

            <h3 className=" text-[#211e1e] text-lg ">
              Posso escolher outros sabores?
            </h3>
            <h3 className=" text-[#211e1e] text-lg ">
              Quem está por trás do site?
            </h3>
          </div>
          <span className="justify-center text-[#211e1e] font-light mt-5">
            {" "}
            E mais respostas!{" "}
          </span>
        </section>
        <span className=" font-regular text-2xl text-center flex flex-end self-center justify-center pt-2 pb-2 bg-[#fefae0] text-[#211E1E]  divide-y">
          {" "}
          <Link to="/FAQ" className="no-underline	hover:underline">
            {" "}
            Ver mais...{" "}
          </Link>
        </span>
      </div>
      <div className="flex flex-col bg-[#fefae0] text-[#211E1E]  pb-3">
        <h2 className=" font-thin text-3xl justify-center pt-2 pb-2 top-10 flex">
          Onde atendemos
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233625.61943741105!2d-46.67183837095775!3d-23.804360364358246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce3fc6927dd0c3%3A0xcdcd0d550f9656cf!2sS%C3%A3o%20Bernardo%20do%20Campo%2C%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1661869850936!5m2!1sen!2sbr"
          // width="900"
          height={400}
          className="border-0 rounded-lg pt-5"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
