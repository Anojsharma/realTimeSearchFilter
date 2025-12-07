const users = [
  {
    name: "amisha rathore",
    pic: "https://images.unsplash.com/photo-1764789953395-59ffc3157f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    bio: "silent chaos in a loud world | not for everyone",
  },
  {
    name: "kiara mehta",
    pic: "https://images.unsplash.com/photo-1764920357728-a10681250e46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D",
    bio: "main character energy ✨ | coffee > everything ✨+",
  },
  {
    name: "isha oberoi",
    pic: "https://images.unsplash.com/photo-1764920219338-325fe3f1a3a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D",
    bio: "walking through dreams in doc martens ☁ | late night thinker",
  },
  {
    name: "Ojin Oklawo",
    pic: "https://images.unsplash.com/photo-1764046697690-03c6533e13d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "Anya Sharma",
    pic: "https://images.unsplash.com/photo-1764752332378-93598c42aaf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
    bio: "coding & caffeine 💻 | perpetually optimistic",
  },
  {
    name: "Rohan Patel",
    pic: "https://images.unsplash.com/photo-1764752332378-93598c42aaf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
    bio: "gamer, designer, dreamer 🎮 | chasing sunsets",
  },
  {
    name: "Zara Khan",
    pic: "https://images.unsplash.com/photo-1764805201909-e5ba59108cdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    bio: "books, travel, and quiet moments 📚 | living life in chapters",
  },
];



//1 saare users show karaana
function showUsers(arr){
arr.forEach(function(users){

    ///ask in chatgpt -- create the document.createElement version of this code for my js

    // Create main card
const card = document.createElement("div");
card.classList.add("card");

// Create image
const img = document.createElement("img");
img.src = users.pic;
img.classList.add("bg-img");

// Create blurred layer div
const blurredLayer = document.createElement("div");
// blurredLayer.style.backgroundImage = `url(${users.pic})`
blurredLayer.classList.add("blurred-layer");

// Create content div
const content = document.createElement("div");
content.classList.add("content");

// Heading
const h3 = document.createElement("h3");
h3.textContent = users.name;

// Paragraph
const p = document.createElement("p");
p.textContent = users.bio;

// Append heading & paragraph to content
content.appendChild(h3);
content.appendChild(p);

// Append elements inside card
card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

// Finally add card to body or a container

document.querySelector("#cards").appendChild(card);

})
}
showUsers(users)


let inp = document.querySelector(".inp")
inp.addEventListener("input", function(){


    let newuser = users.filter((user) => {
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    });

    // Clear previous cards
    document.querySelector("#cards").innerHTML = "";

    if (newuser.length > 0) {
        // If users match → show them
        showUsers(newuser);
    } else {
        // If no match → show message
        const msg = document.createElement("h2");
        msg.textContent = "No user found";
        msg.style.color = "white";
        msg.style.textAlign = "center";
        msg.style.fontSize = "30px";
        document.querySelector("#cards").appendChild(msg);
    }
  //  let newuser = users.filter((users)=>{
  //   return users.name.startsWith(inp.value)
  //  })


  //  //this line because agar ap koi word enter karta ho tho usiska shirf dikha or kisi ka na dikha isliya blcak kiya
  //  document.querySelector("#cards").innerHTML = ""

  //  showUsers(newuser); 
})

//    //if else condioton
//   
// 

//2 filter karna har baar input karne pe
// 3 show karna filtered users