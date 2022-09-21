app.component('episode', {
    props: {
        episode: {
          type: Object,
          required: true
        }
      },
    template: 
    /*html*/`
    <div>
        <h3>{{ episode.name }}</h3>
        <p><b>Air Date:</b> {{ episode.air_date }}</p>
        <p><b>Episode:</b> {{ episode.episode }}</p>
        <p><b>Characters total:</b> {{ episode.characters?.length }}</p>
        <button>View Characters</button>
        <p>Show all characters here after button press</p>
    </div>
    `
})

