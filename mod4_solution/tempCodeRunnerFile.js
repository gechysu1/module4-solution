var names;
names[0] = "Gech";
names[1] ="Dave";
names[2] ="john";
names[3]="Mamo";
names[4]="messi"
names[5]="Jack";

for ( var i = 0; i<names.length; i++){
 if(names[i].charAt(0)==='j'|| names[i].charAt(0)==='J'){
	 console.log("Goodbye "+names[i])
 }

 else{
	 console.log("Hello "+names[i])
 }
}