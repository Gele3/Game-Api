import { displayGames } from './uigame.js';

let show = new displayGames()


$(".nav-link").click(function(){

    $(this).addClass("active")
    $(this).parent().siblings().children().removeClass("active")
})