async function getApiData(url) {
  const response = await fetch(url);
  characterDetails = await response.json();
  return characterDetails;
}

const app = Vue.createApp({
  data() {
    return {
      characters: [],
      character: {},
      nextPage: "https://rickandmortyapi.com/api/character/",
    }
  },
  methods: {
    async getCharacters() {
      let data = await getApiData(this.nextPage);
      let characters = this.characters.concat(data["results"]);
      this.characters = characters;
      this.nextPage = data["info"]["next"]
    },
    async getCharacter(id) {
      let data = await getApiData(`https://rickandmortyapi.com/api/character/${id}`);
      this.character = data;
    }
  }
})
