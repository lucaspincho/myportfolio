import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

export default function MainContent() {
  return (
    <main className="w-full py-20 lg:pt-20 transition-all">
      <div className="w-full pl-0 md:pl-4">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  );
} 