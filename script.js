var weatherAPIKey = "166a433c57516f51dfab1f7edaed8413";
var APIKey= "61fec83c505722615ff089ec90d63d94";
var methodSelect;
var searchWord;
var queryURL;
var sortBy;
var formatedDateStart;
var formatedDateEnd;
var gottenInfo;
var capturedResponse;
var fishText  
var articleIndex
// var startingURL = "https://gnews.io/api/v4/search?q=example&token=API-Token"

function deployNewsScrollMock(){

  capturedResponse=
  {
    "totalArticles": 297356,
    "articles": [
    {
    "title": "Vekker oppsikt internasjonalt",
    "description": "Norges protest blir lagt merke til.",
    "content": "Gibraltar - Norge 0-3\nNorge protesterte mot VM i Qatar før kveldens seier mot Gibraltar.\nStåle Solbakken hadde på seg en T-skjorte hvor det sto «Respect on and off the pitch», mens spillerne brukte t-skjorter med «Human rights on and off the pitch» u... [578 chars]",
    "url": "https://www.dagbladet.no/sport/vekker-oppsikt-internasjonalt/73570276",
    "image": "https://www.dagbladet.no/images/73570596.jpg?imageId=73570596&panow=100&panoh=100&panox=0&panoy=0&heightw=100&heighth=100&heightx=0&heighty=0&width=1200&height=630",
    "publishedAt": "2021-03-24T21:46:51Z",
    "source": {
    "name": "Dagbladet.no",
    "url": "https://www.dagbladet.no"
    }
    },
    {
    "title": "Massive container ship blocking Suez Canal paralyses trade for second day",
    "description": "The Ever Given was grounded early Tuesday amid poor visibility caused by a dust storm and wind speeds that reached 40 knots.. Read more at straitstimes.com.",
    "content": "CAIRO (BLOOMBERG) - Tugs and diggers have so far failed to dislodge a massive container ship stuck in the Suez Canal on Wednesday (March 24), increasing the chances of prolonged delays in what is arguably the world’s most important waterway.\nWork to ... [5274 chars]",
    "url": "https://www.straitstimes.com/world/suez-canal-stays-blocked-as-efforts-to-dislodge-stuck-container-ship-continues",
    "image": "https://www.straitstimes.com/s3/files/styles/x_large/public/articles/2021/03/24/ak_eg3_2403.jpg?itok=byer4se2",
    "publishedAt": "2021-03-24T21:42:43Z",
    "source": {
    "name": "The Straits Times",
    "url": "https://www.straitstimes.com"
    }
    },
    {
    "title": "Momentum builds within Liberal party to consider quotas for women even as divisions emerge",
    "description": "Defence industry minister Melissa Price says ‘the time has come’ for some kind of quota system to attract ‘qualified and motivated women’",
    "content": "The federal social services minister, Anne Ruston, has pushed back against growing calls within her own party for the Liberals to adopt a quota system for women, saying politicians should not “dictate” decisions in a democratic party.\nBut the push fo... [5994 chars]",
    "url": "https://www.theguardian.com/australia-news/2021/mar/25/momentum-builds-within-liberal-party-to-consider-quotas-for-women-even-as-divisions-emerge",
    "image": "https://i.guim.co.uk/img/media/c0f355857d161df4f33a95e37e6ff66311c7fe9c/0_65_3320_1993/master/3320.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a1a5792bbfa5168e120bc427ca891822",
    "publishedAt": "2021-03-24T21:39:00Z",
    "source": {
    "name": "The Guardian",
    "url": "https://www.theguardian.com"
    }
    },
    {
    "title": "Målløs Haaland da Norge slo miniputten Gibraltar",
    "description": "Erling Braut Haaland måtte gå målløs av banen da Norge enkelt slo Gibraltar.",
    "content": "Erling Braut Haaland måtte gå målløs av banen da Norge enkelt slo Gibraltar.\nGibraltar – Norge 0–3 (0–2)\nDet ble en frustrerende førsteomgang for landslaget, men like før pause løsnet det endelig.\nGibraltars keeper Dayle Coleing sto som en levende ve... [3793 chars]",
    "url": "https://www.tv2.no/a/13908592/",
    "image": "https://www.cdn.tv2.no/images/13908893.jpg?imageId=13908893&panow=100.00514208145&panoh=51.02813877551&panox=0.0051420814479575&panoy=17.006802721088&heightw=40.77740944206&heighth=100.0073316129&heightx=16.309012875536&heighty=0.0073316129032169&width=1200&height=630",
    "publishedAt": "2021-03-24T21:37:39Z",
    "source": {
    "name": "TV 2",
    "url": "https://www.tv2.no"
    }
    },
    {
    "title": "DOH wants vaccine line-jumpers punished; 5 mayors must explain",
    "description": "The Department of Health (DOH) urged the public on Wednesday to watch closely the vaccination process to make sure that only people on the government’s priority list get shots against COVID-19 as the home affairs office ordered five mayors to explain why they were inoculated ahead of their turn to be vaccinated.",
    "content": "MANILA, Philippines — The Department of Health (DOH) urged the public on Wednesday to watch closely the vaccination process to make sure that only people on the government’s priority list get shots against COVID-19 as the home affairs office ordered ... [7676 chars]",
    "url": "https://newsinfo.inquirer.net/1411062/doh-wants-vaccine-line-jumpers-punished-5-mayors-must-explain",
    "image": "https://newsinfo.inquirer.net/files/2021/03/News135352-620x351.jpg",
    "publishedAt": "2021-03-24T21:34:00Z",
    "source": {
    "name": "INQUIRER.net",
    "url": "https://newsinfo.inquirer.net"
    }
    },
    {
    "title": "Isro’s Chandrayaan-3 launch next year: Govt",
    "description": "The space agency earlier planned to launch the Chandrayaan 3 mission either in late 2020 or early 2021. However, most missions were rescheduled due to the Covid-19 pandemic.",
    "content": "The Indian Space Research Organisation (Isro) plans to launch its third mission to the Moon next year, the government said on Wednesday. In a written response to a question in the Lok Sabha, minister of state for the department of space, Jitendra Sin... [2821 chars]",
    "url": "https://www.hindustantimes.com/india-news/isros-chandrayaan-3-launch-next-year-govt-101616619292766.html",
    "image": "https://images.hindustantimes.com/img/2021/03/24/1600x900/_326c0358-2d6e-11eb-b9a2-d7de0b3760e9_1616621108852.png",
    "publishedAt": "2021-03-24T21:26:40Z",
    "source": {
    "name": "Hindustan Times",
    "url": "https://www.hindustantimes.com"
    }
    },
    {
    "title": "Hernando de Soto",
    "description": "“He logrado hacerlo sin quitarle ninguna vacuna a mis compatriotas”, dijo el candidato presidencial de Avanza País a su llegada a Cusco la tarde de este miércoles.",
    "content": "Conforme a los criterios de Saber más\nLuego de que las especulaciones crecieran en redes sociales, el candidato presidencial Hernando de Soto, de Avanza País, admitió este miércoles que se ha vacunado contra el COVID-19 durante sus recientes viajes a... [6917 chars]",
    "url": "https://elcomercio.pe/politica/elecciones/elecciones-2021-hernando-de-soto-confirma-que-se-vacuno-contra-la-covid-19-en-estados-unidos-avanza-pais-covid-19-noticia/",
    "image": "https://elcomercio.pe/resizer/XEOG-nQdIs57-Q79bfwZxC4UF24=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2KRYGKM3JRCB3FWD3UYQ27NRKM.jpg",
    "publishedAt": "2021-03-24T21:09:34Z",
    "source": {
    "name": "El Comercio Perú",
    "url": "https://elcomercio.pe"
    }
    },
    {
    "title": "Jennifer Lopez og Alex Rodriguez:",
    "description": "Selv om Jennifer Lopez og Alex Rodriguez ikke har endt forholdet, skal de likevel ha sine utfordringer.",
    "content": "Tidligere i mars lyste skjermer verden over opp, da flere nettsteder kunne melde at Jennifer Lopez (51) og forloveden Alex Rodriguez (45) hadde brutt forlovelsen.\nDet viste seg imidlertid ikke å stemme, noe paret selv avkreftet.\n- Alle artiklene stem... [3713 chars]",
    "url": "https://www.seher.no/kjendis/gjor-alt-de-kan/73570236",
    "image": "https://www.seher.no/images/73570440.jpg?imageId=73570440&panow=100.00521284404&panoh=33.950166972477&panox=0.0052128440366909&panoy=5.5045871559633&heightw=100&heighth=100&heightx=0&heighty=0&width=1200&height=630",
    "publishedAt": "2021-03-24T21:08:17Z",
    "source": {
    "name": "Seoghør.no",
    "url": "https://www.seher.no"
    }
    },
    {
    "title": "Virginia Gov. Ralph Northam signs law abolishing death penalty",
    "description": "After centuries of carrying out executions, Virginia on Wednesday became the 23rd state to abolish the death penalty after Gov. Ralph Northam signed historic legislation into law that ends capital punishment in the commonwealth.",
    "content": "Gov. Ralph Northam walks past the holding cells next to the death chamber during a tour at the Greensville Correctional Center prior to signing a bill abolishing the state's death penalty in Jarratt, Virginia, on Wednesday, March 24.\n(CNN) —\nAfter ce... [5319 chars]",
    "url": "https://www.cnn.com/2021/03/24/politics/virginia-governor-signs-law-death-penalty/index.html",
    "image": "https://cdn.cnn.com/cnnnext/dam/assets/210324141323-01-northam-dealth-penalty-bill-0324-super-169.jpg",
    "publishedAt": "2021-03-24T21:04:00Z",
    "source": {
    "name": "CNN",
    "url": "https://www.cnn.com"
    }
    },
    {
    "title": "ההתרסקות של סער מוכיחה: יורשו של נתניהו יגיע מבית",
    "description": "יו\"ר תקווה חדשה, שמאגפת את ראש הממשלה מימין, קיווה לסיים עם יותר משישה מנדטים. מהלך לאיחוד עם בנט היה מעלה את הסיכויים להוצאת נתניהו מבלפור, אך התכתשות ביניהם הביאה לאיבוד קולות. ולמרות הכשלון, ישנה דרך נוספת שיכולה לשנות דרמטית את התמונה",
    "content": "רוב ראשי המפלגות ביקשו אמש (שלישי) להמתין לתוצאות הרשמיות בבחירות לכנסת ה-24, מרביתם גזרו על עצמם שתיקה זמנית אבל אחד מהם כבר הבין שהסיבוב הקרוב מבחינתו נגמר בהפסד. יו\"ר תקווה חדשה, גדעון סער, עמד אתמול בלילה על הבמה במטה המפלגה, והודה כי הייתה לו תק... [739 chars]",
    "url": "https://elections.walla.co.il/item/3425707",
    "image": "https://img.wcdn.co.il/f_auto,w_1200,t_54/ar_1.91,c_fill,g_auto/l_black_line,g_south,w_1.0,h_0.1,fl_relative,o_90/g_south_east,x_15,y_12,l_logo_2020,w_250/3/1/4/8/3148513-46.jpg",
    "publishedAt": "2021-03-24T21:02:20Z",
    "source": {
    "name": "וואלה!",
    "url": "https://elections.walla.co.il"
    }
    }
    ]
    }


setTitles()

}




