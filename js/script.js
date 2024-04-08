/*

Author: Eduardo Magaldi

*/

// if (
//   window.location.href.match(/english.html/gi) ||
//   window.location.href.match(/eng/gi)
// ) {
//   var html_port =
//     '<div class="list_carousel responsive" > <ul id="lista-jobs">  <li> <a class="adicione"> <img class="portfolio" src="/imagens/print-add.jpg" alt="http://www.clinicamedservice.com.br"/> </a> </li>  <li> <a target="_blank" href="http://www.clinicamedservice.com.br"> <img class="portfolio" src="/imagens/print-medservice.jpg" alt="http://www.clinicamedservice.com.br"/> <span class="wrap"> <span class="freelancer menor">Freelancer</span> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> <span class="programacao maior"><img class="icon" src="/imagens/icon-code.png" alt=""/><span>Code</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.bm-group.com.br"> <img class="portfolio" src="/imagens/print-bmgroup.jpg" alt="http://www.bm-group.com.br"/> <span class="wrap"> <span class="freelancer menor">Freelancer</span> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> <span class="programacao maior"><img class="icon" src="/imagens/icon-code.png" alt=""/><span>Code</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.mkcomex.com"> <img class="portfolio" src="/imagens/print-mk.jpg" alt="http://www.mkcomex.com"/> <span class="wrap"> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.authosp.com.br"> <img class="portfolio" src="/imagens/print-authosp.jpg" alt="http://www.authosp.com.br"/> <span class="wrap"> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.clinicamedservice.com.br"> <img class="portfolio" src="/imagens/print-medservice.jpg" alt="http://www.clinicamedservice.com.br"/> <span class="wrap"> <span class="freelancer menor">Freelancer</span> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> <span class="programacao maior"><img class="icon" src="/imagens/icon-code.png" alt=""/><span>Code</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.bm-group.com.br"> <img class="portfolio" src="/imagens/print-bmgroup.jpg" alt="http://www.bm-group.com.br"/> <span class="wrap"> <span class="freelancer menor">Freelancer</span> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> <span class="programacao maior"><img class="icon" src="/imagens/icon-code.png" alt=""/><span>Code</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.mkcomex.com"> <img class="portfolio" src="/imagens/print-mk.jpg" alt="http://www.mkcomex.com"/> <span class="wrap"> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.authosp.com.br"> <img class="portfolio" src="/imagens/print-authosp.jpg" alt="http://www.authosp.com.br"/> <span class="wrap"> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> </span> </a> </li>  </ul>  <div class="clearfix"></div>  <a id="prev" class="arrow" href="#"></a> <a id="next" class="arrow" href="#"></a> </div>';
// } else {
//   var html_port =
//     '<div class="list_carousel responsive" > <ul id="lista-jobs">  <li> <a class="adicione"> <img class="portfolio" src="/imagens/print-adicione.jpg" alt="http://www.clinicamedservice.com.br"/> </a> </li>  <li> <a target="_blank" href="http://www.clinicamedservice.com.br"> <img class="portfolio" src="/imagens/print-medservice.jpg" alt="http://www.clinicamedservice.com.br"/> <span class="wrap"> <span class="freelancer menor">Freelancer</span> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> <span class="programacao maior"><img class="icon" src="/imagens/icon-code.png" alt=""/><span>Programa&ccedil;&atilde;o</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.bm-group.com.br"> <img class="portfolio" src="/imagens/print-bmgroup.jpg" alt="http://www.bm-group.com.br"/> <span class="wrap"> <span class="freelancer menor">Freelancer</span> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> <span class="programacao maior"><img class="icon" src="/imagens/icon-code.png" alt=""/><span>Programa&ccedil;&atilde;o</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.mkcomex.com"> <img class="portfolio" src="/imagens/print-mk.jpg" alt="http://www.mkcomex.com"/> <span class="wrap"> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.authosp.com.br"> <img class="portfolio" src="/imagens/print-authosp.jpg" alt="http://www.authosp.com.br"/> <span class="wrap"> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.clinicamedservice.com.br"> <img class="portfolio" src="/imagens/print-medservice.jpg" alt="http://www.clinicamedservice.com.br"/> <span class="wrap"> <span class="freelancer menor">Freelancer</span> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> <span class="programacao maior"><img class="icon" src="/imagens/icon-code.png" alt=""/><span>Programa&ccedil;&atilde;o</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.bm-group.com.br"> <img class="portfolio" src="/imagens/print-bmgroup.jpg" alt="http://www.bm-group.com.br"/> <span class="wrap"> <span class="freelancer menor">Freelancer</span> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> <span class="programacao maior"><img class="icon" src="/imagens/icon-code.png" alt=""/><span>Programa&ccedil;&atilde;o</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.mkcomex.com"> <img class="portfolio" src="/imagens/print-mk.jpg" alt="http://www.mkcomex.com"/> <span class="wrap"> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> </span> </a> </li>  <li> <a target="_blank" href="http://www.authosp.com.br"> <img class="portfolio" src="/imagens/print-authosp.jpg" alt="http://www.authosp.com.br"/> <span class="wrap"> <span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span> </span> </a> </li>  </ul>  <div class="clearfix"></div>  <a id="prev" class="arrow" href="#"></a> <a id="next" class="arrow" href="#"></a> </div>';
// }

