setTimeout(function() {
    $('#ReverseModal').modal('toggle')
   }, 3000)

   $('#myModal').on('shown.bs.modal', function () {
    $('#ReverseModal').trigger('focus')
  })