function searchNews(){

  methodSelect=$(".selectionMethod").val();
  searchWord=$("#searchWord").val().replace(" ","");
  console.log(searchWord);
  formatedDateStart=$("#publicationDateSearchStart").val();
  formatedDateEnd=$("#publicationDateSearchEnd").val();
  sortBy = $(".sortBySelection").val();

  if(searchWord&&formatedDateStart&&formatedDateEnd){
    queryURL= "https://newsapi.org/v2/everything?"+ methodSelect +"="+searchWord+"&from="+ formatedDateStart+"&to="+ formatedDateEnd+"&sortBy="+ sortBy +"&apiKey=" + APIKey;}
  else if(searchWord&&formatedDateStart){
    queryURL= "https://newsapi.org/v2/everything?"+ methodSelect +"="+searchWord+"&from="+ formatedDateStart+"&sortBy="+ sortBy +"&apiKey=" + APIKey;}
  else if(searchWord){
    queryURL="https://newsapi.org/v2/everything?"+ methodSelect +"="+searchWord+"&sortBy="+ sortBy + "&apiKey=" + APIKey;}
  else{queryURL="https://newsapi.org/v2/everything?"+methodSelect+"="+"USA"+"&sortBy="+sortBy+"&apiKey="+APIKey;};
// deployNewsScroll();
}

