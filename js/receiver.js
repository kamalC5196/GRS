function receiver(id,psel){
	$.get("php/logs/"+id+"/dop.php",function(data){
        val = data.split("|");
        diff = parseInt(val[0])-parseInt(val[1]);
        if(diff<3 && diff>=0)
        {
            popDop1(val[2]);
            $.get("php/logs/"+id+"/glgga.php",function(data){
                data = data.split(",");
                $("#glsl").text(data[7]);
                if(data[6][1] == 'A'){
                    glsi.style.stroke="#00e600";
                    glsat.style.fill="#00e600";  
                }
                else{
                    glsi.style.stroke="red";
                    glsat.style.fill="red"; 
                }

                if(psel == 2){
                    latlon(data[2],data[4],data[3],data[5]);
                    $("#Alt").text(data[9]+" M")
                }
                
            });

            $.get("php/logs/"+id+"/gngga.php",function(data){
                data = data.split(",");
                $("#hysl").text(data[7]);
                if(data[6][0] == 'A' || data[6][2] == 'A'){
                    hysi.style.stroke="#00e600";
                    hysat.style.fill="#00e600";  
                }
                else{
                    hysi.style.stroke="red";
                    hysat.style.fill="red"; 
                }


                if(psel == 4){
                    latlon(data[2],data[4],data[3],data[5]);
                    $("#Alt").text(data[9]+" M")
                }
                
            });

            $.get("php/logs/"+id+"/gigga.php",function(data){
                data = data.split(",");
                $("#irsl").text(data[7]);
                if(data[6][2] == 'A'){
                    irsi.style.stroke="#00e600";
                    irsat.style.fill="#00e600";  
                }
                else{
                    irsi.style.stroke="red";
                    irsat.style.fill="red"; 
                }

                if(psel == 3){
                    latlon(data[2],data[4],data[3],data[5]);
                    $("#Alt").text(data[9]+" M")
                }

            });

            $.get("php/logs/"+id+"/gpgga.php",function(data){
                data = data.split(",");
                $("#gpsl").text(data[7]);
                if(data[6][0] == 'A'){
                    gpsi.style.stroke="#00e600";
                    gpsat.style.fill="#00e600";  
                }
                else{
                    gpsi.style.stroke="red";
                    gpsat.style.fill="red"; 
                }

                if(psel == 1){
                    latlon(data[2],data[4],data[3],data[5]);
                    $("#Alt").text(data[9]+" M")
                }

            });
        }
        else{
            $(".peity > svg").css("fill","red");
            $(".peity > svg > g").css("stroke","red");
            $("#Alt").text(" -- ");
            $("#Lat").text(" -- ");
	        $("#Lon").text(" -- ");
            $(".quick-stats__info > h3").text("-");
        }
    });
	
	$.get("php/logs/BRS.php",function(data){
					BRS(data);
	});
	
	
}

function latlon(latt,lonn,ns,ew){
	lat = Math.floor(parseFloat(latt/100));
	lon = Math.floor(parseFloat(lonn/100));
	lam = (parseFloat(latt/100) % 1).toFixed(4);
	lom = (parseFloat(lonn/100) % 1).toFixed(4);
	lat = lat+(lam/0.60);
	lon = lon+(lom/0.60);
	$("#Lat").text(lat.toFixed(4)+" "+ns);
	$("#Lon").text(lon.toFixed(4)+" "+ew);
}