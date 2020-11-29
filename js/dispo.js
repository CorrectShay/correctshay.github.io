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
        console.log(`${doc.id} => ${doc.data()}`);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
    // Loop through each object in the dispo template
    for (i = 0; i <= dispoTemplate.length -1; i++) {
        
        // Get each object in numberical order and append to the table
        myObj = dispoTemplate[i];

        newRow = `
                <tr id="${myObj.id}">
                    <td class="dispoID">${myObj.id}</td>
                    <td class="role">${myObj.role}</td>
                    <td class="icp">${myObj.icp}</td>
                    <td class="monday">${myObj.shiftLabel}</td>
                    <td class="tuesday">${myObj.shiftLabel}</td>
                    <td class="wednesday">${myObj.shiftLabel}</td>
                    <td class="thursday">${myObj.shiftLabel}</td>
                    <td class="friday">${myObj.shiftLabel}</td>
                    <td class="saturday">${myObj.shiftLabel}</td>
                    <td class="sunday">${myObj.shiftLabel}</td>
                </tr>
        `

        $('#weekTable tbody').append(newRow);
    }
});