/*
http://www.iwebtool.com/html_optimizer

<div class="list_carousel responsive" >
	<ul id="lista-jobs">

		<li>
			<a class="adicione">
				<img class="portfolio" src="/imagens/print-adicione.jpg" alt="http://www.clinicamedservice.com.br"/>
			</a>
		</li>

		<li>
			<a target="_blank" href="http://www.clinicamedservice.com.br">
				<img class="portfolio" src="/imagens/print-medservice.jpg" alt="http://www.clinicamedservice.com.br"/>
				<span class="wrap">
					<span class="freelancer menor">Freelancer</span>
					<span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span>
					<span class="programacao maior"><img class="icon" src="/imagens/icon-code.png" alt=""/><span>Programa&ccedil;&atilde;o</span></span>
				</span>
			</a>
		</li>

		<li>
			<a target="_blank" href="http://www.bm-group.com.br">
				<img class="portfolio" src="/imagens/print-bmgroup.jpg" alt="http://www.bm-group.com.br"/>
				<span class="wrap">
					<span class="freelancer menor">Freelancer</span>
					<span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span>
					<span class="programacao maior"><img class="icon" src="/imagens/icon-code.png" alt=""/><span>Programa&ccedil;&atilde;o</span></span>
				</span>
			</a>
		</li>

		<li>
			<a target="_blank" href="http://www.mkcomex.com">
				<img class="portfolio" src="/imagens/print-mk.jpg" alt="http://www.mkcomex.com"/>
				<span class="wrap">
					<span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span>
				</span>
			</a>
		</li>

		<li>
			<a target="_blank" href="http://www.authosp.com.br">
				<img class="portfolio" src="/imagens/print-authosp.jpg" alt="http://www.authosp.com.br"/>
				<span class="wrap">
					<span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span>
				</span>
			</a>
	   	</li>

		<li>
			<a target="_blank" href="http://www.clinicamedservice.com.br">
				<img class="portfolio" src="/imagens/print-medservice.jpg" alt="http://www.clinicamedservice.com.br"/>
				<span class="wrap">
					<span class="freelancer menor">Freelancer</span>
					<span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span>
					<span class="programacao maior"><img class="icon" src="/imagens/icon-code.png" alt=""/><span>Programa&ccedil;&atilde;o</span></span>
				</span>
			</a>
		</li>

		<li>
			<a target="_blank" href="http://www.bm-group.com.br">
				<img class="portfolio" src="/imagens/print-bmgroup.jpg" alt="http://www.bm-group.com.br"/>
				<span class="wrap">
					<span class="freelancer menor">Freelancer</span>
					<span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span>
					<span class="programacao maior"><img class="icon" src="/imagens/icon-code.png" alt=""/><span>Programa&ccedil;&atilde;o</span></span>
				</span>
			</a>
		</li>

		<li>
			<a target="_blank" href="http://www.mkcomex.com">
				<img class="portfolio" src="/imagens/print-mk.jpg" alt="http://www.mkcomex.com"/>
				<span class="wrap">
					<span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span>
				</span>
			</a>
		</li>

		<li>
			<a target="_blank" href="http://www.authosp.com.br">
				<img class="portfolio" src="/imagens/print-authosp.jpg" alt="http://www.authosp.com.br"/>
				<span class="wrap">
					<span class="design maior"><img class="icon" src="/imagens/icon-design.png" alt=""/><span>Design</span></span>
				</span>
			</a>
	   	</li>

	</ul>

	<div class="clearfix"></div>

	<a id="prev" class="arrow" href="#"></a>
	<a id="next" class="arrow" href="#"></a>
</div>

*/

// jQuery( function() {

// 	$("#load a").live({
// 		mouseover: function() {
// 			jQuery("#load a").stop(true, false).not(this).not(".arrow").fadeTo("slow", 0.1);
// 			jQuery(this).stop().fadeTo("slow", 1);
// 		},
// 		mouseout: function() {
// 			jQuery("#load a").stop(true, true).not(this).not(".arrow").fadeTo("slow", 1);
// 		}
// 	});

// 	$(".arrow").live({
// 		mouseover: function() {
// 			jQuery("#load a").stop(true, false).not(this).not(".arrow").fadeTo("slow", 1);
// 		}
// 	});

// 	if (!navigator.userAgent.match(/like Mac OS X/i)) {

// 		jQuery("#links a").hover(

// 			function(event){

// 				$(this).find(".img.fade").stop(true, true).fadeOut();

// 				if($(this).hasClass("cms")) {
// 					$(this).find(".linkp").animate({ color: "#AEAEAE" }, 200);
// 				}
// 			},

// 			function(event){

