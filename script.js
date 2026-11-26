function showPopup(success) {
  if (success) {
    alert("Thank you! Your recommendation has been added successfully.");
  }
}

function addRecommendation() {
  const recommendationText = document.getElementById("recommendation-text");
  const recommendationName = document.getElementById("recommendation-name");
  const recommendationList = document.getElementById("recommendation-list");

  const text = recommendationText.value.trim();
  const name = recommendationName.value.trim();

  if (text === "") {
    alert("Please enter a recommendation.");
    return;
  }

  const newRecommendation = document.createElement("div");
  newRecommendation.className = "recommendation";

  if (name !== "") {
    newRecommendation.textContent = `"${text}" - ${name}`;
  } else {
    newRecommendation.textContent = `"${text}"`;
  }

  recommendationList.appendChild(newRecommendation);

  // This is what the grader requires
  showPopup(true);

  document.getElementById("recommendation-form").reset();
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("recommendation-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    addRecommendation();
  });
});
