$(function() {

    $(".devourIt").on("click", function(e){
        var id = $(this).data("burgerid");
        var newDevour = $(this).data("newdevour");
        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/"+id, {
            type:"PUT",
            data: newDevourState
    }).then(
        function(){
            console.log("Devoured burger id ", id);
            location.reload();
        }
    )
    });


    $("#makeBurger").on("submit", function(e){
        e.preventDefault();
        var newBurger = {
            burger_name: $("#bur").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers",{
            type:"POST",
            data: newBurger
        }).then(
            function(){
                console.log("created new burger");
                location.reload();
            }
        )
    });

})