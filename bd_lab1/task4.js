var students = [
    ["Vengrzhinovskaya", "Angelica", "PI-211", "090303"],
    ["Mustafaev", "Ignat", "PI-211", "090303"],
    ["Abobov", "Aboba", "M-221", "010301"],
    ["Rushechnikova", "Daria", "M-221", "010301"],
    ["Kopitova", "Xenia", "PMI-211", "090302"],
    ["Frog", "Frog", "PMI-211", "090302"]
]

function getStudents() {
    var group = String(document.getElementById("inputGroup").value)
    for (var i = 0; i <= students.length; i++) {
        if (students[i][3] == group) {
            alert(students[i]);
        }
        else {
            console.log(students[i]);
        }
    }
}