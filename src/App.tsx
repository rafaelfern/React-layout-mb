import { useState } from "react";
import ExtraContent from "./components/ExtraContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import RelatedImages from "./components/RelatedImages";
import RelatedPosts from "./components/RelatedPosts";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex mb-2">
        <div className="flex flex-col w-1/4 h-96">
          <Hero />
          <Sidebar />
        </div>
        <div className="flex flex-col w-3/4 h-96">
          <MainContent />
          <ExtraContent />
        </div>
      </div>
      <div className="flex">
        <RelatedImages />
        <RelatedPosts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
