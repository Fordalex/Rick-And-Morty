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
      episodes: [],
      episode: {},
      characterNextPage: "https://rickandmortyapi.com/api/character/",
      locationNextPage: "https://rickandmortyapi.com/api/location",
      episodeNextPage: "https://rickandmortyapi.com/api/episode",
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
    },
    async getEpisodes() {
      let data = await getApiData(this.episodeNextPage);
      let episodes = this.episodes.concat(data["results"]);
      this.episodes = episodes;
      this.episodeNextPage = data["info"]["next"];
    },
    async getEpisode(id) {
      let data = await getApiData(`https://rickandmortyapi.com/api/episode/${id}`);
      this.episode = data;
    }
  }
})
