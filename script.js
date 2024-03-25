document.getElementById('pizza-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the selected size
    var size = document.getElementById('size').value;

    // Get the selected crust
    var crust = document.getElementById('crust').value;

    // Get all selected toppings
    var selectedToppings = [];
    var checkboxes = document.getElementsByName('topping');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedToppings.push(checkbox.value);
        }
    });

    // Get student ID and name
    var studentID = "200559969"; // Replace "YourStudentID" with your actual student ID
    var studentName = "Alana Mary Shiby"; // Replace "YourName" with your actual name

    // Display the pizza description including student ID and name
    var pizzaDescription = document.getElementById('pizza-description');
    pizzaDescription.innerHTML = `
        <h2>Your Pizza:</h2>
        <p>Size: ${size}</p>
        <p>Crust: ${crust}</p>
        <p>Toppings: ${selectedToppings.join(', ')}</p>
        <p>Student ID: ${studentID}</p>
        <p>Student Name: ${studentName}</p>
    `;
});
