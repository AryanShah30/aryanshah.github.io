/*CLICKING ON TABS*/
   var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove("active-link");
      }
      for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }

/*SIDEMENU*/
    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
      sidemenu.style.right="0";
    }
    function closemenu(){
      sidemenu.style.right="-200px";
    }

/*SWITCH MODE*/
    var icon = document.getElementById("icon");

    icon.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        document.getElementById('valuedx').src = 'images/valuedx-white.png';
      }
      else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        document.getElementById('valuedx').src = 'images/valuedx.png';
      }
    }

/*FORM DATA*/
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzuHcnDu2XWUcghHhnbJ0wcvoMhgXqd087Z4v9RTSd82n8bosbsfqF6jWX2n10uczjP/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

