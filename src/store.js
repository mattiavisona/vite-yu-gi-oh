import {reactive} from "vue";

export const store = reactive({
  // proprietà che vogliamo rendere disponibili per tutta la nostra app

  // questa proprietà conterrà le carte in risposta dalla nostra chiamata api
  cards: [],
  
  isLoading: true,

  // memorizzo la stringa di ricerca base
  APIbaseSearch: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0",

  // stringa predisposta ad accogliere il testo di ricerca inserito dall'utente
  cardNameSearch: "",


});