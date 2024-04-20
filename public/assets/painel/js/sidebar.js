function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById('btn-action-sidebar').setAttribute('action', 'close');
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById('btn-action-sidebar').setAttribute('action', 'open');
  }

  function toggleSidebar(){
    var action = document.getElementById('btn-action-sidebar').getAttribute('action');
    
    if(action == 'close') closeNav();
    if(action == 'open') openNav();
  }