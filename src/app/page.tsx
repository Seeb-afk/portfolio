import Header from "@/components/Header";
import SobreMi from "@/components/SobreMi";
import Conocimientos from "@/components/Conocimientos";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SobreMi />
        <Conocimientos />
        <Proyectos />
      </main>
      <Contacto />
    </>
  );
}
