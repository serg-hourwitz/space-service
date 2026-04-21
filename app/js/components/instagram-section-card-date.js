const currentDate = document.querySelectorAll('.instagram-section-card__date');

if (currentDate) {
  const now = new Date();

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  currentDate.forEach((date) => {
    date.textContent = `${day} ${month} ${year}`;
  })
}
