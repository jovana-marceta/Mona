// const $menu = document.getElementById("menu");
// const $nav = document.getElementById("ham-nav");
const $sidebar = document.getElementById("sidebar");


// function onClickMenu(){
// 	$menu.classList.toggle("change");
// 	$nav.classList.toggle("change");
// }

function showSidebar(){
	$sidebar.classList.toggle("showsidebar");
}

function menuToggle(){
	var nav = document.getElementById('menu-overlay');
	nav.classList.toggle('active');

	var nav = document.getElementById('toggleIcon');
	nav.classList.toggle('active');
}