$(document).ready(function () {

    var numero = 0;


    $(".Add").click(function () {

        var objet = $('#item').val();

        if (objet != "") {

            $('#item').val("");

            $(".liste").addClass("jumbotron")

            $("ul").append('<li  class="list-group-item mx-auto pt-3 pl-4 d-flex justify-content-between" style="width: 18rem;" id=objet' + numero + '>' + objet + " <button type='button' class='delete btn btn-danger justify-content-end' id =" + numero + ">" + 'effacer </button>' + '</li>');

            numero++;

            $("#compteur").empty();

            $("#compteur").append(numero);
        }
        else
            alert("Vous devez remplir le champ")


    });

    $(document).on("click", ".delete", function () {

        var id = $(this).attr('id');
        console.log("Vous avez cliqué sur le bouton : " + id);

        $("#objet" + id).remove();

        $("#compteur").empty();

        numero--;

        $("#compteur").append(numero);

        if (numero == 0) {
            $(".liste").removeClass("jumbotron")

        }

    });


});