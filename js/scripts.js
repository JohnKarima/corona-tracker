$(document).ready(function() {
    //Information about the virus
    $(".first").click(function() {
      $(".illustration1").toggle(500);
      $(".details1").toggle(500);
    });
    $(".second").click(function() {
      $(".illustration2").toggle(500);
      $(".details2").toggle(500);
    });
    $(".third").click(function() {
      $(".illustration3").toggle(500);
      $(".details3").toggle(500);
    });
  
let myChart = document.getElementById('dailyCases').getContext('2d');
let caseChart = new Chart(myChart, {
  type: 'bar',
  data: {
    labels: ["Feb 15", "Feb 16", "Feb 17", "Feb 18", "Feb 19", "Feb 20", "Feb 21", "Feb 22", "Feb 23", "Feb 24", "Feb 25", "Feb 26", "Feb 27", "Feb 28", "Feb 29", "Mar 01", "Mar 02", "Mar 03", "Mar 04", "Mar 05", "Mar 06", "Mar 07", "Mar 08", "Mar 09", "Mar 10", "Mar 11", "Mar 12", "Mar 13", "Mar 14", "Mar 15", "Mar 16", "Mar 17", "Mar 18", "Mar 19", "Mar 20", "Mar 21", "Mar 22", "Mar 23", "Mar 24", "Mar 25", "Mar 26", "Mar 27", "Mar 28", "Mar 29", "Mar 30", "Mar 31", "Apr 01", "Apr 02", "Apr 03", "Apr 04", "Apr 05", "Apr 06", "Apr 07", "Apr 08", "Apr 09", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 15", "Apr 16", "Apr 17", "Apr 18", "Apr 19", "Apr 20", "Apr 21", "Apr 22", "Apr 23", "Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30", "May 01", "May 02", "May 03", "May 04", "May 05", "May 06", "May 07", "May 08", "May 09", "May 10", "May 11", "May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21", "May 22", "May 23", "May 24", "May 25", "May 26", "May 27", "May 28", "May 29", "May 30", "May 31", "Jun 01", "Jun 02", "Jun 03", "Jun 04", "Jun 05", "Jun 06", "Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29", "Jun 30", "Jul 01", "Jul 02", "Jul 03", "Jul 04", "Jul 05", "Jul 06", "Jul 07", "Jul 08", "Jul 09", "Jul 10", "Jul 11", "Jul 12", "Jul 13", "Jul 14", "Jul 15", "Jul 16", "Jul 17", "Jul 18", "Jul 19", "Jul 20", "Jul 21", "Jul 22", "Jul 23", "Jul 24", "Jul 25", "Jul 26", "Jul 27", "Jul 28", "Jul 29", "Jul 30", "Jul 31", "Aug 01", "Aug 02", "Aug 03", "Aug 04"],
    datasets: [{
      label: 'cases',
      data: [
        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 2, 0, 1, 3, 0, 0, 0, 8, 1, 9, 3, 3, 0, 7, 4, 8, 9, 22, 29, 12, 4, 16, 16, 14, 7, 5, 5, 2, 6, 11, 8, 9, 9, 12, 16, 8, 11, 15, 7, 17, 16, 7, 12, 8, 11, 10, 12, 15, 24, 30, 25, 45, 47, 25, 14, 28, 23, 28, 15, 22, 21, 23, 49, 57, 25, 51, 66, 80, 52, 31, 22, 72, 62, 123, 147, 127, 143, 74, 59, 72, 123, 124, 134, 126, 167, 95, 127, 105, 121, 90, 152, 137, 133, 133, 184, 213, 117, 104, 260, 59, 155, 254, 178, 149, 278, 259, 120, 176, 307, 268, 247, 389, 309, 181, 183, 278, 447, 473, 278, 379, 189, 497, 461, 421, 389, 688, 603, 418, 397, 637, 796, 667, 375, 960, 372, 606, 544, 788, 723, 727, 690, 544, 605
      ],
      backgroundColor: "maroon"
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Daily New Cases',
      fontSize: 25
    },
    legend: {
      display: false,
    }
  }
})

let mySecondChart = document.getElementById('dailyDeaths').getContext('2d');
let deathChart = new Chart(mySecondChart, {
  type: 'bar',
  data: {
    labels: ["Feb 15", "Feb 16", "Feb 17", "Feb 18", "Feb 19", "Feb 20", "Feb 21", "Feb 22", "Feb 23", "Feb 24", "Feb 25", "Feb 26", "Feb 27", "Feb 28", "Feb 29", "Mar 01", "Mar 02", "Mar 03", "Mar 04", "Mar 05", "Mar 06", "Mar 07", "Mar 08", "Mar 09", "Mar 10", "Mar 11", "Mar 12", "Mar 13", "Mar 14", "Mar 15", "Mar 16", "Mar 17", "Mar 18", "Mar 19", "Mar 20", "Mar 21", "Mar 22", "Mar 23", "Mar 24", "Mar 25", "Mar 26", "Mar 27", "Mar 28", "Mar 29", "Mar 30", "Mar 31", "Apr 01", "Apr 02", "Apr 03", "Apr 04", "Apr 05", "Apr 06", "Apr 07", "Apr 08", "Apr 09", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 15", "Apr 16", "Apr 17", "Apr 18", "Apr 19", "Apr 20", "Apr 21", "Apr 22", "Apr 23", "Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30", "May 01", "May 02", "May 03", "May 04", "May 05", "May 06", "May 07", "May 08", "May 09", "May 10", "May 11", "May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21", "May 22", "May 23", "May 24", "May 25", "May 26", "May 27", "May 28", "May 29", "May 30", "May 31", "Jun 01", "Jun 02", "Jun 03", "Jun 04", "Jun 05", "Jun 06", "Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29", "Jun 30", "Jul 01", "Jul 02", "Jul 03", "Jul 04", "Jul 05", "Jul 06", "Jul 07", "Jul 08", "Jul 09", "Jul 10", "Jul 11", "Jul 12", "Jul 13", "Jul 14", "Jul 15", "Jul 16", "Jul 17", "Jul 18", "Jul 19", "Jul 20", "Jul 21", "Jul 22", "Jul 23", "Jul 24", "Jul 25", "Jul 26", "Jul 27", "Jul 28", "Jul 29", "Jul 30", "Jul 31", "Aug 01", "Aug 02", "Aug 03", "Aug 04"],
    datasets: [{
      label: 'deaths',
      data: [
        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 2, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 1, 2, 0, 0, 2, 3, 0, 1, 2, 1, 3, 4, 2, 3, 5, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 3, 4, 1, 1, 5, 2, 3, 4, 1, 4, 1, 1, 3, 1, 3, 4, 4, 3, 1, 1, 2, 10, 2, 2, 2, 2, 3, 2, 2, 5, 4, 2, 1, 4, 1, 3, 2, 5, 1, 4, 3, 2, 4, 8, 3, 1, 12, 5, 7, 8, 5, 3, 9, 4, 12, 10, 3, 11, 4, 2, 5, 14, 12, 14, 16, 23, 5, 13, 6
      ],
      backgroundColor: "black"
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Daily New Deaths',
      fontSize: 25,
    },
    legend: {
      display: false,
    }
  }
})
});