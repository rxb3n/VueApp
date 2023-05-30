
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
                        <a class="nav-link text-white active" aria-current="page" href="#" id="nav-item">Actualités</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="nav-item">
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
                            aria-expanded="false" id="nav-item">
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
                        <a class="nav-link text-white" id="nav-item">La F.I.F</a>
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

            <div class="bg-imgs">
                <img id="img-top-left" src="../assets/fiftopright.svg">
                <img id="img-bottom-left" src="../assets/fifbtmright.svg">
            </div>

            <div class="row">
                <div class="col-md-7" id="left-side">
                    
                    <div class="v-stack">
                        <router-link to="/"> <button id="back-btn" type="button" class="btn btn-outline-light rounded-5 "><i class="pe-2 fas fa-arrow-left"></i>Retour</button> </router-link>
                    <div class="conteneur-img">
                        <img id="article-img" class="img-responsive" src="@/assets/img-art.png" alt="logo">
                    </div>
                   </div>
                   
                   <div class="article-head">
                    
                    <p id="satoshi-green-text">lorem</p>
                    <p class="content-title" id="neutro-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, earum.</p>
                    <p id="hashtag">#Lorem #Lorem #Lorem</p>
                    <div class="read-time">
                        <img src="../assets/clock.png" width="16" height="16">
                        <p class="time-value">4min</p>
                    </div>
                    <h4 id="secondary-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vitae? In placeat a vitae laboriosam consequatur dignissimos odit eaque. Aspernatur!</h4>
                   </div>
                   <div class="article-content">
                    <p class="main-article" id="secondary-color">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat architecto deleniti, voluptatem laudantium fuga ad nulla omnis facilis magni debitis est repellat eos illo quos, dolore excepturi soluta reiciendis labore commodi iste fugiat laboriosam eaque? <br> <br> Expedita vel iusto at explicabo iure quisquam veritatis nostrum architecto molestiae dicta, reprehenderit fuga quo sequi blanditiis sed natus? Assumenda veniam qui recusandae maiores distinctio provident vero corporis quod illum aliquid sequi consequuntur saepe soluta, labore quam similique quae, eaque eos consequatur veritatis. Laborum, aliquid. <br> <br> Quasi porro nobis recusandae explicabo nihil nostrum laudantium quia magni harum laboriosam! Expedita, earum distinctio cumque autem fuga est fugiat laboriosam qui provident accusantium animi praesentium! Animi illum vel eum, porro aliquam voluptate magni quod dolorem iure veritatis laboriosam quasi ad est corporis obcaecati voluptas nostrum esse fugit reprehenderit quis molestias architecto? Voluptate cum hic quam adipisci inventore quasi eaque illum dolorem qui! Enim quos velit dignissimos voluptas sequi odio, tempore doloremque harum similique, blanditiis, incidunt veniam quidem. Dolor numquam sunt labore quibusdam nulla aut, eaque voluptas natus praesentium obcaecati deserunt non ipsam doloremque at itaque perspiciatis dicta facere. Doloremque ratione, rem modi commodi facere, cum reiciendis magni blanditiis tempore, culpa provident. <br> <br> Hic facilis iusto ullam, tenetur quia cum aperiam quos incidunt saepe temporibus neque ad laborum illo illum mollitia animi corrupti quibusdam possimus praesentium! Ipsum explicabo magni aperiam! Dolorum, doloribus? Recusandae, placeat! Dolore ad obcaecati quisquam, quo ullam delectus reiciendis, maxime nesciunt magnam nisi dolores aspernatur excepturi esse possimus! Ipsum in nisi error beatae nam necessitatibus consequuntur quae hic corporis ad, placeat culpa laborum omnis provident laudantium, commodi voluptatibus quisquam? Vero doloribus cumque labore. Soluta ducimus modi non dolor.</p>
                   </div>

                   <h3 style="font-family: satoshi; font-size: 16px; color: #626368; margin-bottom: 25px; margin-top: 50px;">Joueurs Mentionnés</h3>

                   <div class="player-cards">

                    <div class="card-1">
                        <img id="card-img" src="../assets/kessie-card.png" alt="">
                        <h3 class="card-name">Frank Kessié</h3>
                        <p class="card-team">FC Barcelone</p>
                    </div>

                    <div class="card-1">
                        <img id="card-img" src="../assets/kessie-card.png" alt="">
                        <h3 class="card-name">Frank Kessié</h3>
                        <p class="card-team">FC Barcelone</p>
                    </div>

                    <div class="card-1">
                        <img id="card-img" src="../assets/kessie-card.png" alt="">
                        <h3 class="card-name">Frank Kessié</h3>
                        <p class="card-team">FC Barcelone</p>
                    </div>

                    <div class="card-1">
                        <img id="card-img" src="../assets/kessie-card.png" alt="">
                        <h3 class="card-name">Frank Kessié</h3>
                        <p class="card-team">FC Barcelone</p>
                    </div>

                    <div class="card-1">
                        <img id="card-img" src="../assets/kessie-card.png" alt="">
                        <h3 class="card-name">Frank Kessié</h3>
                        <p class="card-team">FC Barcelone</p>
                    </div>

                   </div>

                   <h3 style="font-family: satoshi; font-size: 16px; color: #626368; margin-bottom: 25px; margin-top: 50px;">Equipe Mentionnées</h3>

                   <div class="player-cards">

