import { useState, useMemo } from "react";
import { Grid } from "@mui/material";
import { generatePath, Link, resolvePath } from "react-router-dom";

export const Cardapio = () => {
  const [firstCakeImage, setFirstCakeImage] = useState("");
  const [secondCakeImage, setSecondCakeImage] = useState("");
  const [thirdCakeImage, setThirdCakeImage] = useState("");
  const [fourthCakeImage, setFourthCakeImage] = useState("");
  const [firstJamImage, setFirstJamImage] = useState("");
  const [secondJamImage, setSecondJamImage] = useState("");
  const [thirdJamImage, setThirdJamImage] = useState("");
  const [fourthJamImage, setFourthJamImage] = useState("");
  useMemo(() => {
    const firstCakeImageImgPath = import.meta.env
      .VITE_BOLO_CHOCO_MORANGO_STATIC;
    const secondCakeImageImgPath = import.meta.env.VITE_BOLO_CHOCOLATE_STATIC;
    const thirdCakeImageImgPath = import.meta.env.VITE_BOLO_MARACUJA_STATIC;
    const fourthCakeImageImgPath = import.meta.env.VITE_BOLO_COCO_STATIC;
    setFirstCakeImage(firstCakeImageImgPath); 
    setSecondCakeImage(secondCakeImageImgPath);
    setThirdCakeImage(thirdCakeImageImgPath);
    setFourthCakeImage(fourthCakeImageImgPath);
    const firstJamImageImgPath = import.meta.env
      .VITE_GELEIA_MORANGO_SICILIANO_STATIC;
    const secondJamImageImgPath = import.meta.env
      .VITE_GELEIA_ABACAXI_PIMENTA_STATIC;
    const thirdJamImageImgPath = import.meta.env
      .VITE_GELEIA_MACA_ALECRIM_STATIC;
    const fourthJamImageImgPath = import.meta.env.VITE_GELEIA_VINHO_STATIC;
    setFirstJamImage(firstJamImageImgPath);
    setSecondJamImage(secondJamImageImgPath);
    setThirdJamImage(thirdJamImageImgPath);
    setFourthJamImage(fourthJamImageImgPath);
  }, []);
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
      link: firstCakeImage,
    },
    {
      id: 2,
      name: "Bolo de chocolate",
      price: 29.9,
      link: secondCakeImage,
    },
    {
      id: 3,
      name: "Bolo de maracujá",
      price: 15.9,
      link: thirdCakeImage,
    },
    {
      id: 2,
      name: "Bolo de coco",
      price: 29.9,
      link: fourthCakeImage,
    },
  ];

  const jams = [
    {
      id: 4,
      name: "Geleia de morango com siciliano",
      price: 19.9,
      link: firstJamImage,
    },
    {
      id: 5,
      name: "Geleia de abacaxi com pimenta",
      price: 29.9,
      link: secondJamImage,
    },
    {
      id: 6,
      name: "Geleia de maçã verde com alecrim",
      price: 15.9,
      link: thirdJamImage,
    },
    {
      id: 7,
      name: "Geleia de vinho",
      price: 17.9,
      link: fourthJamImage,
    },
  ];

  return (
    <div className="bg-[#E4C399] ">
      <span className=" font-thin text-3xl justify-center pt-2 pb-2 top-10 text-[#211e1e] flex">
        Produtos
      </span>
      <Grid container>
        <Grid item xs={6}>
          <span className="justify-center text-2xl font-thin pt-2 pb-2 top-10 text-[#211e1e] flex">
            {" "}
            Bolos{" "}
          </span>
        </Grid>
        <Grid item xs={6}>
          <span className="justify-center text-2xl font-thin pt-2 pb-2 top-10 text-[#211e1e] flex">
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
              src={firstCakeImage}
              alt="Place image..."
              className="w-1/2 -rotate-45 mr-10"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          {" "}
          <div className="flex justify-center">
            <img
              src={firstJamImage}
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
                {/* <Link
                  to={resolvePath(
                    generatePath("/bolos/:link", {
                      link: nameToLink(cake.name),
                    }),
                    "../../../"
                  )}
                  className=" font-light flex flex-col"
                  target="_parent"
                  key={cake.id}
                > */}{" "}
                <li className=" flex flex-col font-light pt-3" key={cake.id}>
                  {cake.name}
                </li>{" "}
                <img
                  src={cake.link}
                  alt="Place image..."
                  className="w-28 h-28 justify-center inline-flex self-center items-center m-auto place-content-center flex-col content-center place-self-center object-fill rounded-lg"
                />
                {/* </Link> */}
              </ul>
            </Grid>{" "}
          </>
        ))}
        {jams!.map((jam: TProduct) => (
          <>
            <Grid item xs={6} md={6} lg={6}>
              <ul className="text-white text-lg text-center p-3 flex flex-col">
                {/* <Link
                  to={resolvePath(
                    generatePath("/geleias/:link", {
                      link: nameToLink(jam.name),
                    }),
                    "../../../"
                  )}
                  className=" font-light flex flex-col"
                  target="_parent"
                > */}
                <li className=" flex flex-col font-light pt-3" key={jam.id}>
                  {" "}
                  {jam.name}
                </li>{" "}
                <img
                  src={jam.link}
                  alt="Place image..."
                  className="w-24 h-28 justify-center inline-flex self-center items-center m-auto rounded-sm place-content-center flex-col content-center place-self-center object-fill -rotate-3"
                />
                {/* </Link> */}
              </ul>
            </Grid>
          </>
        ))}
      </Grid>
      {/* <Newsletter /> */}
    </div>
  );
};
