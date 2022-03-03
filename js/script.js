function Book (title, author,isbn){
    this.title= title; 
    this.author = author;
    this.isbn = isbn
}

function UI(){}

UI.prototype.addBookToList =function (book){
    
    const list = document.getElementById("book-list"); 
    const row = document.createElement("tr"); 
   




    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td> <a href="#" class="delete">x<a/></td>   
    `;

    list.appendChild(row);
    
    document.querySelector(".delete").addEventListener("click", (e)=> {
        row.remove();
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
    }, 3000
    )
}





UI.prototype.clearFields = function(){
    document.getElementById("title").value ="";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
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

    

    e.preventDefault();
});
