//

const ColorList = [ "black" , "cornflowerblue" , "tomato"]
const Tr = document.getElementById("ChangeColorBtn");
const ColorNamer = document.getElementById("ColorName");

Tr.addEventListener("click", function () {
    const manycolor = ColorList.length
    const colornumber = Math.random() * manycolor;
    const colorn2umber = Math.floor(colornumber)
    const colorname = ColorList[colorn2umber]
    ColorNamer.innerHTML = colorname;
    console.log(colorname)
    document.body.style.background = colorname;
})
