$(function() {

    //updates the burger with ajax put
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
            location.reload();
        }
    )
    });


    //creates the burger with ajax post
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
                location.reload();
            }
        )
    });

    //deletes the burger with ajax delete
    $(".delete-burger").on("click", function(e){
        var id = $(this).data("burgerid");
        $.ajax("/api/burgers/"+id, {
            type:"Delete"
        }).then(
            function(){
                location.reload();
            }
        );
    });

})