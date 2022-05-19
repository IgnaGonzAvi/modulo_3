$(document).ready(function(){
    $('button').on('click', function(){
        $.getJSON("https://api.chucknorris.io/jokes/random", function(data){
            $('h2').text(data.value);
        }
      

        )
    })
}
)