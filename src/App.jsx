
import React from "react";
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';

function App() {

  return (
    <>
      <div className="min-h-screen bg-sky-950 flex flex-col items-center justify-center space-y-4">
        <div>
          <h1 className="text-3xl font-bold text-center text-white p-4">
            Larissa Fiorini Martins
          </h1>
          <h3 className="text-xl text-center text-white">
            Software Quality Engineer
          </h3>
        </div>
        <Skills />
        <Certificates />
        <Projects />
      </div>
      
    </>
  )
}

export default App
