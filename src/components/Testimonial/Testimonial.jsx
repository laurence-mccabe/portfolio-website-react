import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css'
import Contact from "../Contact/Contact";

function Testimonial() {
const data =[
    {
        name:'Emily',
        position: "ceo",
        des: "I like his work",
        img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:'joe',
        position: "cyyyy",
        des: "I like his work",
        img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:'sam',
        position: "ceo",
        des: "I like his work ggg",
        img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:'Emily',
        position: "ceo",
        des: "I like his work",
        img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:'joe',
        position: "cyyyy",
        des: "I like his work",
        img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:'sam',
        position: "ceo",
        des: "I like his work ggg",
        img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:'Emily',
        position: "ceo",
        des: "I like his work",
        img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:'joe',
        position: "cyyyy",
        des: "I like his work",
        img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:'sam',
        position: "ceo",
        des: "I like his work ggg",
        img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:'Emily',
        position: "ceo",
        des: "I like his work",
        img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:'joe',
        position: "cyyyy",
        des: "I like his work",
        img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name:'sam',
        position: "ceo",
        des: "I like his work ggg",
        img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    
    
]
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container testimonial-section" id="testimonial">

      <div className="section-title ">
        <h5>Testimonial</h5>
        <span className="line "></span>
      </div>{' '}


      <div>
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index} className="content-slider-main">
                <div  className="content-slider">
                    <img src={item.img} alt="testimonial image" className="center-image"></img>
                    <p> {item.name}</p>
                    <p> {item.position}</p>
                    <p> {item.des}</p>
                </div>
                </div>
            ))}
          
        </Slider>
      </div>
      <Contact />

    </div>
  )
}

export default Testimonial
