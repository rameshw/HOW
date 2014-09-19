/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    var logarray=[];
    var i=0;
    var z=0;
    var str="";
    var loc="";
    geocoder = new google.maps.Geocoder();
    var offs=0;
    
    function write(offs1){
        //window.alert(offs);
	$.ajax({
		url:'https://graph.facebook.com/search?q=humans%20of&type=page&fields=name&'+'offset='+offs1+'&limit=9&access_token=1552849614928522|e450063b9132c131fcdf529bf336fcb6',
		dataType: 'json',
		type: 'get',
		cache: true,
		success: function(data) {
			$(data.data).each(function(index, value) {
                                        $.ajax({
					url:'https://graph.facebook.com/'+value.id,
					dataType: 'json',
					type: 'get',
					cache: true,
					success: function(data1) {
						
                                                geocoder.geocode( { 'address': value.name.substr(10)}, function(results, status) {
                                            if (status == google.maps.GeocoderStatus.OK) {
                                                loc = results[0].geometry.location.toString();
                                                console.log(loc);
                                                
                                                logarray.push({
							"name": value.name,
							"url": data1.link,
                                                        "locat":loc 
						});
						 //window.alert(loc.toString());
                                                 str=logarray[i]['name'].toString() + ";" + logarray[i]['url'].toString() + ";" + logarray[i]['locat'].toString() ;
                                                 //window.alert(str); 
                                                 //str=z;
                                                    i++;
                                                    z++;
                                                    offs++;
                                                  $.ajax({   
                                                     // window.alert(str); 
                                                        url: "service.php?function=write_url&data="+ str
                                                    }).done(function(data) { 
                                                        
                                                    });
                                             
                                            } else {
                                              alert('Geocode was not successful for the following reason: ' + status);
                                            }
                                          
                                          });
						
					}
                                        
                                       
				});
                               
			});
		}
                
                
	});
        
        console.log(offs);
      }	
      
    var delay=5200;//1 seconds
    if (offs<=500) {
        setInterval(function(){write(offs);}, delay);
    }

