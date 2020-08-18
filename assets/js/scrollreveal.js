/* START OF SCROOL REVEAL */

const sr = ScrollReveal({ 
  duration: 1500,
  reset: true
});


sr.reveal('h1' ,{
  delay: 500
});

sr.reveal('.person-name', {
  origin: 'top' , 
  distance: '50px' ,
  scale: 0.5,
});

sr.reveal('section-1-btn' , {
 delay: 750
});

sr.reveal('.project' , {
  delay: 1000
}, 50);
          

/* END OF SCROLL REVEAL */