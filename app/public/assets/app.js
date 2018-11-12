$('#test').on('click', function() {
    alert('this works');
})


$('#submit').on('click', function(){
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
            $('#question7').val(),
            $('#question8').val(),
            $('#question9').val(),
            $('#question10').val(),

        ]
    }

    $.post('/api/friend', friend, function(result){
        console.log(result)
    })
});