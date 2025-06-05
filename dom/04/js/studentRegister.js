let studentInputValues = {
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
    studentList = [...studentList, studentInputValues];
    studentInputValues = {
        name: "",
        age: "",
        address: "",
    }
    console.log(studentList);
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