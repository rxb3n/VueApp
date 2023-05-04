<template>
    <!-- barre de navigation -->
     <nav class="navbar navbar-expand-lg bg-black d-none d-sm-block" id="nav-wrapper">
        <div class="container" >
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
    <!-- content -->
        <div class="container-fluid" style="background-color: #171719" id="article-section">
            <div class="row">
                <div class="col-md-7">
                    <div class="v-stack">
                        <router-link to="/"> <button id="back-btn" type="button" class="btn btn-outline-light rounded-5 "><i class="pe-2 fas fa-arrow-left"></i>Retour</button> </router-link>
                    <div class="conteneur-img">
                        <img id="article-img" class="img-responsive" src="@/assets/img-art.png" alt="logo">
                    </div>
                   </div>
                   <div class="article-head">
                    <p id="satoshi-green-text">Lorem Ipsum</p>
                    <p class="content-title" id="neutro-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, earum.</p>
                    <p id="hashtag">#Hashtag #Hashtag #Hashtag</p>
                    <h4 id="secondary-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vitae? In placeat a vitae laboriosam consequatur dignissimos odit eaque. Aspernatur!</h4>
                   </div>
                   <div class="article-content">
                    <p class="main-article">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat architecto deleniti, voluptatem laudantium fuga ad nulla omnis facilis magni debitis est repellat eos illo quos, dolore excepturi soluta reiciendis labore commodi iste fugiat laboriosam eaque? Expedita vel iusto at explicabo iure quisquam veritatis nostrum architecto molestiae dicta, reprehenderit fuga quo sequi blanditiis sed natus? Assumenda veniam qui recusandae maiores distinctio provident vero corporis quod illum aliquid sequi consequuntur saepe soluta, labore quam similique quae, eaque eos consequatur veritatis. Laborum, aliquid. Quasi porro nobis recusandae explicabo nihil nostrum laudantium quia magni harum laboriosam! Expedita, earum distinctio cumque autem fuga est fugiat laboriosam qui provident accusantium animi praesentium! Animi illum vel eum, porro aliquam voluptate magni quod dolorem iure veritatis laboriosam quasi ad est corporis obcaecati voluptas nostrum esse fugit reprehenderit quis molestias architecto? Voluptate cum hic quam adipisci inventore quasi eaque illum dolorem qui! Enim quos velit dignissimos voluptas sequi odio, tempore doloremque harum similique, blanditiis, incidunt veniam quidem. Dolor numquam sunt labore quibusdam nulla aut, eaque voluptas natus praesentium obcaecati deserunt non ipsam doloremque at itaque perspiciatis dicta facere. Doloremque ratione, rem modi commodi facere, cum reiciendis magni blanditiis tempore, culpa provident. Hic facilis iusto ullam, tenetur quia cum aperiam quos incidunt saepe temporibus neque ad laborum illo illum mollitia animi corrupti quibusdam possimus praesentium! Ipsum explicabo magni aperiam! Dolorum, doloribus? Recusandae, placeat! Dolore ad obcaecati quisquam, quo ullam delectus reiciendis, maxime nesciunt magnam nisi dolores aspernatur excepturi esse possimus! Ipsum in nisi error beatae nam necessitatibus consequuntur quae hic corporis ad, placeat culpa laborum omnis provident laudantium, commodi voluptatibus quisquam? Vero doloribus cumque labore. Soluta ducimus modi non dolor.</p>
                   </div>
                </div>
                <div class="author-area">
                    <p>Le 12 décembre 2022</p>
                    <p>Écrit par R.A & LME</p>
                    <button>Partager</button>
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

@font-face {
    font-family: "satoshi";
    src: url(@/fonts/satoshi/satoshi_regular.otf);
}

@font-face {
    font-family: "neutro";
    src: url(@/fonts/neutro/Neutro-Bold.otf);
}

#secondary-color {
    color: #c9cacf;
}

#satoshi-green-text {
    color: #76f4b0;
}

#hashtag {
    font-size: 0.875rem;
    color: #c9cacf;
}

#neutro-white {
    font-family: neutro;
    font-size: 2rem;
}

body {
    font-family: satoshi;
    background-color: #121213;
}
.progress-bar {
  position: absolute;
  z-index: 2;
  height: 5px;
  background-color: #76f4b0;
  transition: width 0,09s ease-in-out;
bottom: 0;
margin-top: 15px;
}

.row {
    margin-left: 15%;
    display: flex;
    flex-direction: row;
}

#article-section{
    color: white;
    display: flex;
    flex-direction: row;
}

.author-area {
    color: white;
    background-color: #1c1c1f;
    width: 45%;
}

.main-article {
    margin-top: 50px;
}

.conteneur-img{
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

#nav-wrapper {
    background-color: #1c1c1f !important;

}

#article-img{
    width: 667px;
    border-radius: 40px;
    height: 320px;
}

#app {
    background-color: #121213;
}

.v-stack {
    padding-top: 50px;
}

#back-btn {
    margin-bottom: 50px;
}
</style>
