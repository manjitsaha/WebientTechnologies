//Testimonial Data
const testimonials = [
    {
        name: "Piyush Ranjan",
        job: "Entrepreneur",
        testimonial:
            "webient technologies takes pride in their work. they take it seriously and are highly motivated.",
    },
    {
        name: "Kumar Nehru",
        job: "Founder &amp; CEO JamuiToday",
        testimonial:
            "If you want to build a web app platform, but your business has limited funds, I recommend The webient technogies.",
    },
    {
        name: "Manjit Saha",
        job: "Entrepreneur",
        testimonial:
            "They know what they are doing, they do their best, and they are all super friendly, reliable, communicative people.",
    },
    {
        name: "Abhishek Singh",
        job: "Entrepreneur",
        testimonial:
            "The webient technogies is a very reliable partner.",
    },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
});
prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
});

let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <div style="height:30px"></div>   
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
};
window.onload = displayTestimonial;