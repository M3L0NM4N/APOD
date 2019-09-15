var url = "https://api.nasa.gov/planetary/apod?api_key=cY7SDb5mjFHBZgqw9eWnNWNaChrImbn0JGkmhJoD&hd=true";

$.ajax({
  url: url,
  success: function(result){

    alert(result.hdurl);

}
});
