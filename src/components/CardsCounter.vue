<script>
export default {
  name: "CardsCounter",
  data() {
    return {
      
    }
  },
  props: {
    cardsNumber: Number,
  }
}
</script>

<template>
  <div id="cards-counter">
    {{ cardsNumber }} risultati trovati
  </div>
</template>

<style lang="scss" scoped>
  #cards-counter  {
    position: fixed;
    top: 20px;
    right: 20px;
  }
</style>
