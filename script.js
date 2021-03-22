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
// var startingURL = "https://gnews.io/api/v4/search?q=example&token=API-Token"







function searchNews(){
//   event.stopPropagation();
//   event.preventDefault();
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

    // console.log(response);
 
//     for(var i=0; i<20;i++){
     
//       console.log(capturedResponse)
//     // console.log(sourceTitle[i].textContent)

// }
// setTitles()
}
  )
}

function colorWater(){
console.log('water!')
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
          // console.log(randIndex)

    // if(i==0||i%2==0){
    //   waterStripe.addClass('water1')
    // }
    // else{waterStripe.addClass('water2')}
      $(waters[randIndex]).append(waterStripe);
    
    
    
    }, i*100);
  }
  
}
searchNewsInitial();
  colorWater();


  
  setTimeout(() => {
    colorWater()
    setTimeout(() => {
      colorWater();
      setTitles();
      
    }, 3000);
    
  }, 3000);

  


function setTitles(){
  
  var waters = $('.waterpiece');
  console.log(waters)
  console.log(capturedResponse.articles.length)
  var randIndex = Math.floor(Math.random()*(capturedResponse.articles.length-1))
  
  for(i=0; i<waters.length;i++){
    if(waters[i]){
      console.log(randIndex)
      console.log(capturedResponse.articles[randIndex])
    $(waters[i]).html(capturedResponse.articles[randIndex].title)
    }




  }
}