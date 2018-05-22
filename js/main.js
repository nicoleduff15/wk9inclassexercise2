// console.log("connected");
//Create an array of 3 objects with 3 properties each.//
//Create elements for each object and add them to your ordered list//

var artist =[
  {
    singer: "Mariah Carey",
    song: "Hero",
    genre: "Pop"
  },
  {
    singer: "Carrie Underwood",
    song: "Church Bells",
    genre: "Country"
  },
  {
    singer: "Kendrick Lamar",
    song: "Humble",
    genre: "Rap"
  }
];

for(var i = 0); i < artist.length; i++) {
    var myLi = document.createElement("li");
    var myDiv = document.createElement("div");
    var myH1 = document.createElement("h1");
    var myP = document.createElement("p");
    var myP2 = document.createElement("p");

        myH1.innerText= artist[i].singer;
        myP.innerText= artist[i].song;
        myP2.innerText= artist[i].genre;

        myDiv.appendChild(myH1);
        myDiv.appendChild(myp);
        myDiv.appendChild(myp2);

        myDiv.className = "col-6 text-center p-5";

    document.getElementById("list").appendChild(myDiv);
}



var myBtn = document.createElement("button");
    myBtn.setAttribute("onclick", "checkAnswers()");
    myBtn.innerText="click me";
    document.body.appendChild(myBtn);
