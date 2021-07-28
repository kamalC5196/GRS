function popDop(id,data){
	data = data.split(",");
	$(id+"pdop").html((parseFloat(data[3])).toFixed(2));
	$(id+"hdop").html((parseFloat(data[5])).toFixed(2));
	$(id+"tdop").html((parseFloat(data[2])).toFixed(2));
}

function BRS(data){
	$(".btn-success").css("display","none");
	$("#rx"+data+"B").css("display","inline-block");
}

function popDop1(data){
	data = data.split(",");
	$("#pdop").html((parseFloat(data[3])).toFixed(2));
	checkdop("#pdopp","#pst",data[3]);
	$("#hdop").html((parseFloat(data[5])).toFixed(2));
	checkdop("#hdopp","#vst",data[5]);
	$("#tdop").html((parseFloat(data[2])).toFixed(2));
	checkdop("#tdopp","#tst",data[2]);
    $("#tfom").html((parseInt(data[1])));
	checkdop("#tfomm",0,data[1]);
}

function checkdop(id,stid,dop){
    if(stid==0){
        if(dop<=2){
            $(id).css("border","4px solid #7cfc00");  
        }
        if(dop>2 && dop<=5){
            $(id).css("border","4px solid orange");
        }
        if(dop>5){
            $(id).css("border","4px solid red");   
        }
    }
    else{
        dop = parseFloat(dop);
        if(dop<=5.5){
            $(id).css("border","4px solid #7cfc00");
    //		$(stid).text("Excellent!");
        }
        if(dop>5.5 && dop<9){
            $(id).css("border","4px solid orange"); 
    //		$(stid).text("Good");
        }
        if(dop>=9){
            $(id).css("border","4px solid red");
    //		$(stid).text("Poor!!");
        }
    }
}