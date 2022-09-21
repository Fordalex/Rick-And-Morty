app.component('location', {
    props: {
        location: {
          type: Object,
          required: true
        }
      },
    template: 
    /*html*/`
    <div>
        <h3>{{ location.name }}</h3>
        <p><b>Type:</b> {{ location.type }}</p>
        <p><b>Dimension:</b> {{ location.dimension }}</p>
        <p><b>Residents total:</b> {{ location.residents?.length }}</p>
        <button>View Characters</button>
        <p>Show all characters here after button press</p>
    </div>
    `
})

