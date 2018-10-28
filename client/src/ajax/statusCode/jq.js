$.ajax({
  statusCode: {
    404: function() {
      alert( "page not found" );
    }
  }
});
