const ColorList = [ "black" , "cornflowerblue" , "tomato"]
const Tr = document.getElementById("ChangeColorBtn");
const ColorNamer = document.getElementById("ColorName");

Tr.addEventListener("click", function () {
    const many_color = ColorList.length
    const color_number = Math.random() * many_color;
    const new_colornumber = Math.floor(color_number)
    const color_name = ColorList[new_colornumber]
    ColorNamer.innerHTML = color_name;
    document.body.style.background = color_name;
})