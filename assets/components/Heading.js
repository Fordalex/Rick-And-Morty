app.component('heading', {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    template: 
    /*html*/`
    <header class="heading">
        <h1>{{ title }}</h1>
    </header>
    `
})
