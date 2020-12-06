var selectedFile;
var rosterData = [];
var weekDates;
    
document.getElementById('fileUpload').addEventListener('change', (event) => {
    selectedFile = event.target.files[0];

    if (selectedFile) {
        var fileReader = new FileReader();

        fileReader.onload = (event) => {
            
        var data = event.target.result;
        var workbook = XLSX.read(data, { type: 'binary'} );
        var kronosData;

        var sheet = workbook.SheetNames[0];
        var address_of_cell = 'J10';

        /* Get worksheet */
        var worksheet = workbook.Sheets[sheet];

        /* Find desired cell */
        var cell = worksheet[address_of_cell];

        /* Get the value */
        var cellValue = (cell ? cell.v : undefined);

        var mondayDate = ExcelDateToJSDate(cellValue);
        weekDates = getWeekDates(mondayDate);

        kronosData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {range:8});  

        kronosData.forEach( item => {
            // Gets rid of the garbage from the kronos export and only retains results where the name follows the Lastname, Firstname format
            if (item.Location && /^[A-Za-z0-9_']+\s?,\s?[A-Za-z0-9_']+$/.test(item.Location)) {
                rosterData.push(item);
            }
        })

        console.log(rosterData);
            
        if (currentSite) {
            getShiftData(currentSite);   
        }
            
        var noKronos = document.getElementById('noKronosData');
        var haveKronos = document.getElementById('haveKronosData');
        noKronos.classList.add('collapse');
        haveKronos.classList.remove('collapse');
        };
        fileReader.readAsBinaryString(selectedFile);
    } else {
        window.alert('You must select a site before uploading kronos data');
    }
});

function kronosFind(dayOfWeek, searchString, essential) {
    // Check Kronos Data exists and is not null
    if (rosterData && searchString !== "") {
        let result = rosterData.find(x => x[dayOfWeek] && String(x[dayOfWeek]).includes(searchString));
        
        return result ? result.Location : essential ? 'Not Found' : ''
    } else if (searchString === "") {
        return ""
    } else {
        return "No Kronos Data"
    }
}

function ExcelDateToJSDate(date) {
    return new Date(Math.round((date - 25569)*86400*1000));
  }

function getWeekDates(startDate) {
    // This function returns an array of NZ formatted dates for the week based on the first date in cell J10 on the kronos data export
    if (startDate instanceof Date && !isNaN(startDate.valueOf())) {
        var mon = startDate.getDate();
        var tue = startDate.getDate() + 1;
        var wed = startDate.getDate() + 2;
        var thu = startDate.getDate() + 3;
        var fri = startDate.getDate() + 4;
        var sat = startDate.getDate() + 5;
        var sun = startDate.getDate() + 6;
        var mm = startDate.getMonth();
        var yyyy = startDate.getFullYear();
        var rest = '/' + mm + '/' + yyyy;
        return [mon + rest, tue + rest, wed + rest, thu + rest, fri + rest, sat + rest, sun + rest];
    }
    return "Not a Date"
}
