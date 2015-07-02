var number = [50000, 30000, 40000, 10000, 20000]//配列

number.sort(
  function (a,b){
    if(a < b)return -1;
    if(a > b)return 1;
    return 0;
  }
);//配列をソート

console.log()

function aaa(index){
  var price = number[index];
  var div = document.createElement("div");
  div.textContent = price + "yen";
  div.classList.add("box" + index);
  return div;
}


function OnButtonClick() {
    target = document.getElementById("output");
    target.innerHTML = document.write(number);

    var i = 0;
    var container = document.querySelector(".contents");
    while(i < number.length){
      var elm = aaa(0);
      container.appendChild(elm);
      i = i + 1;
    }

}
