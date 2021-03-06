function List(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if (this.readyState == 4&&this.status==200){
            var list = JSON.parse(this.responseText);
            // console.log(list);
            var todotab = "<tr style=\"text-align: center;\"><th>Status</th><th>Activities</th><th>Completed</th></tr>";
            for (var i=0;i<list.length;i++){
                if(list[i].completed == true){
                    todotab += "<tr><td><input type=\"checkbox\" name=\"task\" disabled=\"\" checked style=\"margin-left: 40%;\"></td><td>"+ list[i].title +"</td><td>"+list[i].completed+"</td></tr>";
                }
                else{
                    todotab += "<tr><td><input type=\"checkbox\" name=\"task\" onclick=\"TaskStatus()\" style=\"margin-left: 40%;\"></td><td>"+ list[i].title +"</td><td>"+list[i].completed+"</td></tr>";
                }
            }
            document.getElementById("table").innerHTML = todotab;
            let button = document.getElementById("showbtn");
            button.setAttribute("hidden","true");
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

function TaskStatus(){
    var checkboxes = document.querySelectorAll('input:checked');
    // console.log(checkboxes.length);
    var disabledBox = document.querySelectorAll('input:disabled');
    dislength = disabledBox.length;
    const x = dislength + 4;
    // console.log(x);
    var promise = new Promise(function(resolve,reject){
        if(checkboxes.length > x){
            var Ctask = checkboxes.length - dislength;
            resolve("Congrats. "+Ctask+" Tasks have been Successfully Completed");
        }
        else{
            reject("Almost there, Keep Going...");
        }
    })
    promise.then(function(done){
        alert(done);
        // document.querySelectorAll('input[name="task"]').forEach(element => {
        //     element.setAttribute("disabled", "disabled");
        // });
    })
    .catch(function(undone){
        // alert(undone);
    });
}
