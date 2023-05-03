<template>
    <!-- barre de navigation -->
     <nav class="navbar navbar-expand-lg bg-black d-none d-sm-block">
        <div class="container">
            <img src="@/assets/logo.png" width="32" height="32" alt="logo" srcset="">
            <a class="navbar-brand text-white ps-2" href="#">F.I.F</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-user text-white"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link text-white active" aria-current="page" href="#">Actualités</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Les éléphants
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Eléphants</a></li>
                            <li><a class="dropdown-item" href="#">Eléphants</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Eléphants</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Compétitions
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Eléphants</a></li>
                            <li><a class="dropdown-item" href="#">Eléphants</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
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
        <div class="progress-bar"></div>
    </nav>

    <!-- barre de navigation -->
    <!-- barre chargement page -->

    <!-- barre chargement page -->
    <!-- content -->
        <div class="container-fluid" style="background-color: #171719">
            <div class="row">
                <div class="col-md-7 ">
                    <div class="v-stack">
                     <button type="button" class="btn btn-outline-light rounded-5 "><i class="pe-2 fas fa-arrow-left"></i>Retour</button>
                    <div class="conteneur-img">
                        <img class="img-responsive" src="@/assets/img-art.png" alt="logo">
                    </div>
                   </div>
                </div>
            </div>
        </div>
    <!-- fin content -->

</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "ArticleView",
    components: {
    },
     mounted() {
        window.addEventListener('scroll', this.updateProgressBar);
    },
    methods: {
        updateProgressBar() {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
            document.querySelector('.progress-bar').style.width = progress + '%';
        }
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.updateProgressBar);
    }
};

</script>

<style scoped>

.progress-bar {
  position: sticky;
  z-index: 2;
  top: 0;
  height: 5px;
  background-color: #76f4b0;
  width: 0%;
  transition: width 0,09s ease-in-out;
}

.conteneur-img{
    width: 100%;
    max-height: 20rem;
    object-fit: cover;
    border-radius: 16px;
    margin-bottom: 2.5rem;
    display: block;
}

nav {
    position: sticky;
    top:0;
    z-index: 5;
}

img{
    max-width: 100%;
}

</style>