function searchNewsInitial(){
    queryURL = "https://gnews.io/api/v4/top-headlines?&token="+APIKey
  
//   methodSelect=$(".selectionMethod").val();
//   searchWord=$("#searchWord").val().trim("");
//   formatedDateStart=$("#publicationDateSearchStart").val();
//   formatedDateEnd=$("#publicationDateSearchEnd").val();
//   sortBy = $(".sortBySelection").val();

//   if(searchWord&&formatedDateStart&&formatedDateEnd){
//     queryURL= "https://newsapi.org/v2/everything?"+ methodSelect +"="+searchWord+"&from="+ formatedDateStart+"&to="+ formatedDateEnd+"&sortBy="+ sortBy +"&apiKey=" + APIKey;}
//   else if(searchWord&&formatedDateStart){
//     queryURL= "https://newsapi.org/v2/everything?"+ methodSelect +"="+searchWord+"&from="+ formatedDateStart+"&sortBy="+ sortBy +"&apiKey=" + APIKey;}
//   else if(searchWord){
//     queryURL="https://newsapi.org/v2/everything?"+ methodSelect +"="+searchWord+"&sortBy="+ sortBy + "&apiKey=" + APIKey;}
//   else{queryURL="https://newsapi.org/v2/everything?"+methodSelect+"="+"USA"+"&sortBy="+sortBy+"&apiKey="+APIKey;};
deployNewsScroll();
}

  function deployNewsScroll(){
      console.log(queryURL)
  $.ajax({
    
    url: queryURL,
    method:"GET"
  }).then(function(response) {
    capturedResponse=response;
    console.log("captured!");
    console.log(capturedResponse);
    setTitles()

}
  )
}

