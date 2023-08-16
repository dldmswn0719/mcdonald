const $logo = document.querySelector(".logo-img");
const $nav = document.querySelectorAll(".header .header-wrap .nav ul li")
const $subNav = document.querySelector(".submenu")

document.addEventListener("scroll",function(){
    if(window.scrollY >= 140){
        $logo.style.height = "45px";
        $logo.classList.add("on")
        document.querySelector(".header").classList.add("on")
        document.querySelector(".header .header-wrap").classList.add("on")
        document.querySelector(".submenu").style.marginTop = "-30px";
        $nav.forEach((e,i)=>{
            e.classList.add("on")
        })
    }else{
        $logo.style.height = "";
        $logo.classList.remove("on")
        document.querySelector(".header").classList.remove("on")
        document.querySelector(".header .header-wrap").classList.remove("on")
        document.querySelector(".submenu").style.marginTop = "";
        $nav.forEach((e,i)=>{
            e.classList.remove("on")
        })
    }
    if(window.scrollY >= 800){
        document.querySelector(".aside").classList.add("on")
        document.querySelector(".button").classList.add("on")
    }else{
        document.querySelector(".aside").classList.remove("on")
        document.querySelector(".button").classList.remove("on")
    }
    // console.log(window.scrollY)
})

$nav.forEach((e,i)=>{
    e.addEventListener("mouseover",function(){
        document.querySelector(".submenu").classList.add("on")
        document.querySelector(".submenu .submenu-wrap").classList.add("on")
    })
})

$subNav.addEventListener("mouseover",function(){
    document.querySelector(".submenu").classList.add("on")
    document.querySelector(".submenu .submenu-wrap").classList.add("on")
})

$subNav.addEventListener("mouseout",function(){
    document.querySelector(".submenu").classList.remove("on")
    document.querySelector(".submenu .submenu-wrap").classList.remove("on")
})

document.querySelector(".header .header-wrap .logo").addEventListener("mouseover",function(){
    document.querySelector(".submenu").classList.remove("on")
    document.querySelector(".submenu .submenu-wrap").classList.remove("on")
})

document.querySelector(".header .header-wrap .member").addEventListener("mouseover",function(){
    document.querySelector(".submenu").classList.remove("on")
    document.querySelector(".submenu .submenu-wrap").classList.remove("on")
})

document.querySelector(".header .header-wrap .search").addEventListener("mouseover",function(){
    document.querySelector(".submenu").classList.remove("on")
    document.querySelector(".submenu .submenu-wrap").classList.remove("on")
})

const swiper = new Swiper(".swiper",{
    loop:true,
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    slidesPerView:1,
    freeMode:true,
    navigation : {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagianation: {
        el: ".swiper-pagination",
        clickable: true
    }
})

document.querySelector(".swiper-cus-pagination .progress").classList.add("on")

function auto_play(){
    document.querySelector(".swiper-cus-pagination .progress").classList.remove("on")
    setTimeout(() => {
        document.querySelector(".swiper-cus-pagination .progress").classList.add("on")
    }, 100);
}

let timer = setInterval(auto_play, 5000);

document.querySelector(".swiper-cus-pagination .pause").addEventListener("click",function(){
    document.querySelector(".swiper-cus-pagination .pause").classList.toggle("play")
    if(document.querySelector(".swiper-cus-pagination .pause").classList.contains("play")){
        clearInterval(timer);
        document.querySelector(".swiper-cus-pagination .progress").classList.remove("on")
        swiper.autoplay.stop();
    }else{
        document.querySelector(".swiper-cus-pagination .progress").classList.add("on")
        clearInterval(timer);
        timer = setInterval(auto_play, 5000);
        swiper.autoplay.start();
    }
})


swiper.on("slideChange",function(){
    document.querySelector(".swiper-cus-pagination .progress").classList.remove("on")
})

swiper.on("transitionEnd",function(){
    clearInterval(timer);
    //pause걸렸을때는 실행하지말고 아닐때만 실행한다
    if(document.querySelector(".swiper-cus-pagination .pause").classList.contains("play")){
        return;
    }else{
        document.querySelector(".swiper-cus-pagination .progress").classList.add("on")
    }
})

document.querySelector(".button").addEventListener("click",function(){
    window.scrollTo({
        top : 0,
        behavior: "smooth"
    })
})