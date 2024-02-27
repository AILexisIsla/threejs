import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import resume from "../assets/resume.pdf"
import Book1 from "../assets/books/book1.jpg";
import Book2 from "../assets/books/book2.jpg";
import Book3 from "../assets/books/book3.jpg";
import Book4 from "../assets/books/book4.jpg";
import Book5 from "../assets/books/book5.jpg";



const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Sombras Sutiles De Bambú",
    rating: 5.0,
    author: "Anna Llauradó",
  },
  {
    id: 2,
    img: Book4,
    title: "Las tinieblas y el alba",
    rating: 4.6,
    author: "Ken Follett",
  },
  {
    id: 3,
    img: Book3,
    title: "Heartstopper Vol.5",
    rating: 4.7,
    author: "Alice Oseman",
  },
  
];

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
            <li>🧑‍💻 +1 Año de experiencia</li>
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
                <li>React Native</li>
                <li>Angular</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div>
              <p className="mt-3">
                <b>Backend 🔬</b>
              </p>
              <ul className="leading-9">
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>NextJS</li>
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
    <img src={Book1} alt="Descripción de la imagen 1" className="object-cover rounded-md w-full h-32 border-4 border-black" />
    <img src={Book2} alt="Descripción de la imagen 2" className="object-cover rounded-md w-full h-32 border-4 border-black"/>
    <img src={Book3} alt="Descripción de la imagen 3" className="object-cover rounded-md w-full h-32 border-4 border-black"/>
    <img src={Book4} alt="Descripción de la imagen 4" className="object-cover rounded-md w-full h-32 border-4 border-black"/>
    <img src={Book1} alt="Descripción de la imagen 1" className="object-cover rounded-md w-full h-32 border-4 border-black" />
    <img src={Book2} alt="Descripción de la imagen 2" className="object-cover rounded-md w-full h-32 border-4 border-black"/>
  </div>
        </Section>
      </div>
    </Scroll>
  );
};