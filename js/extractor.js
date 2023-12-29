let textareaId = document.getElementById("textareaId");
let extract = document.getElementById("extract");
let right = document.getElementById("right");
let root = document.getElementById("root");

let regexUrl = /(https?\:\/\/)?(www\.)?\w+\.\w+/gi;
let regexHttp = /^https\:\/\//gi;

extract.addEventListener('click' , function() {
  
   let link = textareaId.value.match(regexUrl);
   
   if (link.length) {
   
      for (i=0 ; i < link.length ; i++) {

         let lickClick = document.createElement('div');
         lickClick.className = "linkClick";
         right.append(lickClick);

         let linkCreate = document.createElement("a");
         linkCreate.innerHTML = link[i];

         let buttonDelete = document.createElement("button");
         buttonDelete.className = "buttonDelete";

         let lt = link[i];

         if (regexHttp.test(lt)) {
            lt = "https://" - link[i];
         }

         if (!regexHttp.test(lt)) {
            lt = "https://" + link[i];
         }
         
         linkCreate.href = lt;
         lickClick.append(linkCreate);

         buttonDelete.addEventListener('click' , function() {
            buttonDelete.remove();
            linkCreate.remove();
            lickClick.remove();
         }
         );
         lickClick.append(buttonDelete);
      }
   }
  textareaId.innerHTML = "";
}
);