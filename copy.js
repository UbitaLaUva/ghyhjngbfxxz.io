function copyLabelText() {
    var labelText = document.getElementById("keyid").innerText;
    navigator.clipboard.writeText(labelText).then(function() {
      console.log('Label text copied to clipboard');
    }, function(err) {
      console.error('Could not copy label text: ', err);
    });
  }