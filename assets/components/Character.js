app.component('character', {
    props: {
        character: {
          type: Object,
          required: true
        }
      },
    template: 
    /*html*/`<div class="character-wrapper">
        <img :src="character.image"/>
        <h3>{{ character.name }}</h3>
        <p v-if="character.status">status: {{ character.status }}</p>
        <p v-if="character.species">species: {{ character.species }}</p>
        <p v-if="character.type">type: {{ character.type }}</p>
        <p v-if="character.gendar">gender: {{ character.gender }}</p>
        <h3>Locations</h3>
        <div>
            <p>Origin: {{ character.origin?.name }}</p>
            <button>View Location</button>
        </div>
        <h3>Episodes</h3>
        <ul>
            <li v-for="(e, i) in character.episode" :key="i">{{ e }}</li>
        </ul>
    </div>
    `,
    data() {},
    methods: {}
})