function colorWater(){
// console.log('water!')
  var waters = $('.water')
  // waters.html('')

  for(let i=0;i<waters.length;i++){
    setTimeout(() => {
      
    randNumber=Math.floor(Math.random()*3+1)
    let randIndex= Math.floor(Math.random()*(waters.length-1))
    var waterStripe=$("<div>")
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];}
    randomColor=color;
    waterStripe.css('background-color',randomColor)
    waterStripe.addClass('waterpiece')

          waterStripe.addClass('water'+randNumber)
     
      $(waters[randIndex]).append(waterStripe);
    
    
    
    }, i*100);
  }
  
}
// searchNewsInitial();
deployNewsScrollMock()
colorWater();
  setTimeout(() => {
    setTitles();
    colorWater()
    setTimeout(() => {
      colorWater();
      setTitles();
      
    }, 3000);
    
  }, 3000);

  


function setTitles(){
  
  var waters = $('.waterpiece');
  // console.log(waters)
  // console.log(capturedResponse.articles.length)
  
  for(i=0; i<waters.length;i++){
    var randIndex = Math.floor(Math.random()*(capturedResponse.articles.length-1))

    if(waters[i]&&$(waters[i]).html()==""){
      // console.log(randIndex)
      // console.log(capturedResponse.articles[randIndex])
    $(waters[i]).html('<div class="watertext" value='+randIndex+'>'+capturedResponse.articles[randIndex].title+"</div>")
    }
  }
}

