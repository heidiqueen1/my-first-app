import "./App.css";
import Testimonio from "./componentes/Testimonio.jsx";
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto nos cuentan nuestros migrantes</h1>
      </div>
      <Testimonio
        nombre="Nabil Naja"
        pais="Venezuela"
        imagen="nabil"
        cargo="Estilista Canino"
        testimonio="Hace años tuve una experiencia en mi país natal, Venezuela, 
      esta experiencia confirmó que mi servicio sería a favor de las mascotas, 
      en aquel entonces me tocó rescatar a un perrito que había caído en el río 
      Guaire (donde están los desperdicios y cloacas de la capital), se estaba 
      ahogando tuve que meterme en el río y la corriente estaba muy fuerte, me 
      acuerdo que fue un momento de vida o muerte pero lo pude salvar , al verle
       me dio mucha tristeza como se encontraba, estaba muy motoso y temblaba 
       muchísimo, fue increíble ese momento , lo abracé con cariño y lo llevé 
       a mi casa, allí le bañé con agua tibia, luego lo sequé y por último lo
        afeité ¡quedó hermoso!."
      />

      <Testimonio
        nombre="Ana Perez"
        pais="África"
        imagen="ana"
        cargo="Chef"
        testimonio="La migración para mí es un asunto personal, tengo amigos muy queridos, 
        casi hermanos, que son campesinos y analfabetas de Tamaulipas y he visto cómo su 
        familia se ha visto obligada a migrar no por gusto, sino por razones económicas o 
        por seguridad. He sido testigo del sufrimiento, el dolor, 
        lo complicado y complejo que es para un migrante ir a otro país."
      />
      <Testimonio
        nombre="Benigna Mogollón"
        pais="Ecuador"
        imagen="doña"
        cargo="Modista"
        testimonio="Fue en abril de 2010 cuando Benigna se despidió de su familia. 
        Salió de su casa con su hija Sofía y sus maletas, rumbo a una experiencia 
        llena de incertidumbre. Con una revuelta en su mente y estómago, se armó
        de lo que pudo y se despidió de su mamá, su papá y de algunos hermanos, 
        sin certezas de un retorno.."
      />
    </div>
  );
}

export default App;
