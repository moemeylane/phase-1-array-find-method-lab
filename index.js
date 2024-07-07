// code your solution here
function superbowlWin(records) {
    const record = [
        { year: "2015", result: "W"},
        { year: "2014", result: "N/A"},
        { year: "2013", result: "L"},
    ] 
 const winRecord = records.find(record => record.result === "W");
    
    if (winRecord) {
        return winRecord.year;
    }
    
    return undefined;
}