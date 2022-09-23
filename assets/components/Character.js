app.component('character', {
    props: {
        character: {
          type: Object,
          required: true
        }
      },
    template: 
    /*html*/`
    <div class="character-wrapper">
        <img :src="character.image" class="character-image"/>
        <h2>{{ character.name }}</h2>
        <p v-if="character.status"><b>Status:</b> {{ character.status }}</p>
        <p v-if="character.species"><b>Species:</b> {{ character.species }}</p>
        <p v-if="character.type"><b>Type:</b> {{ character.type }}</p>
        <p v-if="character.gendar"><b>Gender:</b> {{ character.gender }}</p>
        <h5>Locations</h5>
        <div class="character-infoSection">
            <p><b>Origin:</b> {{ character.origin?.name }}</p>
            <button class="button">View Location</button>
        </div>
        <h5>Episodes</h5>
        <div class="character-infoSection">
            <p><b>Total:</b> {{ character.episode?.length }}</p>
            <button class="button">View Episode<span v-if="character.episode?.length > 1">s</span></button>
        </div>
    </div>
    `
})

