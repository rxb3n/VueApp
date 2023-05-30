import {defineStore} from "pinia"

export const useArticleStore = defineStore("fetched", {
    state: () => ({
        articles: [],
        test: "this is a test"
    }),

    actions: {
        async getArticles() {
            try {
              fetch('http://localhost:1337/api/articles')
                .then(response => response.json())
                .then(data => {
                  const articles = Object.values(data)[0];
                  for ( let i = 0; i < articles.length; i++) {
                    this.articles.push(articles[i])
                  }
        
                  console.log(articles)
                })
                .catch(error => {
                  console.error(error);
                });
        
            } catch (error) {
              console.error(error);
            }
        
            }
    }
})