// 				event.preventDefault();
// 				$(this).find(".img").stop(true, true).fadeIn();

// 				if($(this).hasClass("cms")) {
// 					$(this).find(".linkp").animate({ color: "#505050" }, 200);
// 				}
// 		});

// 		jQuery(".dominio").hover(

// 			function(event){
// 				event.preventDefault();
// 				$(".dominio").stop().animate({ color: "#e4e4e4" }, 200);
// 			},

// 			function(event){
// 				event.preventDefault();
// 				$(".dominio").stop().animate({ color: "#0D2D5C" }, 200);
// 				$(".dominio.claro").stop().animate({ color: "#005EEA" }, 200);

// 		});

const $contato = document.querySelector("#contato");

$contato.addEventListener("mouseover", (event) => {
  console.log("event", event);
});

// 		jQuery("a#cms, a#portfolio, a#contato").hover(

// 			function(event){

// 				event.preventDefault();

// 				jQuery(this).stop().animate({ color: "#e4e4e4" }, 200);

// 				var id_link = jQuery(this).attr("id");

// 				jQuery("div." + id_link + " .inner:hidden").siblings().stop(true, true).slideDown(200);

// 			},

// 			function(event){

// 				event.preventDefault();

// 				jQuery(this).stop().animate({ color: "#0D2D5C" }, 200);

// 				var id_link = jQuery(this).attr("id");

// 				jQuery("div." + id_link + " .inner:hidden").siblings().stop(true, true).slideUp(200);

// 		});

// 	}

// 	jQuery("textarea").val(jQuery("textarea").attr("name"));

// 	jQuery('form input, form textarea').focus(function() {

// 		if( jQuery(this).val() == jQuery(this).attr("name") ){
// 			jQuery(this).val('');
// 		}

// 	});

// 	jQuery('form input, form textarea').focusout(function() {

// 		if( jQuery(this).val() == '' ){
// 			jQuery(this).val(jQuery(this).attr("name"));
// 		}

// 	});

// 	jQuery("button").click( function() {

// 		if (window.location.href.match(/english.html/gi)) {

// 			var alerta = "Please fill all fields.";
// 			var arquivo = "http://cms.eduardomagaldi.com.br/enviar-eng.php";

// 		} else {

// 			var alerta = "Por favor preencha todos os campos.";
// 			var arquivo = "http://cms.eduardomagaldi.com.br/enviar.php";

// 		}

// 		var liberar = true;

// 		jQuery("input, textarea").each( function() {

// 			if( jQuery(this).val() == jQuery(this).attr("name") ) {

// 				liberar = false;
// 				return;

// 			}

// 		});

// 		if( liberar == false ) {
// 			alert(alerta);
// 			return;
// 		}

// 		jQuery("form *").hide();

// 		jQuery("form").append("<div class='carregando'></div>");

// 		var nome = jQuery("input#nome").val();
// 		var email = jQuery("input#email").val();
// 		var mensagem = jQuery("#mensagem").val();

// 		jQuery("form").load(arquivo, { nome: nome, email: email, mensagem: mensagem } );

// 	});

// 	function verificar() {

// 		jQuery("input, textarea").each( function() {

// 			if( jQuery(this).val() == jQuery(this).attr("name") ) {
// 				alert(alerta)
// 				var poder = "nao";
// 				return poder;
// 			}

// 			poder = "sim";

// 			return poder;

// 		});

// 	}

// });

window.menu = function menu(id) {
  console.log("menu");

  var id_seletor = "#" + id;

  abrir(id);

  if (jQuery(id_seletor).hasClass("open")) {
    rolar(id);
  }
};

function atalho(id) {
  var id_seletor = "#" + id;

  if (!jQuery(id_seletor).hasClass("open")) {
    abrir(id);
  }

  rolar(id);
}

function abrir(id) {
  var id_seletor = "#" + id;

  jQuery("a#cms, a#portfolio, a#contato").not(id_seletor).removeClass("open");

  if (jQuery(id_seletor).hasClass("open")) {
    jQuery(id_seletor).removeClass("open");
  } else {
    jQuery(id_seletor).addClass("open");
  }

  jQuery("div.conteudo-hover").hide();

  jQuery("div.conteudo.animado .inner:visible").slideUp();
  jQuery("div.animado." + id + " .inner:hidden").slideToggle();

  if (id == "portfolio") {
    jQuery("#load").html(html_port);

    jQuery(".adicione").attr("href", "javascript:atalho('contato');");

    jQuery("#lista-jobs").carouFredSel({
      width: "100%",
      scroll: 2,
      prev: "#prev",
      next: "#next",
      auto: false,
      items: {
        visible: {
          min: 5,
          max: 30,
        },
      },
    });
  }
}

function rolar(id) {
  var aaa = {
    contato: 0,
    cms: 90,
    portfolio: 300,
  };

  var id_seletor = "#" + id;

  var altura = aaa[id];

  $("html, body").animate({ scrollTop: altura }, 800);
}
