const periodButtons = document.querySelectorAll("[data-period]");
const activities = document.querySelectorAll(".activity");

const previousLabels = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month"
};

function updateDashboard(period) {
  // Update the selected period button
  periodButtons.forEach((button) => {
    const isActive = button.dataset.period === period;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  // Update every activity card
  activities.forEach((activity) => {
    const hours = activity.querySelector(".hours");
    const previous = activity.querySelector(".previous");

    hours.textContent = hours.dataset[period];
    previous.textContent = previous.dataset[period];
  });
}

// Listen for period selection
periodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateDashboard(button.dataset.period);
  });
});

// Start with the weekly report
updateDashboard("weekly");