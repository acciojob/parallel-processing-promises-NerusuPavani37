const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url){
  return new Promise((resolve,reject)=>{
    const img = new Image();
    img.src = url;
    img.onload=()=> resolve(img);
    img.onerror=()=> reject(`Failed to load image: ${url}`);
  })
}

function downloadImages(){
  let promises = images.map(obj => downloadImage(obj.url));
  Promise.all(promises)
  .then(images =>{
    images.forEach(image =>{
      output.appendChild(image);
    })
  })
  .catch((err)=>{
    output.innerHTML += image;
  })
  .finally(()=>{
     document.getElementById("loading").style.display = "none";
  });
}

btn.addEventListener("click",downloadImages);
