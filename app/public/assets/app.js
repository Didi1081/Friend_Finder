$('#test').on('click', function() {
    alert('this works');
})


$('#submit').on('click', function(){
    var friend = {
        name: $('#name').val(),
        photo: $('#photo').val(),
        scores: [
            $('#q1').val(),
            $('#q2').val(),
            $('#q3').val(),
            $('#q4').val(),
            $('#q5').val(),
            $('#q6').val(),
            $('#q7').val(),
            $('#q8').val(),
            $('#q9').val(),
            $('#q10').val(),

        ]
    }

    $.post('/api/friend', friend, function(result){
        console.log(result)
    })
});