function showSelectedOption() {
    // Use querySelector to find the selected radio button
    const selectedRadio = document.querySelector('input[name="radioOption"]:checked');
    
    // Check if a radio button is selected
    if (selectedRadio) {
      alert('You selected: ' + selectedRadio.value); // Display the selected value
    } else {
      alert('Please select an option'); // Alert if no option is selected
    }
  }