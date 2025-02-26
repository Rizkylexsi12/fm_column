import PropTypes from "prop-types";

function Card({ icon, color, title, content}) {
    return (
        <div className={`${color.bg} ${color.border} p-10 h-110`}>
          <img src={`${icon}`}/>
          <h1 className="text-white font-bold text-4xl font-shoulders uppercase mt-7 mb-7 font-lexend">{title}</h1>
          <p className="text-white text-sm font-lexend font-extralight">{content}</p>
          <button 
            className={`${color.text} px-7 py-3 bg-white rounded-3xl mt-20 font-semibold hover:text-white hover:${color.bg} hover:border-2 hover:cursor-pointer font-lexend`}>Learn More</button>
        </div>
    );
}

Card.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    key: PropTypes.string,
}

export default Card;