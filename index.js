// var fs= require("fs");
//This Creates a new file and when added again keeps on appending data on previous data..!// This is also a method of updating file as well.


// fs.appendFile("raj.txt","This is my first node class",(err)=>{

//     if(err) throw err;
//     console.log("File is Created ..!!")
    
// })



//----------------------------------------------------------------

// var fs1= require("fs");
//this only create a new empty file or overwrites already existing file of same name


// fs1.open("Saransh.txt","w",(err)=>{
//     if(err) throw err;

//     console.log("File is Created");
// })



//----------------------------------------------------------------

// var fs2= require("fs");
//this creates a new file with the data or overwrites already existing file of same name with new data// This is also a method of updating file as well.


// fs2.writeFile("Sara.txt","Hello im saransh tiwari and im using node to create this file",(err)=>{
//     if(err) throw err;

//     console.log("File is Created.!!!!!!!");
// })


//-------------------------------------------------------------------

// var fs3= require("fs");
//This method is used to delete a file in nodejs.
// fs3.unlink("raj.txt",(err)=>{
//     if(err) throw err;

//     console.log("File successfully deleted");
// })



//--------------------------------------------------------------------

// var fs4= require("fs");
// //This method is used to rename a file.
// fs4.rename("sara.txt","Ansh.txt",(err)=>{
//     if(err) throw err;

//     console.log("File successfully Renamed");
// })



var fs5=require("fs");

// fs5.writeFile("Cybrom.txt"," We are Cybrom Students" ,(err)=>{

//     if(err) throw err;

//     console.log("File successfully Created");
// })
// fs5.writeFile("Cybrom.txt"," Hello we are learning node" ,(err)=>{

//     if(err) throw err;

//     console.log("File successfully Created");
// })
// fs5.appendFile("Cybrom.txt"," Welcome to Cybrom" ,(err)=>{

//     if(err) throw err;

//     console.log("File successfully Created");
// })

// fs5.rename("cybrom.txt","Google.txt",(err)=>{

//     if(err) throw err;

//     console.log("File successfully Renamed");
// })
// fs5.unlink("Google.txt",(err)=>{

//     if(err) throw err;

//     console.log("File successfully Deleted");
// })