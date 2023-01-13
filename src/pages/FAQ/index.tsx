import React from "react";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Newsletter } from "../../components/newsletter";

export const FAQ = () => {
  return (
    <>
      <Navbar />
      <div>
        <article className="bg-[#fefae0] text-[#211E1E] leading-6">
          <h2 className=" font-thin text-3xl pl-24 pt-2 pb-2 top-10 flex">
            FAQ
          </h2>
          <div className="bg-[#fefae0] text-[#211E1E] pl-28 max-w-2xl">
            <h3 className="text-[#211E1E] text-lg flex ">
              Como fazer pedidos no site?
            </h3>
            <p className=" text-[#211e1e] font-light pr-3 h-12">
              No momento, ainda não temos suporte para pedidos no site. Mas você
              pode entrar em contato conosco pelo{" "}
              <a
                href="https://wa.me/+5511982136155"
                className="hover:text-lg duration-300 text-[#dda15e]"
                target="_blank"
              >
                {" "}
                WhatsApp
              </a>
              !
            </p>
            <h3 className=" text-[#211e1e] text-lg ">
              Posso escolher outros sabores?
            </h3>
            <p className=" text-[#211e1e] font-light pr-3">
              Sim, você sempre pode entrar em contato para conferir a
              disponibilidade de um sabor customizado.
            </p>
            <h3 className=" text-[#211e1e] text-lg ">
              Quem está por trás do site?
            </h3>
            <p className=" text-[#211e1e] font-light pr-3">
              Elisabete Battistini, com mais de 40 anos de culinária artesanal,
              desde sempre cozinhou (por hobby ou necessidade). Hoje também
              trabalha com culinária para trazer um pouco de alegria por meio de
              um bolo ou geleia artesanais!
            </p>
            <h3 className=" text-[#211e1e] text-lg ">
              Posso fazer pedidos robustos, para uma festa?
            </h3>
            <p className=" text-[#211e1e] font-light pr-3">
              Sim! O que você precisa é fazer o pedido cerca de 3-7 dias a
              depender do tamanho do pedido, para que possamos entregar seus
              produtos fresquinhos!
            </p>
            <h3 className=" text-[#211e1e] text-lg ">
              Os produtos estão à pronta-entrega?
            </h3>
            <p className=" text-[#211e1e] font-light pr-3">
              Trabalhamos somente com produtos frescos, por favor confira a
              disponibilidade pelo WhatsApp.
            </p>
            <h3 className=" text-[#211e1e] text-lg ">Possuem delivery?</h3>
            <p className=" text-[#211e1e] font-light pr-3">
              Sim!* Confira frete pelo WhatsApp.
            </p>
              <p className="text-[#211e1e] font-light pr-3 text-xs">
                {" "}
                *a depender da distância. Confira área de atendimento.
              </p>
            <h3 className=" text-[#211e1e] text-lg ">
              Onde posso saber os ingredientes?
            </h3>
            <p className=" text-[#211e1e] font-light pr-3">
              As geleias acompanham um card que descrevem seus ingredientes. Os bolos e as geleias são livres de glúten e lactose.
            </p>
          </div>
        </article>
      </div>

      <Footer />
      <Newsletter />
    </>
  );
};
