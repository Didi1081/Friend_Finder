$('#test').on('click', function () {
    alert('this works');
})


$('#submit').on('click', function () {
    var friend = {
        name: $('#name').val(),
        photo: $('#photo').val(),
        scores: [
            $('#question1').val(),
            $('#question2').val(),
            $('#question3').val(),
            $('#question4').val(),
            $('#question5').val(),
            $('#question6').val(),
            // $("#question7").val(),
            // $('#question8').val(),
            // $('#question9').val(),
            // $('#question10').val()

        ]
    }

    var modal = document.getElementById('myModal');

    $.post('/api/friend', friend, function (result) {
        console.log(result, '----------- this is the best match -------------');
        // alert(result.name);
        //  $("#match-name").text(data.name);
        //   $("#match-img").attr("src", data.photo);

        //   // Show the modal with the best match
        //   $("#results-modal").modal("toggle");

        // });

        //modal


        modal.style.display = "block";

        $("#img01").attr("src", "https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/9/9c/Hi_friends.png/revision/latest?cb=20161229005958");
        $("#img02").attr("src", result.photo);

    });
    //end modal test

});
