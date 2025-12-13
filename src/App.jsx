import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact'; // <-- NEW IMPORT

function App() {
  return (
    <div className="App">
      <Hero /> 
      <About />
      <Skills />
      <Projects />
      <Contact /> {/* <-- NEW COMPONENT */}
    </div>
  );
}

export default App;