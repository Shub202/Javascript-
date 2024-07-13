//Object
const myobject = {
    js : 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift : "Switch by Apple"
}

for (const key in myobject) {
    //console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming = ["js", "rb", "py","java","cpp"]

for (const key in programming) {
    //console.log(key);
    console.log(programming[key]);
   
}
    
//*************************For EACH LOOP*******************//
const coding = ["js", "rb", "python","java","cpp"]

//coding.forEach(  function (val) {
            //console.log(val);
//})

//coding.forEach( (item) => {
    //console.log(item);
//})

//function printMe(item){
     //console.log(item);
//}

//coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const mycoding = [
    {
        languagename:"javascript",
         languageFilename :"js"
        },
        {
            languagename:"java",
             languageFilename :"java"
            },
            {
                languagename:"python",
                 languageFilename :"py"
                },
]
mycoding.forEach((item)=>{
    console.log(item.languagename);
})