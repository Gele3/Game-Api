import { showDetails } from "./details.js";
import { showGameHome } from "./game.js";

 export class displayGames{
    constructor(){ 
           

        this.currentData=Array.from( document.querySelectorAll(".nav-link"))
        this.currentData.forEach((el)=>{
            el.addEventListener("click",(e)=>{
              let changaData= e.target.getAttribute("csutom")
              this.showGame(changaData)
            

            })
        })
        this.showGame("mmorpg")

    }

    async showGame(getData){
        const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8e06eca260msh26be927047e7548p1cac1cjsncddb72ddb661',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        
        const api=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${getData}`, options)
        const respose= await api.json()
        
        let show=new showGameHome(respose)
       
        loading.classList.add("d-none");
      
       

   
        

    }

  async  showDtails(id){
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8e06eca260msh26be927047e7548p1cac1cjsncddb72ddb661',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
        
         const api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
         const response=await api.json()
         loading.classList.add("d-none");
         let show=new showDetails(response)
         console.log(response);
           
    }
    
}