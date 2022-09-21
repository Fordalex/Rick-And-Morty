app.component('location-list', {
    props: {
      locations: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
        <div class="character-container">
            <ul class="characters-list">
                <li v-for="(location, index) in locations" :key="index" @click="getLocation(location.id)">
                    <a href="#">{{ location.name }}</a>
                </li>
            </ul>
            <div>Locations loaded: {{ locations.length }}</div>
            <div>Total locations: 126</div>
        </div>
    `,
    methods: {
        getLocation(id) {
            this.$emit('get-location', id)
        }
    }
  })