<div class="card-1">
    <img id="card-img" src="../assets/team-flag.svg" alt="">
    <h3 class="card-name">Racing d'Abidjan</h3>
    <p class="card-team">Ligue 1</p>
</div>

<div class="card-1">
    <img id="card-img" src="../assets/team-flag.svg" alt="">
    <h3 class="card-name">Racing d'Abidjan</h3>
    <p class="card-team">Ligue 1</p>
</div>

<div class="card-1">
    <img id="card-img" src="../assets/team-flag.svg" alt="">
    <h3 class="card-name">Racing d'Abidjan</h3>
    <p class="card-team">Ligue 1</p>
</div>

<div class="card-1">
    <img id="card-img" src="../assets/team-flag.svg" alt="">
    <h3 class="card-name">Racing d'Abidjan</h3>
    <p class="card-team">Ligue 1</p>
</div>

<div class="card-1">
    <img id="card-img" src="../assets/team-flag.svg" alt="">
    <h3 class="card-name">Racing d'Abidjan</h3>
    <p class="card-team">Ligue 1</p>
</div>

<div class="card-1">
    <img id="card-img" src="../assets/team-flag.svg" alt="">
    <h3 class="card-name">Racing d'Abidjan</h3>
    <p class="card-team">Ligue 1</p>
</div>

<div class="card-1">
    <img id="card-img" src="../assets/team-flag.svg" alt="">
    <h3 class="card-name">Racing d'Abidjan</h3>
    <p class="card-team">Ligue 1</p>
</div>

<div class="card-1">
    <img id="card-img" src="../assets/team-flag.svg" alt="">
    <h3 class="card-name">Racing d'Abidjan</h3>
    <p class="card-team">Ligue 1</p>
</div>

