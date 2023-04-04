canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");
mouseEvent="";
color = "black";
width = 2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";

}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle - color;
        ctx.lineWidth - width;
        ctx.moveTo(last_position_of_mouse_x, last_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_mouse_x=current_position_of_mouse_x;
    last_position_of_mouse_y=current_position_of_mouse_y;
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    last_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    last_position_of_mouse_y = e.clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    last_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle - color;
    ctx.lineWidth - width;
    ctx.moveTo(last_position_of_mouse_x, last_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();

    last_position_of_mouse_x = current_position_of_mouse_x;
    last_position_of_mouse_y = current_position_of_mouse_y;
}