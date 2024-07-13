//Object
const myobject = {
    js : 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift : "Switch by Apple"
}

for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
}
    