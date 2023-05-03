<template>
  <div class="container position-relative ">
    <div id="carouselExampleIndicators" class="bg-dark p-3 rounded-4 carousel slide">
      
      <div class="carousel-inner" id="imageDiv">
        <div class="carousel-item active">
          <div class="row">
            <div class="col-md-6 py-2 d-flex align-items-center justify-content-center" style="height: 380px;">
              <div class="w-100 py-2 rounded-3">
                <img src="../assets/Badra.png" style="height: 370px; object-fit: cover; object-position: center center;" class="w-100 rounded-4" alt="">
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-center justify-content-center">
              <div class="text-white">
                <span style="color: #3ED0A9;">Catégorie</span>
                <h2>{{ data[2].Category }}</h2>
                <h4 class="mt-3">{{ data[2].Title }}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, animi!</p>
                <p>{{ data[2].Date }} <span class="ms-5"><i class="fa-solid fa-clock"></i> {{ data[2].Duration }} min</span></p> 
                <button type="button" class="btn btn-outline-light">Lire</button>
              </div>
            </div>
          </div>
        </div>
         <div class="carousel-item">
          <div class="row">
              <div class="col-md-6 py-2 d-flex align-items-center justify-content-center" style="height: 380px;">
                <div class="w-100 py-2">
                  <img src="../assets/kessie.png" style="height: 100%; object-fit: cover; object-position: center center;" class="w-100 rounded-4" alt="">
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-center justify-content-center">
                <div class="text-white">
                 <span style="color: #3ED0A9;">Catégorie</span>
                  <h2>{{ data[3].Category }}</h2>
                  <h4 class="mt-3">{{ data[3].Title }}</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, animi!</p>
                  <p>{{ data[3].Date }} <span class="ms-5"><i class="fa-solid fa-clock"></i> {{ data[3].Duration }} min</span></p>
                  <button type="button" class="btn btn-outline-light">Lire</button>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="row">
                <div class="col-md-6 py-2 d-flex align-items-center justify-content-center" style="height: 380px;">
                  <div class="w-100 py-2">
                    <img src="../assets/sangare.png" style="height: 100%; object-fit: cover; object-position: center center;" class="w-100 rounded-4" alt="">
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-center justify-content-center">
                  <div class="text-white">
                    <span style="color: #3ED0A9;">Catégorie</span>
                  <h2>{{ data[4].Category }}</h2>
                  <h4 class="mt-3">{{ data[4].Title }}</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, animi!</p>
                  <p>{{ data[4].Date }} <span class="ms-5"><i class="fa-solid fa-clock"></i> {{ data[4].Duration }} min</span></p>
                  <button type="button" class="btn btn-outline-light">Lire</button>
                  </div>
                </div>
              </div>
          </div>
          <div class="carousel-item">
            <div class="row">
                <div class="col-md-6 py-2 d-flex align-items-center justify-content-center" style="height: 380px;">
                  <div class="w-100 py-2">
                    <!-- <img src="../assets/haller.png" style="height: 100%; object-fit: cover; object-position: center center;" class="w-100 rounded-4" alt=""> -->
                    <video src="#" controls style="height: 100%; object-fit: cover; object-position: center center;" class="w-100 rounded-4"></video>
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-center justify-content-center">
                  <div class="text-white">
                    <span style="color: #3ED0A9;">Catégorie</span>
                  <h2>{{ data[5].Category }}</h2>
                  <h4 class="mt-3">{{ data[5].Title }}</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, animi!</p>
                  <p>{{ data[5].Date }} <span class="ms-5"><i class="fa-solid fa-clock"></i> {{ data[5].Duration }} min</span></p>
                  <button type="button" class="btn btn-outline-light">Lire</button>
                  </div>
                </div>
              </div>
          </div>
          <div class="carousel-item">
            <div class="row">
                <div class="col-md-6 py-2 d-flex align-items-center justify-content-center" style="height: 380px;">
                  <div class="w-100 py-2">
                    <img src="../assets/nouvelle.png" style="height: 100%; object-fit: cover; object-position: center center;" class="w-100 rounded-4" alt="">
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-center justify-content-center">
                  <div class="text-white">
                    <span style="color: #3ED0A9;">Catégorie</span>
                  <h2>{{ data[6].Category }}</h2>
                  <h4 class="mt-3">{{ data[6].Title }}</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, animi!</p>
                  <p>{{ data[6].Date }} <span class="ms-5"><i class="fa-solid fa-clock"></i> {{ data[6].Duration }} min</span></p>
                  <button type="button" class="btn btn-outline-light">Lire</button>
                  </div>
                </div>
              </div>
          </div>
      </div> 
      
    </div>

    <div class="d-flex align-items-center justify-content-center mt-3">
      <button style="height: 40px; width: 40px;" class="d-flex align-items-center justify-content-center btn btn-sm btn-outline-secondary rounded-circle me-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <i class="fa-solid fa-arrow-left fs-4"></i>
            <span class="visually-hidden">Previous</span>
          </button>
      <div class="d-flex align-items-center justify-content-center mx-4">
        <span type="button" data-bs-target="#carouselExampleIndicators" style="height: 5px; width: 5px;" data-bs-slide-to="0" class="active rounded-3 bg-white" aria-current="true" aria-label="Slide 1"></span>
        <span type="button" data-bs-target="#carouselExampleIndicators" style="height: 5px; width: 5px;" data-bs-slide-to="1" aria-label="Slide 2" class="rounded-3 bg-white mx-2"></span>
        <span type="button" data-bs-target="#carouselExampleIndicators" style="height: 5px; width: 5px;" data-bs-slide-to="2" aria-label="Slide 3" class="rounded-3 bg-white"></span>
      </div>
      <button style="height: 40px; width: 40px;" class="d-flex align-items-center justify-content-center btn btn-sm btn-outline-secondary rounded-circle ms-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <i class="fa-solid fa-arrow-right"></i>
            <span class="visually-hidden">Next</span>
          </button>
    </div>

  </div>

</template>

<script>
import MOCK_DATA from '../MOCK_DATA.json';


export default{
    name: 'CarouselView',
    data() {
    return {
      data: MOCK_DATA,
      limit: 5,
    };
  },
  computed: {
    limitedCarousel() {
      return this.data.slice(0, this.limit);
    }
  }
  
}

</script>

<style scoped>
   .con{
   max-width: 479px;
    margin-top: 4rem;
    margin-bottom: 4rem;
   }
</style>