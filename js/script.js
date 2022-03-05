// function Book (title, author,isbn){
//     this.title= title; 
//     this.author = author;
//     this.isbn = isbn
// }

// function UI(){}

// UI.prototype.addBookToList =function (book){
    
<<<<<<< HEAD
//     const list = document.getElementById("book-list"); 
//     const row = document.createElement("tr"); 
  
//     row.innerHTML = `
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.isbn}</td>
//     <td> <a href="#" class="delete">x<a/></td>   
//     `;

//     list.appendChild(row);  
    
// };

//show alert
// UI.prototype.showAlert = function(msg, className){
//     const div = document.createElement("div"); 
//     div.className = `alert ${className}`
//     div.appendChild(document.createTextNode(msg));

//     const container = document.querySelector(".container");
//     const form = document.querySelector("#book-form");
//     container.insertBefore(div,form); 
//     setTimeout(function(){
//         document.querySelector('.alert').remove()
//     }, 3000
//     )
// }; 
// UI.prototype.deleteBook = function(target){
//     if (target.className === "delete"){
//         target.parentElement.parentElement.remove();
//     }
// }





// UI.prototype.clearFields = function(){
//     document.getElementById("title").value ="";
//     document.getElementById("author").value = "";
//     document.getElementById("isbn").value = "";
// };


// document.getElementById("book-form").addEventListener("submit", (e)=> {
//     const title = document.getElementById("title").value,
//         author = document.getElementById("author").value,
//         isbn = document.getElementById("isbn").value;

//     const book = new Book (title, author, isbn);
//     const ui = new UI(); 

//     //validation
//     if(title === "" || author==="" || isbn===""){
//         ui.showAlert("Please, fill in all fields!", "error");
//     }else{
//         ui.addBookToList(book); 
//         ui.showAlert("Book is added!", "success")
//         ui.clearFields();
//     }

   
//     e.preventDefault();
// });

// document.getElementById("book-list").addEventListener("click", (e)=> {
//     const ui = new UI();
//     ui.deleteBook(e.target);
//     ui.showAlert("Book is deleted!!!", "success");
//     e.preventDefault();
// })


// ES6 

class Book{
    constructor(title, author,isbn){
    this.title= title; 
    this.author = author;
    this.isbn = isbn
};
};
=======
    const list = document.getElementById("book-list"); 
    const row = document.createElement("tr");  
>>>>>>> 3aeb7e8a54b87027a8017218b63aa488ec279dea

class UI {

    addBookToList(book){
    const list = document.getElementById("book-list"); 
    const row = document.createElement("tr"); 
  
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td> <a href="#" class="delete">x<a/></td>   
    `;

<<<<<<< HEAD
    list.appendChild(row);  
    };

    showAlert(msg, className){
            const div = document.createElement("div"); 
            div.className = `alert ${className}`
            div.appendChild(document.createTextNode(msg));
        
            const container = document.querySelector(".container");
            const form = document.querySelector("#book-form");
            container.insertBefore(div,form); 
            setTimeout(function(){
                document.querySelector('.alert').remove()
            }, 3000
            );    
    }
=======
    list.appendChild(row);
    const delBook = document.querySelector(".delete");
    delBook.addEventListener("click", (e)=> {
        delBook.closest("tr").remove();
    })
};

//show alert
UI.prototype.showAlert = function(msg, className){
    const div = document.createElement("div"); 
    div.className = `alert ${className}`
    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div,form); 
    setTimeout(function(){
        document.querySelector('.alert').remove()
    }, 2000
    )
}

UI.prototype.deleteBook = function(target){
    if (target.className === "delete"){
        target.parentElement.parentElement.remove();
    }
}



>>>>>>> 3aeb7e8a54b87027a8017218b63aa488ec279dea

    deleteBook(target){
        if (target.className === "delete"){
            target.parentElement.parentElement.remove();
        }
    }
    
    clearFields(){
        document.getElementById("title").value ="";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
};

document.getElementById("book-form").addEventListener("submit", (e)=> {
    const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("isbn").value;

    const book = new Book (title, author, isbn);
    const ui = new UI(); 

    //validation
    if(title === "" || author==="" || isbn===""){
        ui.showAlert("Please, fill in all fields!", "error");
    }else{
        ui.addBookToList(book); 
        ui.showAlert("Book is added!", "success")
        ui.clearFields();
    }

<<<<<<< HEAD
   
=======
>>>>>>> 3aeb7e8a54b87027a8017218b63aa488ec279dea
    e.preventDefault();
});

document.getElementById("book-list").addEventListener("click", (e)=> {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert("Book is deleted!!!", "success");
    e.preventDefault();
})
<<<<<<< HEAD
=======

>>>>>>> 3aeb7e8a54b87027a8017218b63aa488ec279dea
