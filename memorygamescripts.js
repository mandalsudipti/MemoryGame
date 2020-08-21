var num_url = ["https://images.unsplash.com/photo-1585146709654-1668ad81e1f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","https://i.pinimg.com/originals/1e/61/a3/1e61a343e6f5317a9d63474f5d340ba9.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpH89xvs1z_xfgAYdywYxJb_iMVy5aDLhXMQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2mIRPgT6fWeMlwV2fOi-45bDklLVWEHNoXA&usqp=CAU","https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-1.2.1&w=1000&q=80","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGNTrYFI3GePm29jCZpE18Fcnylqhf_-IUPg&usqp=CAU"];

var cardIdx = [];
var point = 0 , attempt = 0;
var clcikedId1 = "init" , clickedId2 = "init" ;

function reset()
{
  cardIdx.length = 0 ;
  point = 0 ;
  attempt = 0 ;
  clickedId1 = "init" ;
  clickedId2 = "init" ;
}

function assignImage(x)
{
 var myUrl = "https://images.pexels.com/photos/301673/pexels-photo-301673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  for(i=0;i<x.length;i++)
    x[i].src = myUrl;
}

function getPoint()
{
  var imgId = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","img11","img12"];
  
  var idx1 = -1 , idx2 = -1 ;
  
  for(i=0;i<imgId.length;i++)
    {
      if(clickedId1==imgId[i])
        idx1 = i ;
      if(clickedId2==imgId[i])
        idx2 = i;
    }

  attempt++;
  if(idx1!=idx2 && cardIdx[idx1] == cardIdx[idx2] && cardIdx[idx1]!=(-1))
    {
      point++;
      //alert("MATCHED !! Current Point " + point);
      document.getElementById(clickedId1).src = num_url[cardIdx[idx1]];
      document.getElementById(clickedId2).src = num_url[cardIdx[idx2]];
      cardIdx[idx1] = cardIdx[idx2] = -1 ;
      if(point == 6)
        {
          alert("YOU HAVE WON !! with total attempt " + attempt);
          reset();
        }
    }
  else
    {
      //alert("INVALID !!");
    }
}
function play( clickedId) // write the main function for playing
{
  if(clickedId1=="init")
    {
      clickedId1 = clickedId;
    }
  else
    {
      clickedId2 = clickedId;
      getPoint();
      clickedId1 = "init";
      clickedId2 = "init";
    }
}

function clearTimer()
{
  point = 0 ;
  attempt = 0 ;
  assignImage(document.getElementById("div1").children);
  assignImage(document.getElementById("div2").children);
  assignImage(document.getElementById("div3").children);
}
function showCard()
{
  var imgId = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","img11","img12"];
  reset();
  var num = [0,0,0,0,0,0];
  for(i=0;i<12;i++)
    {
      var idx = Math.floor(Math.random() *6);
      while(num[idx]>=2)
         idx  = (idx+1)%6;
      var x = document.getElementById(imgId[i]);
      x.src = num_url[(idx)] ;
      cardIdx.push(idx);
      num[idx]++;
    }
  setTimeout(clearTimer,3000);
}


assignImage(document.getElementById("div1").children);
assignImage(document.getElementById("div2").children);
assignImage(document.getElementById("div3").children);
