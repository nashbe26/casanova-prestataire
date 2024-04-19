<Swiper
spaceBetween={30}
centeredSlides={true}
autoplay={{
  delay: 1000,
  disableOnInteraction: false,
}}
slidesPerView={3}
                  pagination={{
  clickable: true,
}}
loop={true}
speed={600}
coverflowEffect={{
  rotate: 0,
  stretch: 0,
  depth: 200,
  modifier: 1,
  slideShadows: false,

}}
className="swiper-container w-[100%]  "
>
{[
  {
    src: "images/img_jaysonhinrichs.png",
    alt: "jaysonhinrichs",
  },
  {
    src: "images/img_vitormonthayj.png",
    alt: "vitormonthayj",
  },
  {
    src: "images/img_weddingbouquet.png",
    alt: "weddingbouquet",
  },
  {
    src: "images/img_jaysonhinrichs.png",
    alt: "jaysonhinrichs",
  },
  {
    src: "images/img_vitormonthayj.png",
    alt: "vitormonthayj",
  },
  {
    src: "images/img_weddingbouquet.png",
    alt: "weddingbouquet",
  },
  {
    src: "images/img_jaysonhinrichs.png",
    alt: "jaysonhinrichs",
  },
  {
    src: "images/img_vitormonthayj.png",
    alt: "vitormonthayj",
  },
  {
    src: "images/img_weddingbouquet.png",
    alt: "weddingbouquet",
  },
  {
    src: "images/img_jaysonhinrichs.png",
    alt: "jaysonhinrichs",
  },
  {
    src: "images/img_vitormonthayj.png",
    alt: "vitormonthayj",
  },
  {
    src: "images/img_weddingbouquet.png",
    alt: "weddingbouquet",
  },
].map((image, index) => {
  return (
    <SwiperSlide key={index}>
      <img             className={`h-60 md:h-auto object-cover rounded-br-7px w-full `}
src={image.src}
      alt={image.alt}></img>
     
    </SwiperSlide>
  );
})}
</Swiper>