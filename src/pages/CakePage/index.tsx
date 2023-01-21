import React, { useEffect, useState } from "react";
import { useParams, useResolvedPath } from "react-router-dom";
import { api } from "../../utils/services/api";
import axios from "axios";

interface IImagePath {
  imagePath: string;
}

export const CakePage = ({ imagePath }: IImagePath) => {
  // routing to product page
  const path = useResolvedPath("#");
  const [image, setImage] = useState("");
  // useeffect hooks
  useEffect(() => {
    getProductName();
    // getBlob();
  }, []);
  useEffect(() => {
    fetchImage();
  }, [path]);
  console.info(path);
  path.pathname === location.pathname;

  let { link } = useParams();

  // dev purposes to check path
  const getProductName = async () => {
    const res = window.location.pathname;
  };
  const linkToName = (link: string | undefined) => {
    const noDashName = link?.replace(/-/g, " ");
    let name = "";
    for (var i = 0; i < noDashName!.length; i++) {
      if (i === 0 || i === 8) {
        name += noDashName!.charAt(i).toUpperCase();
      } else {
        name += noDashName!.charAt(i).toLowerCase();
      }
    }   
    return name;
  };
  const downloadContract = async () => {
    await axios({
      url: "http://localhost:3333" + path.pathname,
      method: "GET",
      responseType: "blob",
    })
      .then((response) => {
        const file = new Blob([response.data], {
          type: response.headers.toString(),
        });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, "_blank");
        setImage(fileURL);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  async function fetchImage() {
    try {
      const response = await api.get(path.pathname);
      setImage(response.data);
      console.log(response, response.data);
      return response.data;
    } catch (error) {
      return error instanceof Error ? error.message : "Error during catch";
    }
  }
  return (
    <div>
      <span className=" font-thin text-3xl bg-[#BD722F] pl-24 pt-2 pb-2 top-10 text-white flex">
        {linkToName(link)}
      </span>
      {/* {image && ( */}
      <img src={image} alt="Place image..." className="flex w-full h-128" />
      {/* )} */}
      <div className="bg-[#FCF6E8] text-[#211E1E] "></div>
    </div>
  );
};
