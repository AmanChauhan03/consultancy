
document.getElementById('hamburgerIcon').addEventListener('click', function() {
    document.getElementById('phone-menu').classList.remove('-translate-x-full');
    document.querySelector("#hamburgerIcon").classList.add("hidden")
    document.querySelector("#closeIcon").classList.remove("hidden")
});


document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('phone-menu').classList.add('-translate-x-full');
    document.querySelector("#closeIcon").classList.add("hidden")
    document.querySelector("#hamburgerIcon").classList.remove("hidden")
});

document.getElementById('closeIcon').addEventListener('click', function() {
    document.getElementById('phone-menu').classList.add('-translate-x-full');
    document.querySelector("#closeIcon").classList.add("hidden")
    document.querySelector("#hamburgerIcon").classList.remove("hidden")
});
  

//scroll reveal when i scroll then the some element comes as animation
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay:200

});

document.querySelectorAll("#animation1").forEach(element => {
    ScrollReveal().reveal(element, { origin: "top" });
});

document.querySelectorAll("#animation2").forEach(element => {
    ScrollReveal().reveal(element, { origin: "bottom" });
});

document.querySelectorAll("#animation-top").forEach(element => {
    ScrollReveal().reveal(element, { origin: "top" });
});

// scroll active link
// Function to handle scroll and click active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        // console.log(height);
        let id  = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

ScrollReveal().reveal('#home2-animation', {
    delay: 200,
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
    scale: 0,
    opacity: 0,
    easing: 'ease-in-out',
    reset: true,
    
})
