const yearRange = 200

var student = {
    firstName: "Angelica",
    lastName: "Vengrzhinovskaya",
    patronymic: "Stanislavovna",
    birthday: 2002,
    class: 1,
    maxClass: 11,
    subjects: ["math", "english", "programming"],

    printStudentInfo: function () {
        document.write('<br>')
        document.write(`Name: ${this.lastName}<br>`)
        document.write(`Date of birth: ${this.birthday}<br>`)
        document.write(`Class: ${this.class}<br>`)
        document.write(`Max class: ${this.maxClass}<br>`)
        document.write(`Fav subjects: ${this.subjects}`)

        document.write('<br>')
        this.registration.printRegistrationInfo()
        document.write('<br>')
        this.residence.printResidenceInfo()

        document.write('<br>')
        document.write(JSON.stringify(student))
    },

    setBirthdate: function (newDate) {
        this.birthday = newDate
    },

    upClass: function () {
        if (this.class < this.maxClass) {
            this.class += 1
            alert(`Теперь класс ${this.class}`)
        } else {
            alert("Достигнуть максимальный класс")
        }
    },

    registration: {
        country: "Russia",
        city: "Kemerovo",
        street: "Krasnaya",
        house: "6",
        printRegistrationInfo: function () {
            document.write(`Registration: ${this.country}, ${this.city}, ${this.street} ${this.house}`)
        }
    },

    residence: {
        country: "Russia",
        city: "Kemerovo",
        street: "Sinyaya",
        house: "5",
        printResidenceInfo: function () {
            document.write(`Residence: ${this.country}, ${this.city}, ${this.street} ${this.house}`)
        }
    }
}

function setStudentBirthdateFromInput() {
    var year = Number(document.getElementById("inputYear").value)
    var currentYear = new Date().getFullYear()
    if (year < currentYear - yearRange || year > currentYear) {
        alert("Неправдивый год рождения")
    } else {
        student.setBirthdate(year)
        document.clear()
        student.printStudentInfo()
    }
}

student.printStudentInfo()