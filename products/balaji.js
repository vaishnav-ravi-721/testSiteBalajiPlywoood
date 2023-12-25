function showItems() {
  let itemList = Object.keys(PRODUCTS) 
  console.log(itemList);

  let html = "<table id='myTable'>"
  //making table of items automatic
      setTimeout(() => {
        for(let i = 0;i < itemList.length;i++){
          html += `<tr class="productList">`;
          html += `<td class="imageTd"><img class='product-img' src="${PRODUCTS[itemList[i]]["image"]}"></td>`;
          html += "<td class='detailTd'>"
          html += `<p class="productName">${itemList[i]}</p>`
          html += `<p class="productDetails"> <b>Price</b> : <span style="color:lightgreen;">${PRODUCTS[itemList[i]]["price"]}/${PRODUCTS[itemList[i]]["unit"]}<span></p>`
          html += `<p class="productDetails"><b>Packing</b> : ${PRODUCTS[itemList[i]]["packing"]}</p>`;
          html += `<p class="productDetails"><b>Brand</b> : ${PRODUCTS[itemList[i]]["brand"]}</p>`;
          html += `<p class="productDetails"><b>inStock</b> : ${PRODUCTS[itemList[i]]["inStock"]}</p>`;
          html += "</td>";
          html += "</tr>"; 
          console.log(PRODUCTS[itemList[i]]["image"])   
      }
      document.getElementById("itemContainer").innerHTML = html;
      },500);

}

/*function filterItems(){
  let getInput = document.getElementById("takeInput")
  let productItem = Object.keys(PRODUCTS)
  for(let x = 0;x < productItem.length;x++){

  }  
}*/

//search items or filter items
function filterItems() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("takeInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1].getElementsByTagName("p")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
  console.log("working")
}



// hide navigation bar on scroll
let lastScrollTop = 0;
let nav_bar = document.getElementById("searchItem");
window.addEventListener("scroll",() => {
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        nav_bar.style.top = "-100px";
    }else{
        nav_bar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})

/*

*/