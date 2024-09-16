import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { Layout } from 'antd';


import "./App.css";

import SlugPage from "./pages/SlugPage";
import Navbar from "./components/Navbar";

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
});

function App() {
    const { Header, Footer, Content } = Layout;
    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Layout>
                    <Header style={{ position: "sticky", top: 0, zIndex: 10, display: 'flex', alignItems: 'center', backgroundColor: '#3f83f8' }} >
                        <Navbar />
                    </Header>
                    <Content style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Routes>
                            <Route path="/" element={<SlugPage />} />
                            <Route path="/:slug" element={<SlugPage />} />
                        </Routes>
                    </Content>
                    <Footer className="text-center">Wersja aplikacji: 1.0.0</Footer>
                </Layout>
            </ApolloProvider>
        </BrowserRouter>
    );
}

export default App;
