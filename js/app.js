const App = {

    data() {
        return {
            message : "Manager",
            showHome : false,
            createAgent : false,
            showList: false,
            newAgent: {
                nom: "",
                prenom: "",
                dateNaissance: "",
                specialite: "",
                canton: "",
                 contact: "",
                 service: ""
               
            }
        }
    },
    mounted(){
        this.showNavigationState("Home")
    },
    methods: {
        showHomePage() {
            this.showNavigationState("Home")
        },
        createAgentPage() {
            this.showNavigationState("create")
        },
        showListPage() {
            this.showNavigationState("List")
        },
        submitAgent(){
            console.log(this.newAgent)
        },
        
        showNavigationState(destination){
            this.showHome = false
            this.createAgent = false
            this.showList = false
            
            switch (destination) {
                case "Home":
                    this.showHome = true
                    break;
                case "create":
                    this.createAgent = true
                    break;
                case "List":
                    this.showList = true
                    break;
                    
                default:
                    
                    break;
            }
        }

    },
    
}


Vue.createApp(App).mount("#app")