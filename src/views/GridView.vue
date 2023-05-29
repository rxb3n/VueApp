<style>
.bar-menu::-webkit-scrollbar {
  width: 5px;
  height: 3px;
  display: none;
}

/* Track */
.bar-menu::-webkit-scrollbar-track {
  background: black;
}

/* Handle */
.bar-menu::-webkit-scrollbar-thumb {
  background: none;
}
</style>

<script setup>
/* import {useStore} from "../store/store.js"
const fetch = useStore() */
import { ref, onMounted } from 'vue';
import { useStore } from '../store/store.js';
</script>

<template #data="{pageNumber}" v-if="">
  <div class="container-fluid" style="background-color: #121213;">
    <div class="container bg-dark rounded-5 p-2">
      <div class="container bar-menu py-2" style="width: 100%; overflow-x: scroll">
        <div class="hstack gap-2">
          <span style="width: 100px" class="text-white m-0">Filtrer</span>
          <button
            style="width: 100px"
            class="btn btn-sm btn-outline-success rounded-5"
          >
            Tous
          </button>
          <div class="vr text-white"></div>
          <button
            style="width: 100px"
            class="btn btn-sm btn-outline-light rounded-5"
          >
            FIF TV
          </button>
          <button
            style="width: 110px"
            class="btn btn-sm btn-outline-light rounded-5"
          >
            Les Eléphants
          </button>
          <button
            style="width: 100px"
            class="btn btn-sm btn-outline-light rounded-5"
          >
            Compétitions
          </button>
          <button
            style="width: 100px"
            class="btn btn-sm btn-outline-light rounded-5"
          >
            International
          </button>
          <button
            style="width: 100px"
            class="btn btn-sm btn-outline-light rounded-5"
          >
            Ligue1
          </button>
          <a
            style="widows: fit-content;"
            class="d-flex btn btn-sm btn-outline-light rounded-5"
          >
            Les petits poteaux
          </a>
          <button
            style="width: 100px"
            class="btn btn-sm btn-outline-light rounded-5"
          >
            Le meilleur
          </button>
          <button
            style=""
            class="btn btn-sm btn-outline-light rounded-5"
          >
            Staff
          </button>
        </div>
      </div>
    </div>
    <div class="container rounded-5">
      <div class="row pt-3">
        <div class="col-md-9">
          <div class="row g-4" id="gridView">

            <div class="col-md-4 card"  v-for="article in articles" v-bind:key="article.id" style="background-color: #121213;">
                 <router-link to="/article/${article.id}" scope="div" class="card-body" style="background-color: #1C1C1F; text-decoration: none;"> <!-- couleur du card  datas.Category -->
                    <img class="card-img-top" style="height: 500px:" src="../assets/Nicolas.png" alt="Card image cap"/>
                    <p class=" fw-bold" style="color: #3ED0A9;">{{ article.attribute.category }}</p>
                    <p class="card-text over-wrap text-white fw-bold fs-5">{{ article.attributes.content }}</p>
                    <p class="text-white fs-6 pt-2 opacity-25">{{ article.attributes.date }} <span class="marr"><i class="fa-solid fa-clock"></i> {{ article.attributes.duration }} min</span></p>
                  </router-link>
            </div>
            <!-- End Cols -->
          </div>
        </div>
        <div class="col-md-3">
          <div class="py-5" style="position: sticky; top: 20px;">
            <img src="../assets/wolf.png" class="w-100" style="height: 600px; object-fit: cover;">
          </div>
        </div>
        <!-- End Cols -->
      </div>
    </div>
    <!-- pagination -->
    <div class="container-fluid py-3">
      <nav aria-label="Page navigation example" class="container bg-dark rounded-5">
        <ul class="pagination d-flex justify-content-end py-2">
          <li class="page-item" v-bind:class="{ disabled: currentPage === 0 }">
            <a class="btn rounded-circle text-white" href="#gridView" @click="prevPage($event)"><i class="fas fa-arrow-left"></i></a>
          </li>
          <li class="page-item" v-for="page in pages" :key="page"
              v-bind:class="{ active: currentPage === page }">
            <a class="btn rounded-circle text-white ms-3" href="#gridView" @click="setPage(page, $event)">{{ page + 1 }}</a>
          </li>
          <li class="page-item" v-bind:class="{ disabled: currentPage === pageCount - 1 }">
            <a class="btn rounded-circle text-white" href="#gridView" @click="nextPage($event)"><i class="fas fa-arrow-right"></i></a>
          </li>
        </ul>
      </nav>
      </div>
    <!-- pagination -->


  </div>
</template>

<script>

export default {
  name: "GridView",
  components: {},
  data() {
    return {
      limit: 12,
      currentPage: 0,
      pageSize: 12,
    };
  },

  setup() {
    const store = useStore();
    const articles = ref([]);

    onMounted(async () => {
      await store.getArticles();
      articles.value = store.articles;
    });

    return {
      articles
    };
 },


  computed: {
    limitedData() {
      return this.articles.slice(0, this.limit);
    },
    /* imp */
    paginatedData() {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      return fetch.articles.slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.data.length / this.pageSize);
    },
    pages() {
      const pages = [];
      for (let i = 0; i < this.pageCount; i++) {
        pages.push(i);
      }
      return pages;
    }
  },

  

/*   created() {
    fetch.actions.getArticles().then;
  }, */

  
  /* imp methods */
  methods: {
    prevPage() {
      //event.preventDefault();
      this.currentPage--;
    },
    nextPage() {
      //event.preventDefault();
      this.currentPage++;
    },
    setPage(page, ) {
     // event.preventDefault();
      this.currentPage = page;
    },
  }
};
</script>

<style scoped>
body{
font-family: 'Satoshi', sans-serif;
}
.cercle {
  margin-left: 1rem;
  padding: 0.4rem 0.7rem 0.4rem 0.4rem;
  border: 1px solid white;
  border-radius: 30% / 50%;
  font-weight: bold;
}

.card-body {
  border: none;
  border-radius: 14px;
}


.marr {
  margin-left: 6.5rem;
}

.card-body:hover{
  border: 3px solid #626368 !important;;
  opacity: 12;
  transition: all;
}
.pagination .active a {
  background-color: #313139;
  color: #fff;
}
</style>