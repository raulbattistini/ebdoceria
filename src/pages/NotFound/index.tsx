import React from "react";
import sadDove from "../../assets/images/sadDove.jpg";

export const NotFound = () => {
  return (
    <div className="bg-white content-center relative flex flex-col h-screen w-full">
      <span className="text-black content-center text-4xl text-center flex flex-col mt-28">
        Erro 404.
      </span>
      <>
        <span className="mt-10 text-black content-center text-4xl text-center flex flex-col">
          Lamentamos, mas essa página não foi encontrada.
        </span>
      </>
      <a href="/" className="self-center pt-2 text-center text-3xl underline text-indigo-300">
        Retornar à home.{" "}
      </a>
      <img
        src={sadDove}
        alt="Pomba triste e cabisbaixa (meme)"
        className="w-60 h-60 flex content-center justify-center items-center self-center rounded-sm justify-self-auto m-0-auto object-cover m-10"
      />
    </div>
  );
};