</div>


                </div>
        </div>

        <div class="author-area">
            <p style="color:#626368">Le 1 Janvier 0001</p>
            <p>Ecrit par aaaaaaa</p>
            <button class="share-btn">Partager</button>
        </div>

        </div>

        <div class="others">
            <div class="upper-text">
                <p id="secondary-color">D'autres articles similaires</p>
                <p> <a class="voir-plus" href="#" id="satoshi-green-text">Voir plus</a></p>
            </div>

            <div class="similar-articles">
                <div class="card-2">
                    <img class="similar-img" src="../assets/Nicolas.png" >
                    <div class="details">
                        <p id="satoshi-green-text">La F.I.F</p>
                        <h3 class="similar-title">Lorem ipsum: dolor sit amet consectetur adipisicing elit. Veniam, quas eligendi.</h3>
                    </div>

                    <div class="time-posted">
                        <p style="color:#626368; font-size: 0.75rem;">Il y a 2 heures</p>
                        <p style="color:#626368; font-size: 0.75rem;">4min</p>
                    </div>
                </div>

                <div class="card-2">
                    <img class="similar-img" src="../assets/Nicolas.png" >
                    <div class="details">
                        <p id="satoshi-green-text">La F.I.F</p>
                        <h3 class="similar-title">Lorem ipsum: dolor sit amet consectetur adipisicing elit. Veniam, quas eligendi.</h3>
                    </div>

                    <div class="time-posted">
                        <p style="color:#626368; font-size: 0.75rem;">Il y a 2 heures</p>
                        <p style="color:#626368; font-size: 0.75rem;">4min</p>
                    </div>
                </div>

                <div class="card-2">
                    <img class="similar-img" src="../assets/Nicolas.png" >
                    <div class="details">
                        <p id="satoshi-green-text">La F.I.F</p>
                        <h3 class="similar-title">Lorem ipsum: dolor sit amet consectetur adipisicing elit. Veniam, quas eligendi.</h3>
                    </div>

                    <div class="time-posted">
                        <p style="color:#626368; font-size: 0.75rem;">Il y a 2 heures</p>
                        <p style="color:#626368; font-size: 0.75rem;">4min</p>
                    </div>
                </div>
            </div>

            <img src="../assets/pub.png" class="pub">
        </div>
    <!-- fin content -->

    <FooterView/>

</template>

<script>
import FooterView from "../views/FooterView.vue"

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "ArticleView",
    components: {
        FooterView
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

.img-top-left {
    left: 50;
}

.voir-plus {
    transition: 0.2s;
    text-decoration: none;
}

.voir-plus:hover {
    color: white !important;
}

.others {
    padding-top: 5%;
    background-color: #121213;
    padding-bottom: 5%;
}

.pub {
    position: relative;
    width: 50%;
    left: 24%;
    margin-bottom: 20px;
    margin-top: 2%;
}

.details {
    position: relative;
    margin-left: 50px;
}

.similar-title {
    color: white;
    font-size: 16px;
}

.time-posted {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.similar-articles {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 50px;
}

.card-2:hover {
    border: 2px solid #626368;
}



.card-2 {
    width: 450px;
    background-color: #1c1c1f;
    border-radius: 40px;
    top: 50%;
    left: 40%;
}

.similar-img {
    position: relative;
    left: 11%;
    top: 5%;
    height: 200px;
    border-radius: 0.5rem;
    margin-bottom: 35px;
}

.upper-text {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

#left-side {
    width: 80%;
}

.player-cards {
    font-family: satoshi;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.bg-imgs {
    padding-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.card-1:hover {
    background-color: #1f1f23;
    border: 3px solid #626368;
}

.card-team {
    font-size: 14px;
}

.card-name {
    font-size:16px
}

.card-1 {
    padding: 25px;
    margin-bottom: 10px;
    background-color: #1c1c1f;
    border-radius: 40px;
    margin-right: 15px;
}

#card-img {
    width: 80px;
    height: 80px;
}

#secondary-color {
    color: #c9cacf;
}

#satoshi-green-text {
    font-family: satoshi;
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
    width: 100%;
    margin-left: 15%;
}

#article-section{
    color: white;
    display: flex;
    flex-direction: row;
    padding-bottom: 70px;
}

.author-area {
    font-family: satoshi;
    color: white;
    background-color: #1c1c1f;
    width: 45%;
    height: fit-content;
    margin-top: 10%;
    margin-right: 10%;
    border-radius: 40px;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-right: 100px;
    padding-left: 25px;
    top: 100px;
    position: sticky;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}

.share-btn:hover {
    background-color: white;
    border: none;
    border-radius: 40px;
    color: black;
}

.share-btn {
    background-color: #8ef6d3;
    border: none;
    border-radius: 40px;
    padding: 10px;
    margin-bottom: 20px;
    transition: 0.2s;
}

.read-time {
    font-family: satoshi;
    display: flex;
    flex-direction: row;
    font-size: 0.75rem;
    color: #626368;
}

.main-article {
    font-size: 1rem;
    font-family: satoshi;
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

#nav-item {
    margin-left: 15px;
}

#article-img{
    width: 667px;
    border-radius: 30px;
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
