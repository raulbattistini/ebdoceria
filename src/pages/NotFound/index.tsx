import React from 'react'
import sadDove from '../../assets/images/sadDove.jpg'

export const NotFound = () => {
  return (
    <div className="bg-white content-center relative flex flex-col">
      <span className="text-black content-center font-inter underline text-4xl text-center flex flex-col mt-28">
        Erro 404.
      </span>
      <>
      <span className="mt-10 text-black content-center font-inter text-4xl text-center flex flex-col">
        Lamentamos, mas essa página não foi encontrada.
      </span></>
      <img src={sadDove} alt="Pomba triste e cabisbaixa (meme)" className="w-60 h-60 flex content-center justify-center items-center self-center rounded-sm justify-self-auto m-0-auto object-cover m-10" />
    </div>
  )
}
