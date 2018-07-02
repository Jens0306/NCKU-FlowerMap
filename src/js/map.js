///*
import location1 from '../json/location1.json';
import location2 from '../json/location2.json';
import location3 from '../json/location3.json';
import location4 from '../json/location4.json';
import location5 from '../json/location5.json';
import location6 from '../json/location6.json';
//*/
/*
const location1 = require('./location1.json');
const location2 = require('./location2.json');
const location3 = require('./location3.json');
const location4 = require('./location4.json');
const location5 = require('./location5.json');
const location6 = require('./location6.json');
*/
/*
location1 = $.parseJSON(location1);
location2 = $.parseJSON(location2);
location3 = $.parseJSON(location3);
location4 = $.parseJSON(location4);
location5 = $.parseJSON(location5);
location6 = $.parseJSON(location6);
*/
var intro = document.getElementById('Intro');
var flowerName = document.getElementById('flowerName');
var flowerChineseName = document.getElementById('flowerChineseName');
var flowerSeason = document.getElementById('flowerSeason');
var flowerInfo = document.getElementById('flowerInfo');
//var flowerName = document.getElementsByTagName("discript > h1");
var map = document.getElementsByClassName('FlowerMap')[0];

var bar = document.getElementById('sidebar');
var btn = document.getElementById('tbtn');


//street map
var map = L.map('map').setView([22.997212163259757, 120.22078156471254], 15.5);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamVuczAzMDYiLCJhIjoiY2pqMDl0enBvMDY4azNsdW9rdzR0dWZjaSJ9.8vPCsawEcYKn_mB7o-yEAA', {
  maxZoom: 18,
  //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
  //	'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  //	'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(map);

//add some geoJson
/*
var location = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.22013783454896,
          22.998584941078008
        ]
      }
    }
  ]
};
*/
//flower icons
var iconWidth = 30, iconHeight = 28;
var icon1 = new L.Icon({
      iconUrl: "./imgs/icon1.png",
      iconSize: [iconWidth, iconHeight]
    }),
    icon2 = new L.Icon({
      iconUrl: "./imgs/icon2.png",
      iconSize: [iconWidth, iconHeight]
    }),
    icon3 = new L.Icon({
      iconUrl: "./imgs/icon3.png",
      iconSize: [iconWidth, iconHeight]
    }),
    icon4 = new L.Icon({
      iconUrl: "./imgs/icon4.png",
      iconSize: [iconWidth, iconHeight]
    }),
    icon5 = new L.Icon({
      iconUrl: "./imgs/icon5.png",
      iconSize: [iconWidth, iconHeight]
    }),
    icon6 = new L.Icon({
      iconUrl: "./imgs/icon6.png",
      iconSize: [iconWidth, iconHeight]
    });
function basement1(feature, layer) {
  layer.bindPopup("<p>flower1</p>");
  layer .setIcon(icon1);
}
function basement2(feature, layer) {
  layer.bindPopup("<p>flower2</p>");
  layer .setIcon(icon2);
}
function basement3(feature, layer) {
  layer.bindPopup("<p>flower3</p>");
  layer .setIcon(icon3);
}
function basement4(feature, layer) {
  layer.bindPopup("<p>flower4</p>");
  layer .setIcon(icon4);
}
function basement5(feature, layer) {
  layer.bindPopup("<p>flower5</p>");
  layer .setIcon(icon5);
}
function basement6(feature, layer) {
  layer.bindPopup("<p>flower6</p>");
  layer .setIcon(icon6);
}
//geoJson
var flower1 = new L.geoJson(location1, {
      onEachFeature: basement1
    }),
    flower2 = new L.geoJson(location2, {
      onEachFeature: basement2
    }),
    flower3 = new L.geoJson(location3, {
      onEachFeature: basement3
    }),
    flower4 = new L.geoJson(location4, {
      onEachFeature: basement4
    }),
    flower5 = new L.geoJson(location5, {
      onEachFeature: basement5
    }),
    flower6 = new L.geoJson(location6, {
      onEachFeature: basement6
    });


//pop up
var popup = L.popup();

