import './App.css'
import MyCard from './components/MyCard'
import Footer from './components/Footer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (

    <>

      <Header Title= 'Adopta un perrito'/>

    <div className='card'> 

      <MyCard 
        Img="https://images.pexels.com/photos/13071480/pexels-photo-13071480.jpeg"
        Name="goliat"
        Desc="soy alegre, jugeton y lleno de energia. ¡el necesita un hogar y mucho amor!"
        ColorBadge="primary"
        TextBadge="chiguagua"
      />

       <MyCard 
        Img="https://images.pexels.com/photos/12646549/pexels-photo-12646549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        Name="lili"
        Desc="soy paciente, muy valiente, feliz. ¡el hogar que la reciba ganara una perrita muy fiel!"
        ColorBadge="success"
        TextBadge="bulldog frances"
      />

       <MyCard 
        Img="https://images.pexels.com/photos/15279810/pexels-photo-15279810/free-photo-of-casas-animal-casa-perro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        Name="rocky"
        Desc="soy muy serio, guardian y muy protector ¡el te cuidara y tambien te hara feliz por su buen comportamiento!"
        ColorBadge="warning"
        TextBadge="pastor aleman"
      />

       <MyCard 
        Img="https://images.pexels.com/photos/5268300/pexels-photo-5268300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        Name="dana"
        Desc="soy muy jugetona, gritona pero de buen corazon  ¡necesita bun hogar que la quieran y le den mucha atencion!"
        ColorBadge="danger"
        TextBadge="golden retriver"
      />

       <MyCard 
        Img="https://images.pexels.com/photos/9678560/pexels-photo-9678560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        Name="mia"
        Desc="fuertes, tanto físicamente como de carácter, y no se recomiendan para dueños primerizos. Hace falta experiencia en el manejo, adiestramiento y socialización, tanto inicial como continua. No obstante, son muy fieles a su familia"
        ColorBadge="success"
        TextBadge="akita"
      />

       <MyCard 
        Img="https://images.pexels.com/photos/5214405/pexels-photo-5214405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        Name="atom"
        Desc="El carácter del Pit Bull se caracteriza por la estabilidad emocional, la tolerancia con los niños, la afectuosidad con la familia, la no sociabilidad con los extraños que considere peligrosos, la aptitud para la guardia y la dominancia con otros perros"
        ColorBadge="warning"
        TextBadge="pitbill"
      />

       <MyCard 
        Img="https://images.pexels.com/photos/7289/animal-dog-pet-sad.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        Name="nala"
        Desc="Los beagles son perros de tamaño pequeño, Dos de las características más distintivas del beagle son su rabo, casi siempre en alto como una C invertida y terminado en color blanco, y sus orejas grandes y caídas, que le dan al perro un aire tierno y casi infantil."
        ColorBadge="segundary"
        TextBadge="beagle"
      />

      </div>
    
      <Footer text= 'Las ventajas de adoptar son muchas.Disfruta de la compañia de una mascota, puedes encotrar tu alma gemela perruna, ama inconcicionalmente'/>
      
      </>
  )
};

export default App
