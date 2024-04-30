//=============THis is for booking nex anf previos

document.addEventListener('DOMContentLoaded', function() {
    var tableData = [
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      },
      {
        lastName: "Parker",
        firstName: "Peter",
        email: "peterparker@gmail.com",
        carName: "Mitsubishi Mirage G4",
        pickupDate: "4-21-24",
        rentDays: 5
      }
      // Add more objects for additional rows if needed
    ];
  
    var tableBody = document.getElementById('table-body');
    var currentPageSpan = document.getElementById('current-page');
    var pageSize = 18; // Number of rows per page
    var currentPage = 1;
  
    function renderTable(page) {
      tableBody.innerHTML = ''; // Clear previous table rows
  
      // Calculate start and end indices for current page
      var startIndex = (page - 1) * pageSize;
      var endIndex = startIndex + pageSize;
  
      // Display rows for current page
      for (var i = startIndex; i < endIndex && i < tableData.length; i++) {
        var rowData = tableData[i];
        var row = document.createElement('tr');
        // Add data to row
        // For example:
        row.innerHTML = `
        <td class="table_lastname">${rowData.lastName}
        </td><td class="table_firstname">${rowData.firstName}</td>
        <td class="table_email">${rowData.email}</td>
        <td class="table_carnmae">${rowData.carName}</td>
        <td class="table_pickupdate">${rowData.pickupDate}</td>
        <td class="table_rentdays">${rowData.rentDays}</td>`;

        tableBody.appendChild(row);
      }
      //to keep track the pages
      currentPageSpan.textContent = 'Page ' + currentPage;
    }
  
    function goToPage(page) {
      currentPage = page;
      renderTable(currentPage);
    }
  
    function goToPreviousPage() {
      if (currentPage > 1) {
        goToPage(currentPage - 1);
      }
    }
  
    function goToNextPage() {
      var totalPages = Math.ceil(tableData.length / pageSize);
      if (currentPage < totalPages) {
        goToPage(currentPage + 1);
      }
    }
  
    // Initial render
    renderTable(currentPage);
  
    // Event listeners for pagination buttons
    document.getElementById('prev-btn').addEventListener('click', goToPreviousPage);
    document.getElementById('next-btn').addEventListener('click', goToNextPage);
  });