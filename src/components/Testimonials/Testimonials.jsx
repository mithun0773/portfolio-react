import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";


// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// Testimonial Data
const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Danny Jonis",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa repudiandae ullam blanditiis odit dolore veniam laborum omnis accusantium placeat voluptatum.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Sophia Loren",
    review:
      "Eaque ratione voluptatum, molestias fuga delectus iure, sapiente facilis maiores optio nihil magnam adipisci sequi iste harum suscipit dolor deserunt?",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Michael Scott",
    review:
      "Distinctio suscipit incidunt exercitationem quos harum repellat, deleniti sunt rem laudantium dignissimos excepturi aliquid voluptates perspiciatis natus. Dolorem, impedit!",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Emily Carter",
    review:
      "Quo laboriosam perspiciatis reiciendis possimus vero? Facere deleniti minima adipisci nesciunt asperiores repellat fugit, voluptate, quos, hic rem ab?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
     
      >
        {
        data.map(({ avatar, name, review },index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt={`Avatar of ${name}`} />
            </div>
            <h5 className="client_name">{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
          )
})}
      </Swiper>
    </section>
  );
};

export default Testimonials;
