const shiftModal = document.getElementById('shiftModal');
var currentSite
var currentSiteUnits = []
var lastUpate

function getShiftData(site) {
  //Clear the tabl
  clearWeekTable()

  db.collection(`prisons`).doc(site).get().then( doc => {
      var data = doc.data()
      
      document.getElementById('pageTitle').innerHTML = data.name;
      currentSiteUnits = data.units;
  });

  //Appens the table with shift information from fire store
  db.collection(`prisons/${site}/shifts`).get().then( (snap) => {
    snap.forEach((doc) => {
      
      var shift = doc.data();
      
      // Find a <table> element with id="myTable":
      var table = document.getElementById("weekTableBody");

      // Create an empty <tr> element and add it to the 1st position of the table:
      var row = table.insertRow(-1);
      row.setAttribute('data-id', `${doc.id}`);
      row.setAttribute('data-toggle', 'modal');
      row.setAttribute('data-target', '#shiftModal');

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
      
      // Add some text to the new cells:
      cell1.innerHTML = doc.id;
      cell2.innerHTML = shift.role;
      cell2.className = 'text-left';
      cell3.innerHTML = (shift.kronos && shift.kronos.managedByKronos) ? kronosFind("Mon", shift.kronos.label, shift.kronos.essentialShift) : shift.name; // If shift is not managed by kronos return then assigned name
      cell3.innerHTML === 'Not Found' ? cell3.className = 'bg-danger text-light' : null;
      cell4.innerHTML = (shift.kronos && shift.kronos.managedByKronos) ? kronosFind("Tue", shift.kronos.label, shift.kronos.essentialShift) : shift.name;
      cell4.innerHTML === 'Not Found' ? cell4.className = 'bg-danger text-light' : null;
      cell5.innerHTML = (shift.kronos && shift.kronos.managedByKronos) ? kronosFind("Wed", shift.kronos.label, shift.kronos.essentialShift) : shift.name;
      cell5.innerHTML === 'Not Found' ? cell5.className = 'bg-danger text-light' : null;
      cell6.innerHTML = (shift.kronos && shift.kronos.managedByKronos) ? kronosFind("Thu", shift.kronos.label, shift.kronos.essentialShift) : shift.name;
      cell6.innerHTML === 'Not Found' ? cell6.className = 'bg-danger text-light' : null;
      cell7.innerHTML = (shift.kronos && shift.kronos.managedByKronos) ? kronosFind("Fri", shift.kronos.label, shift.kronos.essentialShift) : shift.name;
      cell7.innerHTML === 'Not Found' ? cell7.className = 'bg-danger text-light' : null;
      cell8.innerHTML = (shift.kronos && shift.kronos.managedByKronos) ? kronosFind("Sat", shift.kronos.label, shift.kronos.essentialShift) : shift.name;
      cell8.innerHTML === 'Not Found' ? cell8.className = 'bg-danger text-light' : null;
      cell9.innerHTML = (shift.kronos && shift.kronos.managedByKronos) ? kronosFind("Sun", shift.kronos.label, shift.kronos.essentialShift) : shift.name;
      cell9.innerHTML === 'Not Found' ? cell9.className = 'bg-danger text-light' : null;
      
      currentSite = site;      
    });
  });
}

function clearWeekTable() {
    var tableBody = document.getElementById("weekTableBody");
  
    return tableBody.innerHTML = ""
}

function submitModal() {
    var description = document.getElementById('shiftDescription');
    var unit = document.getElementById('shiftUnit');
    var label = document.getElementById('kronosLabel');
    var uid = document.getElementById('uid');
    var permanent = document.getElementById('permanentShift');
    var kronos = document.getElementById('kronosShift');
    var essential = document.getElementById('essentialShift');
    var radioCheck = document.getElementById('radioCheck');
    var radioID = document.getElementById('radioID');
    var keysCheck = document.getElementById('keysCheck');
    var keysID = document.getElementById('keysID');
    var icpCheck = document.getElementById('icpCheck');
    var icpID = document.getElementById('icpID');
    var obcCheck = document.getElementById('obcCheck');
    var obcID = document.getElementById('obcID');
    var restraintCheck = document.getElementById('restraintCheck');
    var restraintID = document.getElementById('restraintID');
    var docRef = db.collection(`prisons/${currentSite}/shifts`);  
  
  
    var data = {
        name: permanent.checked ? label.value : '',
        role: description.value,
        unit: unit.value,
        kronos: {
            essentialShift: essential.checked,
            managedByKronos: kronos.checked,
            label: kronos.checked ? label.value : ''
        },
        equipment: {
            radio: {
                required: radioCheck.checked,
                radioid: radioID.value
            },
            keys: {
                required: keysCheck.checked,
                keyid: keysID.value
            },
            icp: {
                required: icpCheck.checked,
                icpid: icpID.value
            },
            obc: {
                required: obcCheck.checked,
                obcid: obcID.value
            },
            restraints: {
                required: restraintCheck.checked,
                restraintid: restraintID.value
            },
            duressAlarm: {
                required: false,
                duressid: ''
            }
        }
    }
    
    writeToDB(uid.value, data);
}

