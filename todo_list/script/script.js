document.querySelector("#push").onclick=function()
{
   // console.log("click");


   // alert message 
   if(document.querySelector("#newtask input").value ==0) { 
    alert("Please enter a task ");
   } else {
        /*add input task and delet icon */
    document.querySelector("#task").innerHTML +=` 
    <div class="task">
        <span id="taskname">
        ${document.querySelector("#newtask input").value}
        </span>
        
        <button class="delete"> 
        <i class="fa-regular fa-trash-can" style="color: #f00a0a;"></i>
        </button>
    </div>
    `
    // working of delet button
          var current_task = document.querySelectorAll(".delete");
          console.log(typeof current_task);

          for(var i=0; i< current_task.length; i++){
            current_task[i].onclick=function () {
             this.parentNode.remove();
            };
          }

   }
   
};