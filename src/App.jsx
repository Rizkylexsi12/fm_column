import './App.css'
import Card from './Card'

function App() {

  const Cards = [
    {
      icon:"icon-sedans.svg",
      color:{
        bg:"bg-[#E28525]",
        border: "rounded-l-lg",
        text:"text-[#E28525]"
      },
      title:"Sedans" ,
      content:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
    },
    {
      icon:"icon-suvs.svg",
      color:{
        bg:"bg-[#016972]",
        text:"text-[#016972]"
      },
      title:"Suvs" ,
      content:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
    },
    {
      icon:"icon-luxury.svg",
      color:{
        bg:"bg-[#00403F]",
        border: "rounded-r-lg",
        text:"text-[#00403F]"
      },
      title:"Luxury" ,
      content:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
    }
  ]
  return (
    <div className='flex w-200'>
      {Cards.map((card, index) => {
        return (
          <Card 
            key={index} 
            icon={card.icon} 
            color={card.color}
            title={card.title}
            content={card.content}
            />
        )
      })}
    </div>
  )
}

export default App
