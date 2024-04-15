import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Routes from './Routes';
import { ProductList } from 'utils/functions';
import { Toaster } from 'react-hot-toast';
import TidioChatWidget from 'components/TidioChat';

function App() {
  return (
    <ProSidebarProvider>
      <audio autoPlay loop>
        <source src="https://www.youtube.com/watch?v=rWIPn3x31aM&t=2045s&ab_channel=Hozho" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <TidioChatWidget/>
      <Routes />
      <Toaster />
      <ProductList />
    </ProSidebarProvider>
  );
}

export default App;
