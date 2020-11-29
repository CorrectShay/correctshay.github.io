var lastUpate

function refreshDispo() {
  var table = document.getElementById("weekTable");
  for (var i = 0, row; row = table.rows[i]; i++) {

    for (var j = 0, col; col = row.cells[j]; j++) {
      
      var dayOfWeek;

      switch (j) {
        case 3:
          //Monday
          dayOfWeek = 'monday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        case 4:
          //Tuesday
          dayOfWeek = 'tuesday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        case 5:
          //Wednesday
          dayOfWeek = 'wednesday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        case 6:
          //Thursday
          dayOfWeek = 'thursday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        case 7:
          //Friday
          dayOfWeek = 'friday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        case 8:
          //Saturday
          dayOfWeek = 'saturday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        case 9:
          //Sunday
          dayOfWeek = 'sunday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        default:
          dayOfWeek = '';
          break;
      }
    }
  }
};

function getShiftData(site) {
  db.collection(`prisons/${site}/shifts`).get().then( (snap) => {
    snap.forEach((doc) => {
      
      console.log(doc);
      
      // Find a <table> element with id="myTable":
      var table = document.getElementById("weekTable");

      // Create an empty <tr> element and add it to the 1st position of the table:
      var row = table.insertRow(-1);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);

      // Add some text to the new cells:
      cell1.innerHTML = doc.id;
      cell2.innerHTML = doc.role;
      cell3.innerHTML = doc.equipment.icp.required ? "Y" : "";
      cell4.innerHTML = !doc.kronos.managedByKronos ? doc.name : ""; // If shift is not managed by kronos return then assigned name
      cell5.innerHTML = !doc.kronos.managedByKronos ? doc.name : "";
      cell6.innerHTML = !doc.kronos.managedByKronos ? doc.name : "";
      cell7.innerHTML = !doc.kronos.managedByKronos ? doc.name : "";
      cell8.innerHTML = !doc.kronos.managedByKronos ? doc.name : "";
      cell9.innerHTML = !doc.kronos.managedByKronos ? doc.name : "";
      cell10.innerHTML = !doc.kronos.managedByKronos ? doc.name : "";
      
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  
});

