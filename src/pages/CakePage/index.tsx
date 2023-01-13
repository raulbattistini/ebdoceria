import React, { useEffect } from "react";
import { useParams, useResolvedPath } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Newsletter } from "../../components/newsletter";
import defaultImg from "../../assets/images/default.jpg";

export const CakePage = () => {
  // useeffect hook
  useEffect(() => {
    getProductName();
  }, []);

  // routing to product page
  const path = useResolvedPath("#");
  console.info(path);
  path.pathname === location.pathname;

  let { link } = useParams();

  // dev purposes to check path
  const getProductName = async () => {
    const res = window.location.pathname;
    console.log(res);
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
  return (
    <div>
      <Navbar />
      <span className=" font-thin text-3xl bg-[#BD722F] pl-24 pt-2 pb-2 top-10 text-white flex">
        {linkToName(link)}
      </span>
      <img
        src={defaultImg}
        alt="Place image..."
        className="flex w-full h-128"
      />
      <div className="bg-[#FCF6E8] text-[#211E1E] ">
        
      </div>
      <Footer />
      <Newsletter />
    </div>
  );
};