//change geoJson
function changeFlower(iconN) {
  //remove current layer
  if (map.hasLayer(flower1))
    map.removeLayer(flower1);
  else if (map.hasLayer(flower2))
    map.removeLayer(flower2);
  else if (map.hasLayer(flower3))
    map.removeLayer(flower3);
  else if (map.hasLayer(flower4))
    map.removeLayer(flower4);
  else if (map.hasLayer(flower5))
    map.removeLayer(flower5);
  else if (map.hasLayer(flower6))
    map.removeLayer(flower6);
  //add new layer
  switch(iconN) {
    case 1:
    map.addLayer(flower1);
    break;
    case 2:
    map.addLayer(flower2);
    break;
    case 3:
    map.addLayer(flower3);
    break;
    case 4:
    map.addLayer(flower4);
    break;
    case 5:
    map.addLayer(flower5);
    break;
    case 6:
    map.addLayer(flower6);
    break;
  }
}

// variable to define the icon based on the type of point
function getStatoIcon(dat) {
  return  dat === 'f1' ? icon1 :
          dat === 'f2' ? icon2 :
          dat === 'f3' ? icon3 :
          dat === 'f4' ? icon4 :
          dat === 'f5' ? icon5 :
                         icon6;
}
// upload the geojson file with the jQuery method
/*
$.getJSON(location1, function(data) {
	var geojson = L.geoJson(data, {
  		pointToLayer: function (feature, latlng) {
  			// crea un punto e definisce l'icona per ogni punto
    		return L.marker(latlng, {
      			icon: L.icon({
        			iconUrl: getStatoIcon(feature.properties.tipo),
        			iconSize: [24, 28],
        			iconAnchor: [12, 28],
        			popupAnchor: [0, -25]
      			}),
      			//
      			title: feature.properties.tipo,
      			riseOnHover: true
   			});
		},
		onEachFeature: function (feature, layer) {
			layer.bindPopup(feature.properties.tipo);
		}
	});
	geojson.addTo(map);
});
*/


function onMapClick(e) {
  // removes the central point with the popup
  //map.removeLayer(marker);
  // prende le coordinate dall'evento
  var lat = (e.latlng.lat);
  var lng = (e.latlng.lng);
  // defines the popup
  popup
    .setLatLng(e.latlng)
    // create a form within the popup
    .setContent("<form id='add' action='addFlower' method='post'><input type='hidden' name='lat' value="
    	+lat
    	+"><input type='hidden' name='lng' value="
    	+lng
    	+">"
    	+"<input type='radio' name='flower' value='f1' checked/>f1<br>"
    	+"<input type='radio' name='flower' value='f2'/>f2<br>"
      +"<input type='radio' name='flower' value='f3'/>f3<br>"
      +"<input type='radio' name='flower' value='f4'/>f4<br>"
      +"<input type='radio' name='flower' value='f5'/>f5<br>"
      +"<input type='radio' name='flower' value='f6'/>f6<hr>"
    	//+"<input type='submit' style='padding:4px;width:100%;' value='+' /></form>")
      +"<button type='submit' name='submit' style='padding:4px;width:100%;'>+</button></form>")

    .openOn(map);
}
map.on('click', onMapClick);

//ajax to update geoJson
$(document).ready(function() {
  $('form').ajaxForm({
      delegation: true,
      //target:        '#map',   // target element(s) to be updated with server response
      //beforeSubmit:  showRequest,  // pre-submit callback
      success:       showResponse,  // post-submit callback
      //target:        map.addLayer(flower1);
  });
})
/*
function showRequest(formData, jqForm, options) {
    var queryString = $.param(formData);
    alert('About to submit: \n\n' + queryString);
    return true;
}
*/
// post-submit callback
function showResponse(responseText, statusText, xhr, $form) {
  /*
  $.getJSON(responseText[0], function() {
    	changeFlower(responseText[1]);
  });
  */
}
//*/



