let currentSlide = 0;
const carouselInner = document.querySelector('.carousel-inner');

//  quantos testemunhos cabem por tela com base na largura
function getVisibleTestimonials() {
  if (window.innerWidth >= 1024) return 4; 
  if (window.innerWidth >= 600) return 2;  
  return 1; 
}

function moveSlideAuto() {
  const visibleTestimonials = getVisibleTestimonials();
  const totalSlides = Math.ceil(
    document.querySelectorAll('.carousel-inner .testimonial-box').length / visibleTestimonials
  );

  currentSlide = (currentSlide + 1) % totalSlides; 
  const offset = -currentSlide * (100 / visibleTestimonials); 
  carouselInner.style.transform = `translateX(${offset}%)`;
}


setInterval(moveSlideAuto, 3000);