function writeToDB(id, data) {
  if (currentSite) {
      db.collection(`prisons/${currentSite}/shifts`).doc(id).set(data).then( () => {
        console.log('New shift added to DB');
        clearWeekTable();
        getShiftData(currentSite);
      }).catch( (error) => {
        console.error("Error writing to DB:", error);
      });
  } else {
      return console.log('Attempted to create new shift but no current site was loaded')
  }
}

function updateUnitSelect() {
    var unitSelect = document.getElementById('shiftUnit');
  
    // Clear previous entries  
    unitSelect.innerHTML = '';
    
    var defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.text = "Select a unit"
    unitSelect.appendChild(defaultOption);
  
  
    for (var i = 0; i < currentSiteUnits.length; i++) {
        var option = document.createElement('option');
        option.value = currentSiteUnits[i];
        option.text = currentSiteUnits[i];
        unitSelect.appendChild(option);
    }
}

function resetModalForm() {
    var description = document.getElementById('shiftDescription');
    var unit = document.getElementById('shiftUnit');
    var label = document.getElementById('kronosLabel');
    var uid = document.getElementById('uid');
    var permanent = document.getElementById('permanentShift');
    var kronos = document.getElementById('kronosShift');
    var essential = document.getElementById('essentialShift');
    var radioCheck = document.getElementById('radioCheck');
    var radioID = document.getElementById('radioID');
    var keysCheck = document.getElementById('keysCheck');
    var keysID = document.getElementById('keysID');
    var icpCheck = document.getElementById('icpCheck');
    var icpID = document.getElementById('icpID');
    var obcCheck = document.getElementById('obcCheck');
    var obcID = document.getElementById('obcID');
    var restraintCheck = document.getElementById('restraintCheck');
    var restraintID = document.getElementById('restraintID');
    var docRef = db.collection(`prisons/${currentSite}/shifts`);
        
    uid.value = '';
    description.value = '';
    unit.value = 'Select a unit';
    permanent.checked = false;
    kronos.checked = true;
    essential.checked = true;
    label.value = '';

    // Equipment Check Boxes
    radioCheck.checked = false;
    keysCheck.checked = false;
    icpCheck.checked = false;
    obcCheck.checked = false;
    restraintCheck.checked = false;

    // Equipment ID inputs
    radioID.value = '';
    radioID.disabled = true;
    keysID.value = '';
    keysID.disabled = true;
    icpID.value = '';
    icpID.disabled = true;
    obcID.value = '';
    obcID.disabled = true;
    restraintID.value = '';
    restraintID.disabled = true; 
}

document.addEventListener("DOMContentLoaded", () => {
  
});

shiftModal.addEventListener('shown.bs.modal', (e) => {
    var dataID = e.relatedTarget.getAttribute('data-id');
    var description = document.getElementById('shiftDescription');
    var unit = document.getElementById('shiftUnit');
    var label = document.getElementById('kronosLabel');
    var uid = document.getElementById('uid');
    var permanent = document.getElementById('permanentShift');
    var kronos = document.getElementById('kronosShift');
    var essential = document.getElementById('essentialShift');
    var radioCheck = document.getElementById('radioCheck');
    var radioID = document.getElementById('radioID');
    var keysCheck = document.getElementById('keysCheck');
    var keysID = document.getElementById('keysID');
    var icpCheck = document.getElementById('icpCheck');
    var icpID = document.getElementById('icpID');
    var obcCheck = document.getElementById('obcCheck');
    var obcID = document.getElementById('obcID');
    var restraintCheck = document.getElementById('restraintCheck');
    var restraintID = document.getElementById('restraintID');
    var docRef = db.collection(`prisons/${currentSite}/shifts`);
    
    // Update unit select menu
    updateUnitSelect();
  
    docRef.doc(`${dataID}`).get().then( (doc) => {
      if (doc.exists) {
        var data = doc.data();
        
        uid.value = doc.id;
        description.value = data.role;
        unit.value = data.unit;
        permanent.checked = data.kronos.managedByKronos ? false : true;
        kronos.checked = data.kronos.managedByKronos ? true : false;
        essential.checked = data.kronos.essentialShift;
        label.value = data.kronos.managedByKronos ? data.kronos.label : data.name;
        
        // Equipment Check Boxes
        radioCheck.checked = data.equipment.radio.required;
        keysCheck.checked = data.equipment.keys.required;
        icpCheck.checked = data.equipment.icp.required;
        obcCheck.checked = data.equipment.obc.required;
        restraintCheck.checked = data.equipment.restraints.required;
        
        // Equipment ID inputs
        radioID.value = data.equipment.radio.radioid;
        radioID.disabled = !radioCheck.checked;
        keysID.value = data.equipment.keys.keyid;
        keysID.disabled = !keysCheck.checked;
        icpID.value = data.equipment.icp.icpid;
        icpID.disabled = !icpCheck.checked;
        obcID.value = data.equipment.obc.obcid;
        obcID.disabled = !obcCheck.checked;
        restraintID.value = data.equipment.restraints.restraintid;
        restraintID.disabled = !restraintCheck.checked;
        
      } else {
        console.log('Document not found'); 
      }
    }).catch( (error) => {
      console.log("Error getting document: ", error);
    });
});

shiftModal.addEventListener('hidden.bs.modal', (e) => {
    resetModalForm();
});


