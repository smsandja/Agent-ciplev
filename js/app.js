const checkIfEmpty = (obj)=>{
    let isEmpty = false;
    for(prop in obj){
        if(obj[prop] == ""){
            isEmpty = true;
        }
    }
    return isEmpty
}
const showSuccessMessage = (message)=>{
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
        
    })
}
const showErrorMessage = (message)=>{
    Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: message,
        showConfirmButton: false,
        timer: 1500
        
    })
}

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
            if (!checkIfEmpty(this.newAgent)){

                if(!checkIfAgentExist(this.newAgent.nom, this.newAgent.prenom)){
                    createAgent(this.newAgent)
                    this.newAgent = { 
                        nom: "",
                        prenom: "",
                        dateNaissance: "",
                        specialite: "",
                        canton: "",
                        contact: "",
                        service: ""
                    }
                    showSuccessMessage("Agent ajouté avec succès!")

                }else{
                    showErrorMessage("Cet agent est déjà dans la base!")
                }
            }else{
                // envoyer un message d'erreur
                showErrorMessage("Veillez remplir tous les champs!")
            }
        },
        
        //routage
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