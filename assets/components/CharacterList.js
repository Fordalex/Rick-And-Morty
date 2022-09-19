app.component('character-list', {
    props: {
      characters: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
        <div class="character-container">
            <h3>Characters</h3>
            <ul class="characters-list">
                <li v-for="(character, index) in characters" :key="index" class="characterList-item" @click="getCharacter(character.id)">
                    <img :src="character.image" class="characterList-img">
                    <span>{{ character.name }}</span>
                </li>
            </ul>
            <div>Characters loaded: {{ characters.length }}</div>
            <div>Total characters: 800</div>
        </div>
    `,
    methods: {
        getCharacter(id) {
            this.$emit('get-character', id)
        }
    }
  })