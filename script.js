$(document).ready(function(){
    
    let id_no = Math.round(Math.random()*500);
    const fetchUrl = `https://picsum.photos/id/${id_no}/info`;
    console.log(fetchUrl);
       $.get(fetchUrl,function(data){
            $(".A-text").append(data.author);
            $(".A-id").append(data.id);
            $("#newUrl").attr("href", data.download_url); 
            $("#card-img").attr("src", data.url); 
       })  
           
})
