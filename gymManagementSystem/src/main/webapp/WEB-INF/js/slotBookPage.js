function cancelBooking() {
    var selectedRadio = document.querySelector('input[name="selectItem"]:checked');
    if (selectedRadio) {
        document.getElementById('cancelItemId').value = selectedRadio.value;
        document.getElementById('cancelForm').submit();
    } else {
        alert("Please select an item to cancel.");
    }
}