
import { displayGames } from "./uigame.js";
export class showGameHome {
    constructor(response) {
        this.response = response;
        this.showAllGame(this.response)
        this.catchElementToDetailes()


    }

    showAllGame(data) {
        let cartona = ``;
        data.forEach(el => {
            cartona += `
<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 item" custom-id="${el.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <div class="border rounded-3 overflow-hidden border-dark">
    <div class="">
      <img src="${el.thumbnail}" class="w-100" alt="">
      <div class="caption d-flex justify-content-between align-items-center mt-2 mb-3">
        <h3 class="text-white ps-3">${el.title}</h3>
        <span class="badge text-bg-primary p-2">free</span>
      </div>
      <div class="px-3">
        <span class="text-white text-center opacity-50">${el.short_description.slice(0, 100)}</span>
      </div>
    </div>
    <div class="d-flex justify-content-between border-top border-dark align-items-center text-info py-1">
      <span class="badge badge-color">${el.genre}</span>
      <span class="badge badge-color">${el.platform}</span>
    </div>
  </div>
</div>

                        `

        });
        document.getElementById("data").innerHTML = cartona;


    }
    catchElementToDetailes() {
        this.detailes = Array.from(document.querySelectorAll(".item"));
        this.detailes.forEach((el) => {
            el.addEventListener("click", function (e) {
                let changeId = this.getAttribute("custom-id")

                let data = new displayGames()
                data.showDtails(changeId)
                // el.getAttribute("custom-id"))
            })
        })


    }

}