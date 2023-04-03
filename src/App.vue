<script>
import {store} from "./store.js"
import axios from "axios";
import AppMain from "./components/AppMain.vue";
import AppLoader from "./components/AppLoader.vue";
import AppSearch from "./components/AppSearch.vue";
import CardsCounter from "./components/CardsCounter.vue";
export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppMain,
    AppLoader,
    AppSearch,
    CardsCounter,
  },
  created() {
    this.executeAPIquery('');
  },
  computed: {
  
    cardsCount() {
      return this.store.cards.length;
    },
  },
  methods: {
    searchName() {
      this.store.isLoading = true;
      
      if(this.store.cardNameSearch != "") {
        let newParameters = "&fname=" + this.store.cardNameSearch;
        console.log(newParameters);
        
        this.executeAPIquery(newParameters);
      } else {
        this.executeAPIquery('');
      }
    },
    executeAPIquery(newParameters) {
      axios.get(this.store.APIbaseSearch + newParameters).then((response) => {
        this.store.cards = response.data.data;
        this.store.isLoading = false;
        
      }).catch((err) => {
        if(err.response.status == 400) {
          // rendere l'array delle carte vuoto
          this.store.cards = [];
          this.store.isLoading = false;
          
        } else {
          alert("Errore: " + err.response.statusText);
        }
      });
    },
    
  },
}
</script>

<template>
  <AppLoader v-if="store.isLoading"></AppLoader>

  <AppSearch @userSearch="searchName()"></AppSearch>

  <CardsCounter :cardsNumber="cardsCount"></CardsCounter>

  <div>

    <AppMain></AppMain>


  </div>
</template>

<style lang="scss" scoped>
</style>