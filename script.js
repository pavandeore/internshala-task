$(document).ready(function(){
    
    let id_no = Math.round(Math.random()*500);
    const fetchUrl = `https://picsum.photos/id/${id_no}/info`;
    console.log(fetchUrl);
       $.get(fetchUrl,function(data){
            $(".card-text").append(data.author);
            $("#newUrl").attr("href", data.download_url); 
            $("#card-img").attr("src", data.url); 
       })  
           
})
