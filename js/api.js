const AGENTDB = "AgentDB"
//retourner la DB local
function getLocalDB(){
    if(!localStorage.getItem(AGENTDB)){
        localStorage.setItem(AGENTDB, JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem(AGENTDB))
}

//fonction de mise a jour de la DB
function updateDB(db){
    localStorage.setItem(AGENTDB, JSON.stringify(db))
}

//fonction d'ajout d'un agent

function createAgent(agent){
    const db = getLocalDB()
    agent.id = Date.now()+""
    db.push(agent)
    updateDB(db)

}
//fonction mettre a jour l'agent
function updateAgent(agent) {
    const db = getLocalDB()
    const updateDb = db.map(function(curAgent){
        if(curAgent.id == agent.id){
            return{
                nom: agent.nom,
                prenom: agent.prenom,
                dateNaissance: agent.dateNaissance,
                specialite: agent.specialite,
                canton: agent.canton,
                service: agent.service,
                contact: agent.contact
            }
        
        }
        return curAgent
    })
    updateDB(updateDb)
}
// fonction supprimer agent
function deleteStudent(agent){
    const db = getLocalDB()
    const updatedDb = db.filter(function(curAgent){
        return curAgent.id != agent.id;
    })

    updateDB(updatedDb)
}

// function recuperer l'agent par rapport à son id
function getAgent(id){
    const db = getLocalDB()
    var filteredDB = db.filter((data)=> data.id == id)
    if(filteredDB.length > 0){
        return filteredDB[0]
    }
    return null
}

// function pour rechercher un agent

function searchAgentByName(name){
    const db = getLocalDB()
    const filteredDb = db.filter((data)=>{
        return data.nom.toLowerCase().includes(name.toLowerCase()) || data.prenom.toLowerCase().includes(name.toLowerCase())
    })

    return filteredDb
}
function checkIfAgentExist(nom, prenom){
    const db = getLocalDB()
    const filteredDb = db.filter((data)=>{
        return data.nom.toLowerCase() == nom.toLowerCase() && data.prenom.toLowerCase() == prenom.toLowerCase()
    })

    return filteredDb.length > 0
}