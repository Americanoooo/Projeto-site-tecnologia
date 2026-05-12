import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Carrinho from './pages/carrinho';
import Navbar from './components/Navbar';
import Produto from './pages/produto';

export default function Routes() {
  const [carrinho, setCarrinho] = useState([]);
  const [busca, setBusca] = useState('');

  const produtos = [
    {
      id: 1,
      nome: 'iPhone 15 Pro Max 256GB',
      marca: 'Apple',
      preco: 7999.0,
      precoAntigo: 9999.0,
      imagem:
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop',
      avaliacao: 4.9,
      avaliacoes: 1234,
      categoria: 'Smartphones',
    },
    {
      id: 2,
      nome: 'Samsung Galaxy S24 Ultra 512GB',
      marca: 'Samsung',
      preco: 6999.0,
      precoAntigo: 8499.0,
      imagem:
        'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop',
      avaliacao: 4.8,
      avaliacoes: 892,
      categoria: 'Smartphones',
    },
    {
      id: 3,
      nome: 'MacBook Pro 14" M3 Pro 18GB 512GB',
      marca: 'Apple',
      preco: 14999.0,
      precoAntigo: 16999.0,
      imagem:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop',
      avaliacao: 5.0,
      avaliacoes: 567,
      categoria: 'Notebooks',
    },
    {
      id: 4,
      nome: 'Dell XPS 15 Intel i7 16GB 1TB SSD',
      marca: 'Dell',
      preco: 8999.0,
      precoAntigo:9990.0,
      imagem:
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop',
      avaliacao: 4.7,
      avaliacoes: 423,
      categoria: 'Notebooks',
    },
    {
      id: 5,
      nome: 'AirPods Pro 2ª Geracao USB-C',
      marca: 'Apple',
      preco: 1899.0,
      precoAntigo: 2299.0,
      imagem:
        'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&h=500&fit=crop',
      avaliacao: 4.9,
      avaliacoes: 2341,
      categoria: 'Fones de Ouvido',
    },
    {
      id: 6,
      nome: 'Sony WH-1000XM5 Noise Cancelling',
      marca: 'Sony',
      preco: 1799.0,
      precoAntigo: 2199.0,
      imagem:
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop',
      avaliacao: 4.8,
      avaliacoes: 1876,
      categoria: 'Fones de Ouvido',
    },
    {
      id: 7,
      nome: 'Apple Watch Series 9 GPS 45mm',
      marca: 'Apple',
      preco: 3499.0,
      precoAntigo:3990.0,
      imagem:
        'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&h=500&fit=crop',
      avaliacao: 4.7,
      avaliacoes: 934,
      categoria: 'Smartwatches',
    },
    {
      id: 8,
      nome: 'iPad Pro 12.9" M2 256GB Wi-Fi',
      marca: 'Apple',
      preco: 9499.0,
      precoAntigo: 10999.0,
      imagem:
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
      avaliacao: 4.9,
      avaliacoes: 678,
      categoria: 'Tablets',
    },
  ];


  return (
    <BrowserRouter>
      <Navbar busca={busca} setBusca={setBusca} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <App
              {...props}
              produtos ={produtos}
              carrinho={carrinho}
              setCarrinho={setCarrinho}
              busca={busca}
              setBusca={setBusca}
            />
          )}
        />
        <Route
          exact
          path="/carrinho"
          render={(props) => (
            <Carrinho
              {...props}
              carrinho={carrinho}
              setCarrinho={setCarrinho}
            />
          )}
        />
        <Route
          path="/produto/:id"
          render={(props) => (
            <Produto {...props} produtos ={produtos} carrinho={carrinho} setCarrinho={setCarrinho} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
