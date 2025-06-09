let studentInputValues = {
    id: 0,
    name: "",
    age: "",
    address: "",
}

function handelRegisterOnkeyup(e) {
    studentInputValues = {
        ...studentInputValues,
        [e.target.name]: e.target.value,
    }
}

const handleRegisterOnclick = (e) => {
    studentInputValues["id"] = 1;

    let lastStudent = null;
    if(studentList.length > 0) {
        lastStudent = studentList[studentList.length - 1];
        studentInputValues["id"] = lastStudent.id + 1;
    }

    studentList = [...studentList, studentInputValues];
    studentInputValues = {
        id: 0,
        name: "",
        age: "",
        address: "",
    }
    console.log(studentList);
    loadStudentList();
}

function studentRegister() {

    return `
        <div>
            ${studentRegisterInput({type: "text", name: "name", onkeyup: "handelRegisterOnkeyup"})}
            ${studentRegisterInput({type: "text", name: "age", onkeyup: "handelRegisterOnkeyup"})}
            ${studentRegisterInput({type: "text", name: "address", onkeyup: "handelRegisterOnkeyup"})}

            <div>
                <button onclick="handleRegisterOnclick(event)">등록</button>
            </div>
        </div>
    `;
}