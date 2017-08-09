var userID = "";
var HeroUrl = "https://overwatch-api.net/api/v1/hero/"

$.ajax({
  url: HeroUrl,
  success: function(Data){
  console.log(Data);
  }
});