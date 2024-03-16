import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import resume from "../assets/resume.pdf"
import Book1 from "../assets/books/book1.png";
import Book2 from "../assets/books/book2.png";
import Book3 from "../assets/books/book3.png";
import Book4 from "../assets/books/book4.jpg";
import Book5 from "../assets/books/book5.jpg";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${props.right ? "items-end" : "items-start"
        }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hola, soy Alexis Isla
          </h1>
          <p className="text-gray-500">Bienvenido a mi portfolio</p>
          <p className="mt-3">FullStack developer</p>
          <ul className="leading-9">
            <li>🧑‍💻 +2 Año de experiencia</li>
            <li>🧑‍🏫 +15 Certificados</li>
            <li>🌎 Inglés C1</li>
            <li>🗂 +5 Proyectos</li>
          </ul>
          <p className="animate-bounce  mt-6">↓🖱</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Stack tecnológico 🔥
          </h1>
          <p className="text-gray-500">PS: Hice test QA</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mt-3">
                <b>Frontend 🚀</b>
              </p>
              <ul className="leading-9">
                <li>ReactJS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>
            <div>
              <p className="mt-3">
                <b>Backend 🔬</b>
              </p>
              <ul className="leading-9">
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Java</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
          <h1 className="font-semibold font-serif text-2xl mt-4">
            Contáctame 🤙
          </h1>
          <p className="text-gray-500">
            Creemos cosas grandiosas juntos!
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📜📥 <a href={resume} download="Cv:AlexisIsla">Descargar CV</a>
          </p>
          <p className="animate-bounce  mt-6">↓🖱</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            💻📈 Proyectos
          </h1>
          <p className="text-gray-500">
            Creemos cosas grandiosas juntos!
          </p>
          <div className="grid grid-cols-2 gap-4 mt-3">
    <a href="https://rollingym.netlify.app/"><img src={Book1} alt="Descripción de la imagen 1" className="object-fill object-cover rounded-md w-full h-32 border-4 border-black" /></a>
    <p><li>E-COMMERCE</li>
    <li>React</li>
    <li>Bootstrap</li>
    <li>MongoDB</li>
    <li>Node.js</li>
    </p>
    <a href="https://alexisisladev.itch.io/bahia-blanca-ovni-invader?secret=XKalTejpcElcgnwrIBqpy4VLePA"><img src={Book2} alt="Descripción de la imagen 2" className="object-cover rounded-md w-full h-32 border-4 border-black"/></a>
    <p><li>VIDEO GAME</li>
    <li>C#</li>
    <li>Unity</li></p>
    <a href="https://libreriadelaferoca.netlify.app/"><img src={Book3} alt="Descripción de la imagen 3" className="object-cover rounded-md w-full h-32 border-4 border-black"/></a>
    <p><li>E-COMMERCE</li>
    <li>React</li>
    <li>Javascript</li>
    <li>Taildwind</li>
    <li>MongoDB</li>
    </p>
  </div>
        </Section>
      </div>
    </Scroll>
  );
};
