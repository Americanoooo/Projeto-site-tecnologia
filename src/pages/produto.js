import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function Produto({produtos, setCarrinho}){
  const { id } = useParams();
  const produto = produtos.find(p=> p.id ===Number(id))
  function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  
  function adicionarProduto(produto){
    return setCarrinho((carrinhoAtual)=>{
     
      const existe = carrinhoAtual.find((p)=> p.id ===produto.id)
      if(existe){
        return carrinhoAtual.map((p)=>
        p.id ===produto.id
        ?{...p, quantidade: p.quantidade + 1}
        :p
        
        )}else{
          return [...carrinhoAtual, {...produto, quantidade: 1}]
        }
    })

    
  }

    if(!produto) return <p>
  Produto não encontrado
  </p>

  return(
    <div className="p-4">
    <main className="flex flex-col md:flex-row gap-5 md:gap-40  md:justify-around w-full  ">

      <img
        className="rounded w--full md:w-2/3 "
        src={produto.imagem}
      />

      <div className="flex flex-col gap-4 w-full">

        <h1 className="md:text-4xl font-bold">
          {produto.nome.toUpperCase()}
        </h1>

        <p className="md:text-md">Marca: {produto.marca}</p>

        <div className="flex gap-4 md:gap-8 justify-start items-end" >

          <div>
            <p className="text-sm md:text-lg">à vista</p>

            <p className=" text-xl  md:text-4xl text-green-600 font-bold">
              {formatarPreco(produto.preco)}
            </p>

            <p className="text-sm md:text-lg">
              no PIX com 15% de desconto
            </p>
          </div>

          <div >
            <p className="text-red-600 md:text-4xl  font-bold">
              {formatarPreco(produto.precoAntigo)}
            </p>

            <p className="w-64 md:text-lg">
              em até 6x de{" "}
              <span className="text-red-600 font-bold">
                {formatarPreco(produto.precoAntigo / 6)}
              </span>
            </p>
          </div>

        </div>
        <div className="w-full md:1/3">
        
        <Link to="/carrinho">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white h-16 rounded w-full md:w-2/3 text-xl"
          onClick={() => adicionarProduto(produto)}
        >
          Comprar
          
        </button>
        </Link>
        </div>
     

        <div>
          <h1 className="text-red-600 font-bold">
            CARACTERÍSTICAS:
          </h1>

          <p>Garantia: 12 Meses</p>
        </div>

      </div>

    </main>
  </div>
);
}