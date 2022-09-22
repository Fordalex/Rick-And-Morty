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
                    <a href="#">{{ episode.name }}</a>
                    {{ episode.episode }}
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