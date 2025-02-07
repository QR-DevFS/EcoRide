const covoit = document.getElementById("boutonvalider");
const validtrajet = document.getElementById("validationrecherche");

$(document).ready(function () {
  covoit.addEventListener("click", () => {
    document.getElementById("trajetecologique").checked;
    if (document.getElementById("trajetecologique").checked === true) {
      console.log("C'est checké");
    } else {
      console.log("Nop");
    }
  });
});
$(document).ready(function () {
  validtrajet.addEventListener("click", () => {
    let depart = document.getElementById("depart");
    let destination = document.getElementById("destination");
    let date = document.getElementById("date");
    let departform = document.getElementById("villledepart");
    let destinationform = document.getElementById("villledarrive");
    let dateform = document.getElementById("datecovoit");
    const maDate = new Date(date.value);
    maDate.toLocaleDateString("fr");
    const tab1 = [];
    const tab2 = [];
    tab1.push(depart.value, destination.value, maDate);
    console.log(tab1);
    tab2.push(departform.value, destinationform.value, dateform.value);
    console.log(tab2);
  });
});
