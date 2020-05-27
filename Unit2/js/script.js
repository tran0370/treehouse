/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Create a variable to capture the UL with all the students
const studentsList = document.querySelector(".student-list");
// console.log.log(studentsList);

// Created a variable to select each student independently
const student = studentsList.children;
// console.log(student[1]);

// Create a variable to limit the number of students seen
const studentPerPage = 10;

// Create variable to define the container of the page
const pageContainer = document.querySelector(".page");
// console.log(pageContainer);

function tester() {
  console.log("hello");
}

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.
   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

function showPage(student, page) {
  let startIndex = page * 10 - 10;
  let endIndex = page * 10;
  /** LOOP OVER STUDENT ITEMS TO DISPLAY THE RIGHT AMOUNT OF ITEMS PER PAGE(10 ITEMS) AND HIDE THE EXCES   */
  for (let i = 0; i < student.length; i++) {
    if (i >= startIndex && i < endIndex) {
      student[i].style.display = "";
    } else {
      student[i].style.display = "none";
    }
  }
}

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

function addPageLinks(student) {
  const paginationDiv = document.createElement("div");
  paginationDiv.className = "pagination";
  pageContainer.appendChild(paginationDiv); // global variable at the top
  const paginationUl = document.createElement("ul");
  paginationDiv.appendChild(paginationUl);
  const numberOfPages = student.length / studentPerPage;

  // console.log(numberOfPages);

  for (let i = 0; i < numberOfPages; i++) {
    const paginationLi = document.createElement("li");
    const paginationLink = document.createElement("a");
    paginationLink.href = "#";
    paginationLink.innerHTML = i + 1;
    paginationUl.appendChild(paginationLi);
    paginationLi.appendChild(paginationLink);

    paginationLink.addEventListener("click", (e) => {
      let paginationLinks = document.querySelectorAll(".pagination ul li a");
      for (i = 0; i < paginationLinks.length; i++) {
        paginationLinks[i].className = "";
      }
      // tagName requires ALL CAPS
      if (e.target.tagName === "A") {
        e.target.className = "active";
        showPage(student, paginationLink.textContent);
      }
    });
  }
}

// Remember to delete the comments that came with this file, and replace them with your own code comments.

//----------------------------

showPage(student, 1); /*** CALLED TO PRINT THE FIRST PAGE 0-9 */
addPageLinks(student);