$(document).on('click','.waterpiece',event=>{
  event.preventDefault();
  event.stopPropagation();
  
  console.log('class')
  console.log($(event.target).attr("class"))
  if($(event.target).hasClass('waterpiece')){

    var textSpace = $(event.target).children();
    // console.log('childnews element') 
    // console.log(textSpace);
    textSpace=textSpace[0]
    // console.log(textSpace)
    articleIndex=$(textspace).attr('value')
    console.log('value')
    console.log(articleIndex)
    getFish(textSpace,event)
  }
  else{
    articleIndex=$(event.target).attr('value')
    console.log('value')
    console.log(articleIndex)
    getFish(event.target,event)
    // console.log('event.target')
    // console.log(event.target)
  }
  $(event.target).html('')


})

function getFish(div, event){
  $('.letterBlock').remove()
 var text = $(div).html();
 console.log(text)
  var textArray = text.split('');
  console.log(textArray)
  for(i=0;i<textArray.length;i++){
    var letterBlock=$('<div>');
    letterBlock.text(textArray[i]);
    letterBlock.addClass('letterBlock');
    letterBlock.css('left',event.pageX+5)
    letterBlock.css('top',event.pageY)
    letterBlock.css('transform','translateX('+i*100+'%)')
    $('body').append(letterBlock)
  }
}

$("body").mousemove(event=>{
  event.stopPropagation();
  event.preventDefault();
  
  var blockArray=$('.letterBlock');
  length=blockArray.length;
  // console.log(starArray);
  for(let i=0;i<length;i++){
    var letters = '0123456789ABCDEF';
            var color = '#';
            for (let j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)]}

      setTimeout(() => {
           $(blockArray[i]).attr("style", " top :" + event.pageY + "px; left :" + (event.pageX+5)  + "px; );")  
            $(blockArray[i]).css('transform','translateX('+i*100+'%)')
            $(blockArray[i]).css('background-color',color)

      },i*20);
  }    
})

$('.fishArea').on("click", event=>{
  console.log('deploying news')
  if($(event.target).attr('class')!=='linkB'){
  
  
  event.stopPropagation();
  event.preventDefault();
  $('.fishArea').html('')
  $('.letterBlock').remove();
  var title = capturedResponse.articles[articleIndex].title;
  var image = capturedResponse.articles[articleIndex].image;
  var body = capturedResponse.articles[articleIndex].content;
  var link = capturedResponse.articles[articleIndex].url;
  var sourceName = capturedResponse.articles[articleIndex].source.name
  var sourceURL = capturedResponse.articles[articleIndex].source.url
  var titleDiv = $('<div>')
  titleDiv.addClass('newsTitle')
  titleDiv.text(title)
  var bodyDiv = $('<div>');
  bodyDiv.addClass('newsbody')
  $('.fishArea').append(titleDiv);
  $('.fishArea').append(bodyDiv)
  // setTimeout(() => {
    var imageDiv = $('<img>')
    imageDiv.addClass('newsPic')
    imageDiv.attr('alt','this is the featured image of the news article');
    var articleDiv = $('<p>');
    articleDiv.text(body)
    imageDiv.attr('src', image)
    var link = $('<div>')
    link.addClass('link')
    link.html('go to source : <a class="linkB" href='+sourceURL+'>'+sourceName+'</a>')
    $('.newsbody').append(imageDiv)
    $('.newsbody').append(articleDiv)
    $('.newsbody').append(link)
  // }, 500);
}
    
 


})

// $("#btn1").click(function(){
//   alert("Text: " + $("#test").text());
// });
// $("#btn2").click(function(){
//   var thing = $("<div>")
  
//   $(thing).css("background-color","green")
//   $(thing).text('whatever')
//   $('body').prepend(thing)
// });