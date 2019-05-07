var index = 1;

document.getElementById('arrow-left-id').style.visibility = "hidden";

function update(){
	document.getElementById('tutorial-panel').src = "assets/tutorial/"+index+".jpg";
}

function left(){
	index--;
	update();

	document.getElementById('arrow-right-id').style.visibility = "visible";	

	if(index == 1){
		document.getElementById('arrow-left-id').style.visibility = "hidden";			
	} 

}

function right(){
	index++;
	update();

	document.getElementById('arrow-left-id').style.visibility = "visible";

	if(index == 4){
		document.getElementById('arrow-right-id').style.visibility = "hidden";	
	}
}

