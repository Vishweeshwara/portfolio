const nav=document.querySelector(".nav");
document.querySelector(".nav-toggle").addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".section,.hero-copy,.hero-visual,.principles article,.skill,.achievement,.project").forEach(e=>{e.classList.add("reveal");io.observe(e)});
document.getElementById("year").textContent=new Date().getFullYear();