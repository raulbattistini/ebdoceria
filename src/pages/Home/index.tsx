import React from "react";
import { Navbar } from "../../components/navbar";
import defaultImg from "../../assets/images/default.jpg";
import { Grid } from "@mui/material";
import { Footer } from "../../components/footer";
import { Newsletter } from "../../components/newsletter";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <span className="font-inter font-thin text-3xl bg-[#A0A934] pl-24 pt-2 pb-2 top-10 text-white flex">
        Promoções
      </span>
      <img
        src={defaultImg}
        alt="Place image..."
        className="flex w-full h-128"
      />
      <div className=" bg-[#A0A934]">
        <span className="font-inter text-3xl font-thin pl-24 pt-2 pb-2 top-10 text-white flex">
          Nossos produtos
        </span>
        <Grid container>
          <Grid item xs={6}>
            <span className="font-inter text-lg font-thin pl-24 pt-2 pb-2 top-10 text-white flex">
              {" "}
              Bolos{" "}
            </span>
            </Grid>
          <Grid item xs={6}>
            <span className="font-inter text-lg pl-24 font-thin pt-2 pb-2 top-10 text-white flex">
              {" "}
              Geleias{" "}
            </span>
          </Grid>
        </Grid>
        <Grid container className="divide-x">
          <Grid item xs={6}>
            <img src={defaultImg} alt="Place image..." />
          </Grid>
          <Grid item xs={6}>
            <img src={defaultImg} alt="Place image..." />
          </Grid>
        </Grid>
        <span className="font-inter text-2xl text-center text-white flex flex-end self-center justify-center pt-2 pb-2">
          {" "}
        <Link to="/cardapio" className="no-underline	">   Ver mais...{" "}</Link>
        </span>
      </div>
      <div>
        <article className="bg-[#FCF6E8] text-[#211E1E] font-inter">
          <h2 className="font-inter font-thin text-3xl pl-24 pt-2 pb-2 top-10 flex">
            FAQ
          </h2>
          <div className="bg-[#FCF6E8] text-[#211E1E] pl-28">
            <h3 className="text-[#211E1E] text-lg flex font-inter">
              Como fazer pedidos no site?
            </h3>
            <p className="font-inter text-[#211e1e] font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae, deleniti praesentium!{" "}
            </p>
            <h3 className="font-inter text-[#211e1e] text-lg ">
              Como ativar minha promoção?
            </h3>
            <p className="font-inter text-[#211e1e] font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              debitis atque laborum recusandae iure rerum harum?{" "}
            </p>
            <h3 className="font-inter text-[#211e1e] text-lg ">
              Quem está por trás do site?
            </h3>
            <p className="font-inter text-[#211e1e] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              adipisci tenetur nulla, sunt iure molestias quo pariatur explicabo
              earum animi quia laudantium repellendus, consectetur nihil!
            </p>
          </div>
        </article>
        <span className="font-inter font-regular text-2xl text-center flex flex-end self-center justify-center pt-2 pb-2 bg-[#FCF6E8] text-[#211E1E]  divide-y">
          {" "}
          <Link to="/FAQ" className="no-underline	">   Ver mais...{" "}</Link>
        </span>
      </div>
      <div className="flex flex-col bg-[#FCF6E8] text-[#211E1E] font-inter pb-3">
        <h2 className="font-inter font-thin text-3xl pl-24 pt-2 pb-2 top-10 flex">
          Onde atendemos
        </h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233625.61943741105!2d-46.67183837095775!3d-23.804360364358246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce3fc6927dd0c3%3A0xcdcd0d550f9656cf!2sS%C3%A3o%20Bernardo%20do%20Campo%2C%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1661869850936!5m2!1sen!2sbr" width="900" height={400} className="border-0 max-w-fit justify-center self-center rounded-lg pt-5" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer/>
      <Newsletter/>
    </div>
  );
};
