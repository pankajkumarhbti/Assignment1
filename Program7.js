/*13. Write a JavaScript program which compute, the average marks of the following
    students Then, this average is used to determine the corresponding grade.*/

    function Student(name,marks)
    {
        this.name=name;
        this.marks=marks;
    } 

    // var studentMarks=[
    //     new {name="David",marks=80},
    //     new {name="Vinoth",marks=77},
    //     new {name="Divya",marks=88},
    //     new {name="Ishitha",marks=95},
    //     new {name="Thomas",marks=68},
    // ];
    
    var studentMarks1=[
        new Student("David",80),
        new Student("Vinoth",77),
        new Student("Divya",88),
        new Student("Ishitha",95),
        new Student("Thomas",68)
    ];
    var totalOfMarks=0;
    // for(var student in studentMarks1)
    // { console.log(student.name);  
    //     totalOfMarks=totalOfMarks+ parseInt(student.marks);
    // }
    studentMarks1.forEach(function(student){
        totalOfMarks=totalOfMarks+ parseInt(student.marks);
    });    

const averageMarks=totalOfMarks/studentMarks1.length;
console.log(averageMarks);

Student.prototype.Grade=null;
studentMarks1.forEach(function(student){
student.Grade=FindGrade(student.marks);
});

function FindGrade(total)
{
if(typeof total != "number")
return "invalid total" ;
if(total<60)
return "F";
if(total>60 && total<70)
return "D";
if(total>=70 && total<80)
return "C";
if(total>=80 && total<90)
return "B";
if(total>=90 && total<100)
return "F";
}
studentMarks1.forEach(function(student){
    console.log(student.name+" "+student.marks+" "+student.Grade);
}); 



