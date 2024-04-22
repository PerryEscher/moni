function addNewMedicine() {
    // Find the div containing the input fields
    var inputDiv = document.getElementById("Input");

    // Create a new div element to hold the new medicine details
    var newMedicineDiv = document.createElement("div");

    // Set the id of the new div dynamically based on the existing number of medicine details
    var lastId = inputDiv.children.length - 1;
    var newId = "id" + (lastId + 1);
    newMedicineDiv.id = newId;

    // Add the HTML content for the new medicine details
    newMedicineDiv.innerHTML = `
        <select name="AfterEatOrBeforeEat">
            <option value="AfterEat">After Eat</option>
            <option value="BeforeEat">Before Eat</option>
        </select>
        <br>
        <label for="MedicineName">Medicine Name :</label>
        <input type="text" name="MedicineName" placeholder="MedicineName">
        <br>
        <label for="Rate">Rate :</label>
        <input type="number" value="17">
        <br>
        <label for="Course Day">Course Day :</label>
        <input type="text" value="Continue"  placeholder="Number Of Course Day">
        <br>
        <input type="number" value="0" name="Morning" placeholder="At Morning" class="Medi">
        +
        <input type="number" value="0" name="Afternoon" placeholder=" At Afternoon" class="Medi">
        +
        <input type="number" value="0" name="Night" placeholder="At Night" class="Medi">
        <br><br>
    `;

    // Insert the new div before the "Add New" button
    inputDiv.insertBefore(newMedicineDiv, inputDiv.lastElementChild);
}