<script>
export default {
  name: "CardItem",
  
  data() {
    return {
    }
  },
  props: {
    // possiamo chiamare le proprietà come vogliamo
    card: Object,
    cardNumber: Number,
  },
}
</script>

<template>
  <div class="card">
    {{ card.name }}
    <hr>
    <em>{{ card.type }}</em>

    <small v-if="card.card_sets">
      Rarità: {{ card.card_sets[0].set_rarity }}
    </small>
    <small v-else>
      <em>Rarità: sconosciuta</em> 
    </small>

    <div class="card-number">
      {{ cardNumber }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
$gap: 10px;
.card {
  display: flex;
  flex-direction: column;
  gap: $gap;
  position: relative;
  width: calc(100% / 4 - $gap / 4 * 3) ;
  padding: 12px;
  border: solid 1px black;
  .card-number {
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: .5;
    font-size: .7em;
  }
}
</style>
