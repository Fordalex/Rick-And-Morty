app.component('episode-list', {
    props: {
      episodes: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
        <div class="items-container">
            <ul class="items-list">
                <li v-for="(episode, index) in episodes" :key="index" @click="getEpisode(episode.id)">
                    <span>{{ episode.name }}</span>
                    <span class="episode-text"><b>{{ episode.episode }}</b></span>
                </li>
            </ul>
            <div>Episodes loaded: {{ episodes.length }}</div>
            <div>Total episodes: 51</div>
        </div>
    `,
    methods: {
        getEpisode(id) {
            this.$emit('get-episode', id)
        }
    }
  })