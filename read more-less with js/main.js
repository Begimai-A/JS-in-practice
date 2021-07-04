
let i=0; // i=0 indicates paragraph to be in 'read less' mode.
function read(){
    if(!i){
        document.querySelector('#more').style.display="none";
        document.querySelector('#dots').style.display="inline";
        document.querySelector('#read').innerHTML="Read more";
        i=1;
      
    }else{
        document.querySelector('#more').style.display="inline";
        document.querySelector('#dots').style.display="none";
        document.querySelector('#read').innerHTML="Read less";
        i=0; 
    }
}
 read();





// Initially we set i = 0.  
// i=1 indicates paragraph to be in 'read more' mode.
// Indicating the initial state of the paragraph is 'read less'.

// If Part:
// '(!i)' means i=0. 
// Which indicates the paragraph is in 'read less' mode.
// To put it to 'read more' we would like to show the extra part(with '.more' class) by setting the display to inline.
// And we set i to 1 indicating that the paragraph is now in 'read more' mode.

// Else Part:
// This part is executed if i is 1.
// That would simply mean that it is in 'read more' mode.
// To put in 'read less' more we need to set the display of extra part(with '.more' class) to none to hide it.
// And we set i to 0 indicating that paragraph is now in 'read less' mode.
