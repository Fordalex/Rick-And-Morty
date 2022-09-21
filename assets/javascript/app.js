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
      locations: [],
      location: {},
      characterNextPage: "https://rickandmortyapi.com/api/character/",
      locationNextPage: "https://rickandmortyapi.com/api/location",
    }
  },
  methods: {
    async getCharacters() {
      let data = await getApiData(this.characterNextPage);
      let characters = this.characters.concat(data["results"]);
      this.characters = characters;
      this.characterNextPage = data["info"]["next"];
    },
    async getCharacter(id) {
      let data = await getApiData(`https://rickandmortyapi.com/api/character/${id}`);
      this.character = data;
    },
    async getLocations() {
      let data = await getApiData(this.locationNextPage);
      let locations = this.locations.concat(data["results"]);
      this.locations = locations;
      this.locationNextPage = data["info"]["next"]; 
    },
    async getLocation(id) {
      let data = await getApiData(`https://rickandmortyapi.com/api/location/${id}`);
      this.location = data;
    }
  }
})
