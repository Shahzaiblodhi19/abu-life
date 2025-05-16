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

const installmentSection = document.getElementById("installment");
const bankCardsSection = document.getElementById("bank-cards");

document.querySelectorAll('.option').forEach(option => {
  const radio = option.querySelector('input[type="radio"]');

  option.addEventListener('click', () => {
    if (radio) radio.checked = true;

    // Update selected styles
    document.querySelectorAll(".option-group .option").forEach(opt =>
      opt.classList.remove("selected")
    );
    option.classList.add("selected");

    // Toggle section visibility for installments
    const isInstallment = option.classList.contains("installment1") || option.classList.contains("installment2");
    installmentSection.style.display = isInstallment ? "block" : "none";
    bankCardsSection.style.display = isInstallment ? "grid" : "none";
  });
});


const chatIcon = document.getElementById('chat-icon');
const chatBox = document.getElementById('chats');
const chatClose = document.getElementById('chat-close');

// Initially show the chat box
chatBox.style.display = 'block';

// Toggle chat box on chat icon click
chatIcon.addEventListener('click', () => {
  if (chatBox.style.display === 'none') {
    chatBox.style.display = 'block';
  } else {
    chatBox.style.display = 'none';
  }
});

// Close chat box on close icon click
chatClose.addEventListener('click', () => {
  chatBox.style.display = 'none';
});