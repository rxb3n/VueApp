<template>
    <footer class="container-fluid bg-black" id="footer-color">
      <div class="container py-4 text-white" style="font-size: 14px;">
        <div class="row">
          <div class="col-md-2 mb-3">
            <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="F.I.F">
              <img src="../assets/logo.png" width="50" height="50" alt="" srcset="">
              <span class="fs-5 ms-2 text-white">F.I.F</span>
            </a>
            <ul class="list-unstyled small">
              <li class="mb-2 fs-normal">Fédération Ivoirienne de Football,Eléphants, DTN, Championnats, Actualités,Photos, Videos.</li>
              <li class="mb-5 text-success fw-bolder">Notre F.A.Q <i class="fas fa-arrow-right"></i></li>
              <div class="fs-2 hstack gap-3">
                <a href="" class="text-white">
                  <i class="fa-brands fa-facebook-messenger"></i>
                </a>
                <a href="" class="text-white">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="" class="text-white">
                  <i class="fa-brands fa-tiktok"></i>
                </a>
              </div>
            </ul>
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-2 mb-3">
            <h5>Actualités</h5>
            <ul class="list-unstyled">
              <li class="mb-2">La F.I.F</li>
              <li class="mb-2">Les Eléphants</li>
              <li class="mb-2">Le meilleur des réseaux</li>
              <li class="mb-2">Ligues</li>
              <li class="mb-2">Internationale</li>
            </ul>
          </div>
          <div class="col-md-2 mb-3">
            <h5>Les Eléphants</h5>
            <ul class="list-unstyled">
              <li class="mb-2">Equipe A</li>
              <li class="mb-2">Equipe Féminines</li>
              <li class="mb-2">Equipe A'</li>
              <li class="mb-2">U23</li>
              <li class="mb-2">U19</li>
              <li class="mb-2">U17</li>
            </ul>
          </div>
          <div class="col-md-2 mb-3">
            <h5>Compétitions</h5>
            <ul class="list-unstyled">
              <li class="mb-2">Ligue 1</li>
              <li class="mb-2">Division 2</li>
              <li class="mb-2">Nationale</li>
              <li class="mb-2">Les Pétits poteaux</li>
            </ul>
          </div>
          <div class="col-md-2 mb-3">
            <h5>La F.I.F</h5>
            <ul class="list-unstyled">
               <li class="mb-2">Actualités</li>
               <li class="mb-2">Qui sommes-nous ?</li>
               <li class="mb-2">Organisation</li>
               <li class="mb-2">DTN</li>
                <li class="mb-2">Historiques</li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="row">
              <p class="col-md-6">Une question ? <span class="ms-2 btn btn-outline-light rounded-5 fw-bold">Contactez-nous <i class="fas fa-arrow-right"></i></span></p>
              <div class="col-md-6 d-flex justify-content-evenly">
                      <img src="../assets/lpf.png" class="" style="object-fit: contain; filter: grayscale(1);" width="40" height="32" alt="LPF_logo" srcset="">
                      <img src="../assets/fifa.png" class="" style="object-fit: contain; filter: grayscale(1);" width="40" height="32" alt="FIFA_logo" srcset="">
                      <img src="../assets/caf.png" class="" style="object-fit: contain; filter: grayscale(1);" width="40" height="32" alt="CAF_logo" srcset="">
                      <img src="../assets/puma-logo.png" class="" style="object-fit: contain; filter: grayscale(1);" width="40" height="32" alt="PUMA_logo" srcset="">
                      <img src="../assets/logo-abidjannet.png" class="" style="object-fit: contain; filter: grayscale(1);" width="40" height="32" alt="ABIDJANNET_logo" srcset="">
                      <img src="../assets/bni.png" class="" style="object-fit: contain; filter: grayscale(1);" width="40" height="32" alt="LPF_logo" srcset="">
                      <img src="../assets/canal.png" class="" style="object-fit: contain; filter: grayscale(1);" width="40" height="32" alt="LPF_logo" srcset="">
                      <img src="../assets/rti.jpg" class="" style="object-fit: contain; filter: grayscale(1);" width="40" height="32" alt="LPF_logo" srcset="">
                      <img src="../assets/logo_gestoci.png" class="" style="object-fit: contain; filter: grayscale(1);" width="40" height="32" alt="LPF_logo" srcset="">
              </div>
          </div>
        </div>
        <p class="mt-5 text-center">© Israël@CDML - 2023</p>
      </div>
    </footer>
</template>

<script>
export default{
        name: 'FooterView',
    }
</script>

<style scoped>

.cercle{
    margin-left: 1rem;
    padding: 0.4rem 0.7rem 0.4rem 0.4rem;
    border: 1px solid black;
    border-radius: 10% / 50%;
    font-weight: bold;
}

.marg{
    margin-left: 12%;
    padding: 0 0 0 12%;
}

#footer-color{
  background-color: #121213;
}


</style>