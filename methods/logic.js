/**
 * Created by root on 21.04.16.
 */
function addItem(){
    var form = $('#add_form').serialize();
    $.post('/add_item', form,  function(data){
        $('#storage').append(data);
    });

}

$('#add_modal').on('shown.bs.modal', function () {
    $('#name').focus()
})