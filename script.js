const sub = document.getElementById('Submit')
var people=[]

function DeleteData(personid){
    var newid = personid.replace("delete","")
    console.log(newid)

    var findid = (element) => element.id == newid
    var selectid = people.findIndex(findid)
    console.log(selectid)

    people.splice(selectid, 1)
    localStorage.setItem('people', JSON.stringify(people))
    LoadData()
}

function LoadData(){
    console.log(localStorage.getItem('people'))
    if(localStorage.getItem('people')!=null){
    console.log("Hello World")
    people = JSON.parse(localStorage.getItem('people'))
    var output="";

        people.map((person)=>{
        output += `<tr>
                <td style="width: 20%;">${person.ID}</td>
                <td style="width: 20%;">${person.FirstName}</td>
                <td style="width: 20%;">${person.LastName}</td>
                <td style="width: 20%;">${person.Age}</td>
                <td style="width: 20%;">`
                output+=`<button id="delete${person.ID}" onclick="DeleteData(this.id)">x</button>`
                output+=`</td>
            </tr>`
        })
        var d = document.getElementById('Data')
        d.innerHTML=output
    }
}

function AddData(){
    const fn = document.getElementById('FirstName').value
    const ln = document.getElementById('LastName').value
    const ag = document.getElementById('Age').value

    console.log(`${ln}/${fn}/${ag}`)
    
    let dt = new Date()
    var id = dt.getTime() / 1000

    const person = {
        "ID":id,
        "FirstName":fn,
        "LastName":ln,
        "Age":ag
    }
    people.push(person)
    localStorage.setItem('people',JSON.stringify(people))
    LoadData()
}

sub.addEventListener('click', function(){
    AddData()
});