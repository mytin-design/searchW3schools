function myFunction() {
    //Declare variables
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myUl');
    li = ul.getElementsByTagName('li');

/*

THIS IS AN ADDITIONAL FEATURE - VIEW IN \buildingprojects\searchEngine\script.js

    //Check if the input is empy
    if(filter.trim() === "") {
        ul.style.display = "none";
        return;
    }else {
        ul.style.display = "block";
    }

    */

    //loop through all list items, and hide those who don't match the search query

    for(i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }else {
            li[i].style.display = "none";
        }

        
    }
}