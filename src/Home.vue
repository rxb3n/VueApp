<template>

    <router-view/>
  
  <!-- barre de navigation -->
  <nav class="navbar navbar-expand-lg bg-black d-none d-sm-block">
  <div class="container">
    <img src="./assets/logo.png" width="32" height="32"  alt="logo" srcset="">
    <a class="navbar-brand text-white ps-2" href="#">F.I.F</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-user text-white"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-white active" aria-current="page" href="#"><router-link to="/article">Actualités</router-link></a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Les éléphants
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Eléphants</a></li>
              <li><a class="dropdown-item" href="#">Eléphants</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Eléphants</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Compétitions
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Eléphants</a></li>
            <li><a class="dropdown-item" href="#">Eléphants</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Eléphants</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white">La F.I.F</a>
        </li>
      </ul>
      <div class="d-flex" role="search">
        <a href="" class="text-white fs-5">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="" class="text-white fs-5 mx-4">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="" class="text-white fs-5">
          <i class="fa-brands fa-tiktok"></i>
        </a>
      </div>
    </div>
  </div>
  </nav>
  
  <!-- Barre de Navigation mobile -->
  <div class="container-fluid bg-black fixed-bottom text-white d-block d-sm-none py-3">
  <div class="d-flex align-items-center justify-content-evenly">
    <div class="vstack gap-2 text-center fs-6">
      <i class="fa-solid fa-newspaper text-secondary"></i>
      <span style="font-size: 12px;">Actu</span>
    </div>
    <div class="vstack gap-2 text-center fs-6">
      <i class="fa-solid fa-republican text-secondary"></i>
      <span style="font-size: 12px;">Eléphants</span>
    </div>
    <div class="vstack gap-2 text-center fs-6">
      <i class="fa-solid fa-trophy text-secondary"></i>
      <span style="font-size: 12px;">Compétitions</span>
    </div>
    <div class="vstack gap-2 text-center fs-6">
      <i class="fa-solid fa-user text-secondary"></i>
      <span style="font-size: 12px;">Menu</span>
    </div>
  </div>
  </div>
  <!-- /Barre de Navigation mobile -->
  <!-- barre de navigation -->
  
  <!-- Couverture FIF -->
  <div class="container-fluid bg-black py-5" style="background-image: url('./assets/dessin-full.png');">
  <div class="container position-relative">
    <div class="position-absolute top-0 w-100 d-flex align-items-center justify-content-center opacity-25" style="">
      <img src="./assets/dessin-gribouilli.png" class="w-100" style="width: 100%; height: 300px; object-fit: contain;" alt="">
    </div>
  </div>
  <div class="my-5 text-white text-center fw-bolder" style="z-index: 999;">
    <img src="./assets/logo-re.png" width="40" height="32" alt="">
    <h4 class="text-success fw-bold">LA F.I.F</h4>
    <h3 class="text-uppercase fw-bolder">TOUTE L'actualité du <br />FOOT IVOIRIEN</h3>
  </div>
  </div>
  
  <!-- Couverture FIF -->
  <!-- Carousel à la une -->
  <div class="container-fluid bg-black py-2">
  <CarouselView />
  </div>
  <!-- Carousel à la une -->
  <!-- PUB -->
  <PubView />
  <!-- PUB -->
  <!-- GRID -->
  <GridView />
  <!-- GRID -->
  
  <!-- PAGINATION -->
  <div class="container-fluid bg-black py-3">
  
  <PaginationView  />
  </div> 
  <!-- PAGINATION -->
  <!-- PUB -->
    <PubView />
  <!-- PUB -->
  
  <!-- Footer -->
  <FooterView />
  <!-- Footer -->
  </template>
  
  <script>
  import CarouselView from "./views/CarouselView.vue";
  import GridView from "./views/GridView.vue";
  import FooterView from "./views/FooterView.vue";
  import PubView from "./views/PubView.vue";

  export default {
  name: "app",
  components: {
  CarouselView,
  GridView,
  FooterView,
  PubView,
  },
  };
  /* 
  import $ from "jquery";
  $(function () {
  $(window).on("scroll", function () {
  var initStart = $(window).scrollTop();
   var width = 136.2/2724;
   var finalWidth = 0;
   if (width > finalWidth) {
    finalWidth = width
   }else{
    if(finalStart - initStart == 136.2){
      finalStart = width * 2724;
    }
   } */
  /* if ($(window).scrollTop() > 136.2) {
    var finalStart = $(window).scrollTop();
    console.log($(window).scrollTop())
    console.log($(window).scrollTop())
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  } 
  });
  });*/
  </script>
  
  <style>
  @import "./style.css";
  .par {
  padding-left: 20rem;
  }


  #body {
    background-color: #121213;
  }
  </style>