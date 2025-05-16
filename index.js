 const pickupOption = document.getElementById("pickupRadio");
    const deliverOption = document.getElementById("deliverRadio");
    const pickupSelect = document.getElementById("pickupSelect");
    const deliverAddress = document.getElementById("deliverAddress");

    function selectOption(type) {
      if (type === "pickup") {
        pickupOption.checked = true;
        pickupSelect.style.display = "block";
        deliverAddress.style.display = "none";
        highlightSelected("pickup");
      } else {
        deliverOption.checked = true;
        pickupSelect.style.display = "none";
        deliverAddress.style.display = "block";
        highlightSelected("deliver");
      }
    }

    function highlightSelected(selected) {
      document.querySelectorAll("#delivery-options .option").forEach(opt => opt.classList.remove("selected"));
      if (selected === "pickup") {
        pickupOption.parentElement.classList.add("selected");
      } else {
        deliverOption.parentElement.classList.add("selected");
      }
    }