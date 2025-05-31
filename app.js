// app.js

// Wait for the DOM to load before running script
document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("memberForm");
  const tableBody = document.getElementById("memberTableBody");
  const totalMembers = document.getElementById("totalMembers");

  let memberCount = 0;

  form.addEventListener("submit", (e) => {
    e.preventDefault();  // prevent page reload

    // Get input values
    const name = document.getElementById("name").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const dept = document.getElementById("dept").value;
    const batch = document.getElementById("batch").value.trim();
    const bloodGroup = document.getElementById("bloodGroup").value;

    // Validate required fields (basic check)
    if (!name || !studentId || !dept || !batch || !bloodGroup) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create new table row
    const newRow = document.createElement("tr");

    // Set alternating background for rows
    if (memberCount % 2 === 0) {
      newRow.classList.add("bg-gray-100");
    }

    // Populate the row with member data
    newRow.innerHTML = `
      <td class="border p-2">${name}</td>
      <td class="border p-2">${studentId}</td>
      <td class="border p-2">${dept}</td>
      <td class="border p-2">${batch}</td>
      <td class="border p-2">${bloodGroup}</td>
    `;

    // Add the row to the table body
    tableBody.appendChild(newRow);

    // Increase member count and update display
    memberCount++;
    totalMembers.textContent = memberCount;

    // Reset form
    form.reset();
  });

});
