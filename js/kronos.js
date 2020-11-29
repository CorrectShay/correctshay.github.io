var selectedFile;
var kronosData;
    
document.getElementById('fileUpload').addEventListener('change', (event) => {
    selectedFile = event.target.files[0];

    if (selectedFile) {
        var fileReader = new FileReader();

        fileReader.onload = (event) => {
            var data = event.target.result;
            var workbook = XLSX.read(data, { type: 'binary'} );

            var sheet = workbook.SheetNames[0];

            kronosData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet],
                {header: [
                    "name",
                    "b",
                    "c",
                    "d",
                    "e",
                    "rank",
                    "g",
                    "h",
                    "i",
                    "monday",
                    "k",
                    "l",
                    "m",
                    "tuesday",
                    "o",
                    "p",
                    "q",
                    "wednesday",
                    "s",
                    "t",
                    "thursday",
                    "v",
                    "w",
                    "friday",
                    "y",
                    "z",
                    "aa",
                    "saturday",
                    "ac",
                    "ad",
                    "ae",
                    "sunday",
                    "ag"
                ], range:10});  
            
            refreshDispo();
            
            var noKronos = document.getElementById('noKronosData');
            var haveKronos = document.getElementById('haveKronosData');
            noKronos.classList.add('collapse');
            haveKronos.classList.remove('collapse');
        };
        fileReader.readAsBinaryString(selectedFile);
    }
});

function kronosFind(dayOfWeek, searchString) {
    // Check Kronos Data exists and is not null
    if (kronosData && searchString !== "") {
        let result = kronosData.find(x => x[dayOfWeek] && String(x[dayOfWeek]).includes(searchString));
        
        return result ? result.name : "Not Found"
    } else if (searchString === "") {
        return ""
    } else {
        return "No Kronos Data"
    }
}
