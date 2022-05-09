// console.log("Hello World")

const app=Vue.createApp({
    // template:'<h2>This is a first String</h2>'
    data(){
        return{
            author:"Arnab Dutta",
            title:"This is a title",
            age:24
        }
    },methods:{
        changeTitle(){
            this.title="Title Changed"
        }

    }
})

app.mount('#app')