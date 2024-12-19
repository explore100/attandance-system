// Load table data on page load
window.onload = displayTable;
    
// Debounce function to limit the frequency of function calls
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Function to handle form submission
function submitValue() {
    const firstName = document.getElementById('first-input').value;
    const lastName = document.getElementById('last-input').value;
    const dob = document.getElementById('date-input').value;
    const gender = document.getElementById('male-input').checked ? 'Male' : document.getElementById('female-input').checked ? 'Female' : '';
    const fatherName = document.getElementById('father-input').value;
    const motherName = document.getElementById('mother-input').value;
    const contact = document.getElementById('contact-input').value;
    const address = document.getElementById('address-input').value;
    const className = document.getElementById('class-input').value;
    const rollNo = document.getElementById('roll-input').value;

    // Validate inputs
    if (!firstName || !lastName || !dob || !gender || !fatherName || !motherName || !contact || !address || !className || !rollNo) {
        alert('Please fill out all fields.');
        return;
    }

    // Create an object with form data
    const studentData = {
        firstName,
        lastName,
        dob,
        gender,
        fatherName,
        motherName,
        contact,
        address,
        className,
        rollNo
    };

    // Retrieve existing data from localStorage
    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Add new data to the array
    students.push(studentData);

    // Save updated data back to localStorage
    localStorage.setItem('students', JSON.stringify(students));

    // Update the table UI
    displayTable();

    // Clear form inputs
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
}

// Function to display all data from localStorage to the table
function displayTable() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const tableSection = document.getElementById('table-section');
    const table = document.getElementById('data-table');

    table.innerHTML = ""; // Clear any existing rows

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border border-gray-400 px-4 py-2">${student.firstName}</td>
            <td class="border border-gray-400 px-4 py-2">${student.lastName}</td>
            <td class="border border-gray-400 px-4 py-2">${student.dob}</td>
            <td class="border border-gray-400 px-4 py-2">${student.gender}</td>
            <td class="border border-gray-400 px-4 py-2">${student.fatherName}</td>
            <td class="border border-gray-400 px-4 py-2">${student.motherName}</td>
            <td class="border border-gray-400 px-4 py-2">${student.contact}</td>
            <td class="border border-gray-400 px-4 py-2">${student.address}</td>
            <td class="border border-gray-400 px-4 py-2">${student.className}</td>
            <td class="border border-gray-400 px-4 py-2">${student.rollNo}</td>
        `;
        table.appendChild(row);
    });

    if (students.length > 0) {
        tableSection.classList.remove('hidden'); // Show the table if data exists
    } else {
        tableSection.classList.add('hidden'); // Hide the table if no data exists
    }
}

// Function to search data
function searchData() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const table = document.getElementById('data-table');

    table.innerHTML = ""; // Clear existing table rows

    const filteredStudents = students.filter(student => (
        student.firstName.toLowerCase().includes(searchQuery) ||
        student.lastName.toLowerCase().includes(searchQuery) ||
        student.dob.toLowerCase().includes(searchQuery) ||
        student.gender.toLowerCase().includes(searchQuery) ||
        student.fatherName.toLowerCase().includes(searchQuery) ||
        student.motherName.toLowerCase().includes(searchQuery) ||
        student.contact.toLowerCase().includes(searchQuery) ||
        student.address.toLowerCase().includes(searchQuery) ||
        student.className.toLowerCase().includes(searchQuery) ||
        student.rollNo.toLowerCase().includes(searchQuery)
    ));

    if (filteredStudents.length > 0) {
        filteredStudents.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="border border-gray-400 px-4 py-2">${student.firstName}</td>
                <td class="border border-gray-400 px-4 py-2">${student.lastName}</td>
                <td class="border border-gray-400 px-4 py-2">${student.dob}</td>
                <td class="border border-gray-400 px-4 py-2">${student.gender}</td>
                <td class="border border-gray-400 px-4 py-2">${student.fatherName}</td>
                <td class="border border-gray-400 px-4 py-2">${student.motherName}</td>
                <td class="border border-gray-400 px-4 py-2">${student.contact}</td>
                <td class="border border-gray-400 px-4 py-2">${student.address}</td>
                <td class="border border-gray-400 px-4 py-2">${student.className}</td>
                <td class="border border-gray-400 px-4 py-2">${student.rollNo}</td>
            `;
            table.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="10" class="text-center text-red-500 font-bold py-2">No results found</td>`;
        table.appendChild(row);
    }
}

// Attach debounced searchData to the search input
document.getElementById('search').addEventListener('input', debounce(searchData, 300));