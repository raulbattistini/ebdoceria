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
    },
    {
      id: 2,
      name: "Bolo de chocolate",
      price: 29.9,
    },
    {
      id: 3,
      name: "Bolo de maracujá",
      price: 15.9,
    },
    {
      id: 2,
      name: "Bolo de coco",
      price: 29.9,
    },
  ];

  const jellies = [
    {
      id: 4,
      name: "Geleia de morango com siciliano",
      price: 19.9,
    },
    {
      id: 5,
      name: "Geleia de figo com baunilha",
      price: 29.9,
    },
    {
      id: 6,
      name: "Geleia de maçã verde com alecrim",
      price: 15.9,
    },
    {
      id: 7,
      name: "Geleia de vinho",
      price: 17.9,
    },
  ];

  return (
    <div className="bg-[#A0A934] ">
      <Navbar />
      <span className="font-inter font-thin text-3xl pl-24 pt-2 pb-2 top-10 text-white flex">
        Produtos
      </span>
      <Grid container>
        <Grid item xs={6}>
          <span className="font-inter text-2xl font-thin pl-24 pt-2 pb-2 top-10 text-white flex">
            {" "}
            Bolos{" "}
          </span>
        </Grid>
        <Grid item xs={6}>
          <span className="font-inter text-2xl pl-24 font-thin pt-2 pb-2 top-10 text-white flex">
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
                  className="font-inter font-light flex flex-col"
                  target="_parent"
                  key={cake.id}
                >
                  {" "}
                  <li
                    className="font-inter flex flex-col font-light pt-3"
                    key={cake.id}
                  >
                    {cake.name}
                  </li>{" "}
                  <img
                    src={defaultImg}
                    alt="Place image..."
                    className="w-28 h-28 justify-center inline-flex self-center items-center m-auto rounded-sm place-content-center flex-col content-center place-self-center object-cover m-3"
                  />
                </Link>
              </ul>
            </Grid>{" "}
          </>
        ))}
        {jellies!.map((jelly: TProduct) => (
          <>
            <Grid item xs={6} md={6} lg={6}>
              <ul className="text-white text-lg text-center p-3 flex flex-col">
                <Link
                  to={resolvePath(
                    generatePath("/geleias/:link", {
                      link: nameToLink(jelly.name),
                    }),
                    "../../../"
                  )}
                  className="font-inter font-light flex flex-col"
                  target="_parent"
                >
                  <li
                    className="font-inter flex flex-col font-light pt-3"
                    key={jelly.id}
                  >
                    {" "}
                    {jelly.name}
                  </li>{" "}
                  <img
                    src={defaultImg}
                    alt="Place image..."
                    className="w-28 h-28 justify-center inline-flex self-center items-center m-auto rounded-sm place-content-center flex-col content-center place-self-center object-cover m-3"
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
