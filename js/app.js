const App = {

    data() {
        return {
            message : "Manager",
            showHome : false,
            createAgent : false,
            showList: false,
            agent: {
                nom: "",
                prenom: "",
                dateNaissance: "",
                specialite: "",
                canton: "",
                service: "",
                contact: 
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