window.change = async function (id1, id2, id3) {
  var f = document.getElementById(id1);
  var m = document.getElementById(id2);
  var flowerImg = document.getElementById("flowerImg");
  var mapImg = document.getElementById("mapImg");
  var bg = document.getElementsByClassName("layer-bg")[0];
  var herotext = document.getElementById("hero-text");

  herotext.style.display = "none";

  //put away sidebar
  $("#sidebar").toggleClass("active");


  f.style.left = "-1000px";

  m.style = "z-index : 0";
  m.style.display = "block";
  m.style.left = "-600px";
  await delay(280);

  switch (id3) {
    case 'one':
      changeFlower(1);
      bg.style = "background-image : url('./imgs/hero_blur1.jpg')";
      f.style = "background-color : pink";
      flowerImg.src = "./imgs/1.jpg";
      //mapImg.src = "./imgs/map1.png";
      mapImg.alt =
        `
      勝利校區大道
      成功湖畔
      `;
      flowerName.textContent = "Orchid Tree";
      flowerChineseName.textContent = "羊蹄甲";
      flowerSeason.textContent = "Season : Mar ~ May";
      flowerInfo.textContent =
        `
      It is a small to medium-sized tree growing to 10–12 metres (33–39 ft) tall, deciduous in the dry season. The leaves are 10–20 centimetres (3.9–7.9 in) obcordate shaped, long and broad, rounded, and bilobed at the base and apex. The flowers are conspicuous, bright pink or white, 8–12 centimetres (3.1–4.7 in) diameter, with five petals. The fruit is a pod 15–30 centimetres (5.9–11.8 in) long, containing several seeds.
      `;
      //羊蹄甲（學名：Bauhinia variegata）是一種豆科蘇木亞科羊蹄甲屬的有花植物，為一種落葉小喬木，俗稱蘭花木、印度櫻花、南洋櫻花、馬蹄豆、白花羊紫荊；羊蹄甲，中國大陸稱為洋紫荊，港澳稱為宮粉羊蹄甲。原產於中國南部、印度及馬來半島。羊蹄甲於每年3月至5月落葉後開花，花有5枚粉紅色的花瓣，其中1枚有深紅色條紋。而不少人將此花與同屬屬的艷紫荊混淆，主要分別在於後者開花期不同，艷紫荊的開花期為秋天（11月前後）並且在開花時葉茂盛。
      //`;
      break;
    case 'two':
      changeFlower(2);
      bg.style = "background-image : url('./imgs/hero_blur2.jpg')";
      f.style = "background-color : #FFED9F";
      flowerImg.src = "./imgs/2.jpg";
      //mapImg.src = "./imgs/map2.png";
      mapImg.alt =
        `
      航太系館校區外圍</p>
      自強校區面林森路</p>
      小東路, 榕園旁</p>
      力行校區面小東路</p><br><br>
      `;
      flowerName.textContent = "Flamboyanttree";
      flowerChineseName.textContent = "鳳凰花";
      flowerSeason.textContent = "Season : May ~ July";
      flowerInfo.textContent =
        `
      The flowers of Delonix regia are large, with four spreading scarlet or orange-red petals up to 8 cm long, and a fifth upright petal called the standard, which is slightly larger and spotted with yellow and white. They appear in corymbs along and at the ends of branches. The naturally occurring variety flavida (Bengali: Radhachura) has yellow flowers. The pods are green and flaccid when young and turn dark-brown and woody. They can be up to 60 cm long and 5 cm wide. The seeds are small, weighing around 0.4 g on average. The compound (doubly pinnate) leaves have a feathery appearance and are a characteristic light, bright green. Each leaf is 30–50 cm long with 20 to 40 pairs of primary leaflets or pinnae, each divided into 10–20 pairs of secondary leaflets or pinnules.
      `;
      /*
      `
      鳳凰木因鮮紅或橙色的花朵配合鮮綠色的羽狀複葉，被譽為世上最色彩鮮艷的樹木之一。由於樹冠橫展而下垂，濃密闊大而招風，在熱帶地區擔任遮蔭樹的角色。鳳凰木種子吸了六日水的種子廈門鼓浪嶼的一株鳳凰木鳳凰木植株高大，可達20公尺以上。性喜高溫、多日的環境，必需在陽光充足處方能繁茂生長。花大呈紅色，連花萼內側都呈血紅色，四瓣伸展約8公分長，第五瓣直立稍大及有黃及白的斑點，雄蕊紅色，花萼腹面深紅色，背面綠色[2]。花序為總狀花序，呈繖房狀排列，花萼和花瓣皆5片，聚生成簇。開花後結出一條條長形豆莢果，長可達60公分，成熟後呈深褐色，木質化，內藏40-50粒細小的種子，每顆平均只有0.4克重，種皮有斑紋，有毒，不可誤食。葉片是二回羽狀複葉，呈羽片對生，15-30對，每羽片有小葉20-40對。小葉為長橢圓形，基部歪斜，葉緣是全緣，葉端圓鈍。葉片是薄紙質，葉面平滑且薄，為青綠色，葉脈則僅中肋明顯。樹形為廣闊傘形，冬天落葉時，多不勝數的小葉如雪花飄落。和許多豆科植物一樣，鳳凰木的根部也有根瘤菌。為了適應多雨的氣候，樹幹基部長有板根出現。鳳凰木適應熱帶氣候，耐旱及可在有鹽分的環境生長。
      `;
      */
      break;
    case 'three':
      changeFlower(3);
      bg.style = "background-image : url('./imgs/hero_blur3.jpg')";
      f.style = "background-color : #E8820C";
      flowerImg.src = "./imgs/3.jpg";
      //mapImg.src = "./imgs/map3.png";
      mapImg.alt =
        `
      林森路</p>
      成杏校區後方</p>
      成功入口</p>
      成功湖畔</p><br><br>
      `;
      flowerName.textContent = "Golden shower";
      flowerChineseName.textContent = "阿勃勒";
      flowerSeason.textContent = "Season : May ~ June";
      flowerInfo.textContent =
        `
      The golden shower tree is a medium-sized tree, growing to 10–20 m (33–66 ft) tall with fast growth. The leaves are deciduous, 15–60 cm (5.9–23.6 in) long, and pinnate with three to eight pairs of leaflets, each leaflet 7–21 cm (2.8–8.3 in) long and 4–9 cm (1.6–3.5 in) broad. The flowers are produced in pendulous racemes 20–40 cm (7.9–15.7 in) long, each flower 4–7 cm (1.6–2.8 in) diameter with five yellow petals of equal size and shape. The fruit is a legume, 30–60 cm (12–24 in) long and 1.5–2.5 centimetres (0.59–0.98 in) broad, with a pungent odor and containing several seeds. The tree has strong and very durable wood, and has been used to construct "Ahala Kanuwa", a place at Adams Peak, Sri Lanka, which is made of Cassia fistula (ahala, ehela, or aehaela, ඇහැල in Sinhala) heartwood.
      `;
      /*
      `
      生長快速之陽性樹，性喜溫暖、日照充足、排水良好 之土壤，不耐霜害。冬季落葉讓陽光直射，夏季則有濃濃的樹蔭，可遮蔭乘涼。其最大特色就是先開花後長葉或花芽、葉芽同時生長，鮮 黃花串倒掛樹梢的獨特景觀，遠望像極了風鈴，十分有趣！若微風輕吹，阿勃勒花搖曳 飄下的景緻，就像落下黃金雨一般浪漫！
      `;
      */
      break;
    case 'four':
      changeFlower(4);
      bg.style = "background-image : url('./imgs/hero_blur4.jpg')";
      f.style = "background-color : #A5B0FF";
      flowerImg.src = "./imgs/4.jpg";
      //mapImg.src = "./imgs/map4.png";
      mapImg.alt = "力行校區 成功湖畔";
      flowerName.textContent = "Yellow Pui";
      flowerChineseName.textContent = "黃花風鈴木";
      flowerSeason.textContent = "Season : March";
      flowerInfo.textContent =
        `
      H. chrysotrichus grows to a height of 5 to 8 m (15 to 25 ft), sometimes up to 20 m (50 ft), with a spread of 8 to 11 m (25 to 35 ft). It has very showy golden-yellow to red flowers in the spring. These are rich in nectar and thus the tree is a useful honey plant. While it is not especially popular with hummingbirds, some of these – e.g. glittering-bellied emerald (Chlorostilbon lucidus) and white-throated hummingbird (Leucochloris albicollis) – seem to prefer them over the flowers of other Tabebuia species.
      `;
      /*
      `
      黃花風鈴木，落葉喬木，又名「伊蓓樹」，為巴西國花，是一種會隨著 4 季變化而更換風貌的樹，樹高 4~6 公尺最適合觀賞，樹皮有深刻裂紋(紅花風鈴木-樹皮光滑)，掌狀複葉，小葉 5 枚，倒卵形，先端尖，全緣或疏齒緣，全葉被上褐色細茸毛。花冠漏斗形，也像風鈴狀，花緣皺曲，但為兩側對稱花，花色鮮黃。果為長條狀翅果，二裂，18~30 公分，種子具翅。黃金風鈴木，四季各有不同風味，春天約 3 月開花，花季時花多葉少，頗為美麗；夏天長葉結果莢，翅果紛飛；秋天枝葉繁盛，綠意盎然；冬天枯枝落葉，有滄桑之美。
      `;
      */
      break;
    case 'five':
      changeFlower(5);
      bg.style = "background-image : url('./imgs/hero_blur5.jpg')";
      f.style = "background-color : #5B9960";
      flowerImg.src = "./imgs/5.jpg";
      //mapImg.src = "./imgs/map5.png";
      mapImg.alt = "成杏校區自強校區面東豐路";
      flowerName.textContent = "Cotton Tree";
      flowerChineseName.textContent = "木棉";
      flowerSeason.textContent = "Season : Mar ~ Apr";
      flowerInfo.textContent =
        `
      Cup-shaped flowers solitary or clustered, axillary or sub-terminal, fascicles at or near the ends of the branches, when the tree is bare of leaves, an average of 7~11 centimeters wide, 14 centimeters in width, petels up to 12 centimeters in length, calyx is cup-shaped usually 3 lobed, an average of 3~5 centimeters in diameter. Staminal tube is short, more than 60 in 5 bundles. stigma is light red, up to nine centimeters in length, ovary is pink, 1.5~2 centimeters in length, with the skin of the ovary covered in white silky hair at 1mm long. Seeds are numerous, long, ovoid, black or gray in colour and packed in white cotton.
      `;
      /*
      `
      先開花，後長葉。花朵大型，花冠五瓣，倒卵形狀，兩面都有星狀毛，橙黃或橙紅色。花萼黑褐色，革質。木棉花可入藥，把新鮮掉下來的木棉花曬乾，為涼茶五花茶的主要材料之一。花後結橢圓形蒴果，約莫在5月時，果實會裂開，內裡的卵圓形種子連同由果皮內壁細胞延伸而成的白色棉絮會隨風四散。棉絮可用以代替棉花來作棉襖的填充料或織成吉布。種子含20至25%油份，可榨油製成肥皂及機械油；而榨油後的棉餅可作為肥料或家畜飼料。木棉樹樹幹直立有明顯瘤刺；側枝輪生作水平方向開展；掌狀複葉，葉柄很長。木棉外觀多變化：春天時，一樹橙紅；夏天綠葉成蔭；秋天枝葉蕭瑟；冬天禿枝寒樹，四季展現不同的風情。
      `;
      */
      break;
    case 'six':
      changeFlower(6);
      bg.style = "background-image : url('./imgs/hero_blur6.jpg')";
      f.style = "background-color : #A57555";
      flowerImg.src = "./imgs/6.jpg";
      //mapImg.src = "./imgs/map6.png";
      mapImg.alt =
        `
      力行校區</p>
      成杏校區面長榮路</p>
      成功校區總圖旁</p><br><br>
      `;
      flowerName.textContent = " Flame Gold-rain Tree";
      flowerChineseName.textContent = "台灣欒樹";
      flowerSeason.textContent = "Season : July ~ Oct";
      flowerInfo.textContent =
        `
      Koelreuteria elegans, more commonly known as Flamegold rain tree or Taiwanese rain tree, is a deciduous tree 15–17 metres tall endemic to Taiwan. It is widely grown throughout the tropics and sub-tropical parts of the world as a street tree. It flowers in early to mid-summer. Flowers are small, to 20 mm in length, and occur in branched clusters at the stem tips. They are butter-yellow with five petals that vary in length until opening. Each flower contains seven to eight pale yellow stamens with hairy white filaments. The fruit is a brown-purplish three-lobed capsule that splits to reveal a number of black seeds.
      `;
      /*
      `
      台灣欒樹為台灣的特產闊葉樹，喜歡陽光充足的地方。它和荔枝、龍眼是近親，與較多人認識的苦楝，未開花時外形相似，台灣欒樹與苦楝都有一樹的羽狀複葉。 苦楝又名苦苓，屬於楝科，台灣欒樹則屬無患子科，因為形相似，所以有苦苓舅之稱，即苦苓之舅舅也。若不仔細比對，常會錯認舅舅與外甥，從名字也可知道長幼有序，台灣欒樹是台灣原生種。
      `;
      */
      break;
  }
  f.style.display = "flex";
  f.style.transition = "1s";
  await delay(250);
  if (innerWidth > 800)
    f.style.left = "18%";
  else
    f.style.left = "5%";

  await delay(130);
  if (innerWidth > 800)
    m.style.left = "60%";
  else
    m.style.left = "0";
  //m.style.display = "block";
}

function delay(interval) {
  return new Promise((resolve) => {
    setTimeout(resolve, interval);
  });
};

window.gotop = function () {
  //map.style.display = "block";
  var m = document.getElementById('map');

}
