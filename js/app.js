shownotes();
//if user added a note than it store in local storage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtitle = document.getElementById('addtitle');
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myobj = {
        txt: addtxt.value,
        title: addtitle.value,
        date: new Date()
    }
    notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    addtitle.value = "";
    console.log(notesobj);
    shownotes();
})
//function
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function (element) {
        html += `<div class="note card my-2 mx-2 card" style="width: 18rem;">        
        <div class="card-body">
        <p class="card-title"> ${element.date}</p>
        <h5 class="card-title"> ${element.title}</h5>
          <p class="card-text">${element.txt}</p>
          <button id="index"onclick="deletenote(this.id)" class="btn btn-primary">Delete note</button>
        </div>
      </div>
      `;
    });
    let noteselem = document.getElementById('notes')
    if (notesobj.length != 0); {
        noteselem.innerHTML = html;
    }
}
//function for delete a note.
function deletenote(index) {
    console.log("i am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } 
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
 }

