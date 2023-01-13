import { Grid, ListItem } from "@mui/material";
import React from "react";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Newsletter } from "../../components/newsletter";
import defaultImg from "../../assets/images/default.jpg";
import { generatePath, Link, resolvePath } from "react-router-dom";

export const Cardapio = () => {
  type TProduct = {
    id: number;
    name: string;
    price: number;
    link: string;
  };

  const nameToLink = (name: string) => {
    const trimmedName = name.toLowerCase();
    const link = trimmedName
      .replace(/\s/g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return link;
  };

  const cakes = [
    {
      id: 1,
      name: "Bolo de chocolate com morango",
      price: 19.9,
      link: import.meta.env.VITE_BOLO_CHOCO_MORANGO_STATIC,
    },
    {
      id: 2,
      name: "Bolo de chocolate",
      price: 29.9,
      link: import.meta.env.VITE_BOLO_CHOCOLATE_STATIC,
    },
    {
      id: 3,
      name: "Bolo de maracujá",
      price: 15.9,
      link: import.meta.env.VITE_BOLO_MARACUJA_STATIC,
    },
    {
      id: 2,
      name: "Bolo de coco",
      price: 29.9,
      link: import.meta.env.VITE_BOLO_COCO_STATIC,
    },
  ];

  const jams = [
    {
      id: 4,
      name: "Geleia de morango com siciliano",
      price: 19.9,
      link: import.meta.env.VITE_GELEIA_MORANGO_SICILIANO_STATIC,
    },
    {
      id: 5,
      name: "Geleia de abacaxi com pimenta",
      price: 29.9,
      link: import.meta.env.VITE_GELEIA_ABACAXI_PIMENTA_STATIC,
    },
    {
      id: 6,
      name: "Geleia de maçã verde com alecrim",
      price: 15.9,
      link: import.meta.env.VITE_GELEIA_MACA_ALECRIM_STATIC,
    },
    {
      id: 7,
      name: "Geleia de vinho",
      price: 17.9,
      link: import.meta.env.VITE_GELEIA_VINHO_STATIC,
    },
  ];

  return (
    <div className="bg-[#E4C399] ">
      <Navbar />
      <span className=" font-thin text-3xl pl-24 pt-2 pb-2 top-10 text-[#211e1e] flex">
        Produtos
      </span>
      <Grid container>
        <Grid item xs={6}>
          <span className=" text-2xl font-thin pl-24 pt-2 pb-2 top-10 text-[#211e1e] flex">
            {" "}
            Bolos{" "}
          </span>
        </Grid>
        <Grid item xs={6}>
          <span className=" text-2xl pl-24 font-thin pt-2 pb-2 top-10 text-[#211e1e] flex">
            {" "}
            Geleias{" "}
          </span>
        </Grid>
      </Grid>
      <hr />
      <Grid container className="divide-x">
        <Grid item xs={6}>
          <div className="flex justify-center">
            <img
              src={import.meta.env.VITE_BOLO_CHOCO_MORANGO_STATIC}
              alt="Place image..."
              className="w-1/2 -rotate-45 mr-10"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          {" "}
          <div className="flex justify-center">
            <img
              src={import.meta.env.VITE_GELEIA_MORANGO_SICILIANO_STATIC}
              alt="Place image..."
              className="w-1/2 -rotate-3 mr-5"
            />
          </div>
        </Grid>
      </Grid>
      <hr />
      <Grid container>
        {cakes!.map((cake: TProduct, key: number) => (
          <>
            <Grid item xs={6} md={6} lg={6}>
              <ul className="text-white text-lg flex flex-col text-center">
                <Link
                  to={resolvePath(
                    generatePath("/bolos/:link", {
                      link: nameToLink(cake.name),
                    }),
                    "../../../"
                  )}
                  className=" font-light flex flex-col"
                  target="_parent"
                  key={cake.id}
                >
                  {" "}
                  <li className=" flex flex-col font-light pt-3" key={cake.id}>
                    {cake.name}
                  </li>{" "}
                  <img
                    src={cake.link}
                    alt="Place image..."
                    className="w-28 h-28 justify-center inline-flex self-center items-center m-auto place-content-center flex-col content-center place-self-center object-fill rounded-lg"
                  />
                </Link>
              </ul>
            </Grid>{" "}
          </>
        ))}
        {jams!.map((jam: TProduct) => (
          <>
            <Grid item xs={6} md={6} lg={6}>
              <ul className="text-white text-lg text-center p-3 flex flex-col">
                <Link
                  to={resolvePath(
                    generatePath("/geleias/:link", {
                      link: nameToLink(jam.name),
                    }),
                    "../../../"
                  )}
                  className=" font-light flex flex-col"
                  target="_parent"
                >
                  <li className=" flex flex-col font-light pt-3" key={jam.id}>
                    {" "}
                    {jam.name}
                  </li>{" "}
                  <img
                    src={jam.link}
                    alt="Place image..."
                    className="w-24 h-28 justify-center inline-flex self-center items-center m-auto rounded-sm place-content-center flex-col content-center place-self-center object-fill -rotate-3"
                  />
                </Link>
              </ul>
            </Grid>
          </>
        ))}
      </Grid>
      <Footer />
      <Newsletter />
    </div>
  );
};
