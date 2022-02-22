//print date with 3 parameters: day, month, year
//always 10 characters "dd/mm/yyyy"

function printDate(day, month, year) {
    let date = String(year);
    date = date.padStart(5, "/");
    date = month + date;
    date = date.padStart(8, "/0");
    date = day + date;
    date = date.padStart(10, "0");
    console.log(date);
}

printDate(1, 12, 1995);