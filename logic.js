/**
 * Created by root on 21.04.16.
 */
function addItem(){
    var form = $('#add_form').serialize();
    $.get('/add_item', function(data){
        $('#storage').append(data);
    });
    $('#addItem').submit();
    $('#addItem').close();

}

$('#add_modal').on('shown.bs.modal', function () {
    $('#name').focus()
})