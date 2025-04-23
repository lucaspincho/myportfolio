import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

export default function MainContent() {
  return (
    <main className="ml-0 md:ml-[40%] w-full md:w-[60%] py-20 md:py-20 lg:pt-20 transition-all">
      <div className="max-w-none mx-auto px-4 md:px-6 lg:px-6">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  );
} 