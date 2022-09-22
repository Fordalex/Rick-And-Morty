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
        <div class="items-container">
            <ul class="items-list">
                <li v-for="(character, index) in characters" :key="index" class="characterList-item" @click="getCharacter(character.id)">
                    <img :src="character.image" class="characterList-img">
                    <span class="character-id"><b>{{ index + 1 }}</b></span>
                    <span class="character-name"><b>{{ character.name }}</b></span>
                </li>
            </ul>
            <div>Characters loaded: {{ characters.length }}</div>
            <div>Total characters: 826</div>
        </div>
    `,
    methods: {
        getCharacter(id) {
            this.$emit('get-character', id)
        }
    }
  })