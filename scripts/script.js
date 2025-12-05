    // 1. Elementen selecteren
    let hamburgerKnop = document.getElementById("hamburger");
    let sluitKnop = document.getElementById("sluiten");
    let mobielMenu = document.getElementById("mobiel-menu");
    let MenuAchtergrond = document.querySelector(".menu-achtergrond");
  
    // 2. Wachten totdat iemand erop klikt
    hamburgerKnop.addEventListener("click", () => {

      // 3. Classes worden toegevoegd / verwijderd
      mobielMenu.classList.remove("verbergen");
      MenuAchtergrond.classList.add("actief");
      document.body.classList.add("geen-scroll");
    });
  
    // 2. Wachten totdat iemand erop klikt
    sluitKnop.addEventListener("click", () => {

      // 3. Classes worden toegevoegd / verwijderd
      mobielMenu.classList.add("verbergen");
      MenuAchtergrond.classList.remove("actief");
      document.body.classList.remove("geen-scroll");
    });
