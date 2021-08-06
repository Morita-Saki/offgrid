//BackGround animation
particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":40,
			"density":{
				"enable":true,
				"value_area":800
			}
		},
		"color":{
			"value":"#a4a4a4"
		},
		"shape":{
			"type":"edge",
			"stroke":{
				"width":0,
				"color":"#000000"
			},
			"polygon":{
				"nb_sides":5
			},
			"image":{
				"src":"img/github.svg",
				"width":100,"height":100
			}
		},
		"opacity":{
			"value":0.35,
			"random":false,
			"anim":{
				"enable":false,
				"speed":1,
				"opacity_min":0.1,
				"sync":false
			}
		},
		"size":{
			"value":3,
			"random":true,
			"anim":{
				"enable":false,
				"speed":40,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":true,
			"distance":150,
			"color":"#a4a4a4",
			"opacity":0.4,
			"width":1
		},
		"move":{
			"enable":true,
			"speed":6,
			"direction":"none",
			"random":false,
			"straight":false,
			"out_mode":"out",
			"bounce":false,
			"attract":{
				"enable":false,
				"rotateX":600,
				"rotateY":1200}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":true,
				"mode":"repulse"
			},
			"onclick":{
				"enable":true,
				"mode":"push"
			},
			"resize":true
		},
		"modes":{
			"grab":{
				"distance":400,
				"line_linked":{
					"opacity":1
				}
			},
			"bubble":{
				"distance":400,
				"size":40,
				"duration":2,
				"opacity":8,
				"speed":3
			},
			"repulse":{
				"distance":200,
				"duration":0.4
			},
			"push":{
				"particles_nb":4
			},
			"remove":{
				"particles_nb":2
			}
		}
	},
	"retina_detect":true
});

//FirstView title animation
var Obj = {
  loop: false,
  minDisplayTime: 2000,
  initialDelay: 500, 
  autoStart: true,
  in: {
    effect: 'fadeInUp',
    delayScale: 1,
    delay: 100,
    sync: false,
    shuffle: true,
  },
  out: {
  }
}
var element
function RandomInit() {
  element= $(".randomAnime");
  $(element[0]).textillate(Obj);
}
function RandomAnimeControl() {
    var elemPos = $(element[1]).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
      $(element[1]).textillate(Obj);
    }
}

$(window).scroll(function () {
  RandomAnimeControl();
});

$(window).on('load', function () {
  RandomInit(); 
  RandomAnimeControl();
});
//ハンバーガーメニュー
$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});
$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});
//ヘッダースクロール非表示
var beforePos = 0;
function ScrollAnime() {
    var elemTop = $('#information-area').offset().top;
	var scroll = $(window).scrollTop();
    if(scroll == beforePos) {
    }else if(elemTop > scroll || 0 > scroll - beforePos){
		$('#header').removeClass('UpMove');	
		$('#header').addClass('DownMove');
    }else {
        $('#header').removeClass('DownMove');
		$('#header').addClass('UpMove');
    }
    beforePos = scroll;
}
$(window).scroll(function () {
	ScrollAnime();
});
$(window).on('load', function () {
	ScrollAnime();
});
