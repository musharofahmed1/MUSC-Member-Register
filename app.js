document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("memberForm");
  const tableBody = document.getElementById("memberTableBody");
  const totalMembers = document.getElementById("totalMembers");

  let memberCount = 0;

  form.addEventListener("submit", (e) => {
    e.preventDefault();  

    const name = document.getElementById("name").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const dept = document.getElementById("dept").value;
    const batch = document.getElementById("batch").value.trim();
    const bloodGroup = document.getElementById("bloodGroup").value;

  
    if (!name || !studentId || !dept || !batch || !bloodGroup) {
      alert("Registered Successfully");   // Validate required fields 
      return;
    }

    // Create new table row
    const newRow = document.createElement("tr");

    
    if (memberCount % 2 === 0) {
      newRow.classList.add("bg-gray-100"); // Set background for rows
    }

    // inserting data into the row
    newRow.innerHTML = `
      <td class="border p-2">${name}</td>
      <td class="border p-2">${studentId}</td>
      <td class="border p-2">${dept}</td>
      <td class="border p-2">${batch}</td>
      <td class="border p-2">${bloodGroup}</td>
    `;

    // Add the row to the table body using appendChild
    tableBody.appendChild(newRow);

    // Increase member count and update display
    memberCount++;
    totalMembers.textContent = memberCount;

  
    form.reset(); // Clear the form fields
  });

});
