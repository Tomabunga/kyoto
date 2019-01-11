$(function(){

	//グローバルナビゲーション
	$(".btn-gnavi").on("click",function(){
			var rightVal = 0;
			if($(this).hasClass("open")){
				rightVal = -300;
				$(this).removeClass("open");
				} else {
					$(this).addClass("open");
					}
					
				$("#global-navi").stop().animate({
						right:rightVal
					},600);
						});
	// スライドショー
	var imgList = [
		"images/slider/01.jpg",
		"images/slider/02.jpg",
		"images/slider/03.jpg",
		"images/slider/04.jpg",
		"images/slider/05.jpg"
	];

	for(var i = 0; i < imgList.length; i++) {
		var slide = document.createElement("li");
		slide.innerHTML = "<img src='" + imgList[i] + "'>";
		document.getElementsByClassName("slider-inner")[0].appendChild(slide);
		var nav = document.createElement("li");
		nav.setAttribute("data-nav-index", i);
		nav.style.backgroundImage = "url(" + imgList[i] + ")";
		nav.style.width = 100 / imgList.length + "%";
		document.getElementsByClassName("nav")[0].appendChild(nav);
	}
	var length = imgList.length - 1;
	var slider = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
	var nav = document.getElementsByClassName("nav")[0].getElementsByTagName("li");
	var nowIndex = 0;
	var isChanging = false;
	var slideTimer;
	slider[nowIndex].classList.add("show");
	nav[nowIndex].classList.add("current");

	function sliderSlide(val) {
		if(isChanging) return false;
		isChanging = true;
		slider[nowIndex].classList.remove("show");
		nav[nowIndex].classList.remove("current");
		nowIndex = val;
		slider[nowIndex].classList.add("show");
		nav[nowIndex].classList.add("current");
		slideTimer = setTimeout(function(){
			isChanging = false;
		}, 600);
	}
	document.getElementById("arrow-prev").addEventListener("click", function(){
		var index = nowIndex - 1;
		if(index < 0) index = length;
		sliderSlide(index);
	}, false);
	document.getElementById("arrow-next").addEventListener("click", function(){
		var index = nowIndex + 1;
		if(index > length) index = 0;
		sliderSlide(index);
	}, false);

	for(var i = 0; i < nav.length; i++) {
		nav[i].onclick = function(){
			var index = Number(this.getAttribute("data-nav-index"));
			sliderSlide(index);
		};
	

	//ポップアップ用colorbox

$("#section04 a").colorbox({
		
		maxWidth:"50%",
		
		fixed:true,
		transition:"fade"	});

}

	//Google Maps
		 function initMap() {
		var styles = [
	    {
	      stylers: [
	        { hue: "#004cff" },
	        { saturation: 30 }
	      ]
	    }, 
	    {
	      "featureType": "water",
	      "elementType": "geometry",
	      "stylers": [
	        { "color": "#eaedfc" },
	        { "lightness": -10 }
	      ]
	    },{
	      "featureType": "landscape",
	      "elementType": "geometry",
	      "stylers": [
	        { "color": "#eaedfa" },
	        { "lightness": 34 }
	      ]
	    },{
	      "featureType": "road.highway",
	      "elementType": "geometry.fill",
	      "stylers": [
	        { "color": "#eeeeee" },
	        { "lightness": 17 }
	      ]
	    },{
	      "featureType": "road.highway",
	      "elementType": "geometry.stroke",
	      "stylers": [
	        { "color": "#eeeeee" },
	        { "lightness": 29 },
	        { "weight": 0.2 }
	      ]
	    },{
	      "featureType": "road.arterial",
	      "elementType": "geometry",
	      "stylers": [
	        { "color": "#eeeeee" },
	        { "lightness": 18 }
	      ]
	    },{
	      "featureType": "road.local",
	      "elementType": "geometry",
	      "stylers": [
	        { "color": "#eeeeee" },
	        { "lightness": 16 }
	      ]
	    },{
	      "featureType": "poi",
	      "elementType": "geometry",
	      "stylers": [
	        { "color": "#dadff6" },
	        { "lightness": 30 }
	      ]
	    },{
	      "featureType": "poi.park",
	      "elementType": "geometry",
	      "stylers": [
	        { "color": "#cfd6f4" },
	        { "lightness": 24 }
	      ]
	    },{
	      "elementType": "labels.text.stroke",
	      "stylers": [
	        { "visibility": "on" },
	        { "color": "#eeeeee" },
	        { "lightness": 16 }
	      ]
	    },{
	      "elementType": "labels.text.fill",
	      "stylers": [
	        { "saturation": 37 },
	        { "color": "#8687e3" },
	        { "lightness": 4 }
	      ]
	    },{
	      "featureType": "transit",
	      "elementType": "geometry",
	      "stylers": [
	        { "lightness": 17 },
	        { "color": "#dadff6" }
	      ]
	    },{
	      "featureType": "administrative",
	      "elementType": "geometry.fill",
	      "stylers": [
	        { "lightness": 21 },
	        { "color": "#ced2f2" }
	      ]
	    },{
	      "featureType": "administrative",
	      "elementType": "geometry.stroke",
	      "stylers": [
	        { "lightness": 16 },
	        { "weight": 1.2 },
	        { "color": "#ced5f4" }
	      ]
	    },{
	  }
	  ];
	
    var pos = {lat:35.063438 , lng: 135.808633};		//表示させたい場所の経度と緯度を設定
    var opts = {
      zoom: 7,		// 拡大率
	  styles,
	  /*mapTypeId: google.maps.MapTypeId.HYBRID ,*/

      center: new google.maps.LatLng(pos)	// APIで準備されているgoogle.maps.LatLngクラスを使用して、センターの座標を設定
    };
    // APIで準備されているgoogle.maps.Mapクラスを使用して地図の表示領域を設定
    var map = new google.maps.Map(document.getElementById("map"), opts);
	var marker = new google.maps.Marker({
		position:pos,
		map:map
		
		});
		

  }
  initMap();
});