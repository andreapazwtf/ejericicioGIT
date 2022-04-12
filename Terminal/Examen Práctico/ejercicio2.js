let numero=[3];
    
		let maximo = 100;
    		let aux = [];
    		for (let i = 1; i < maximo; i++) {
      			let cont = 0;
      			for (let j = 0; j < numero.length; j++) {		
      				if (i%numero[j]==0 && cont==0){
          					aux.push(i);
          				console.log(i+",");
          					cont++;
				}
			}
		}