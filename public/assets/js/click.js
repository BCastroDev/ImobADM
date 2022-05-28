function openModal(this) {
    console.log(this)
    
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal

  var Nome = button.data('imovelnome')
  var Id = button.data('imovelid')
    var Valor= button.data('imovelvalor') // Extract info from data-* attributes
// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + Nome)
  modal.find('.modal-body input').val(Id)
  modal.find('modal-body textarea').val(Valor)
})}