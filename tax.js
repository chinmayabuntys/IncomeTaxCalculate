let inpTax = document.getElementById("inp-tax");
      let btnCal = document.getElementById("btn-cal");
      let tax = document.getElementById("tax");

      btnCal.addEventListener("click", () => {
        let income = Math.round(inpTax.value / 10) * 10;
        let taxAmount = 0;

        if (income >= 1200000) {
          if (income <= 400000) {
            taxAmount = 0;
          } else if (income <= 800000) {
            taxAmount = (income - 400000) * 0.05;
          } else if (income <= 1200000) {
            taxAmount = 400000 * 0.05 + (income - 800000) * 0.1;
          } else if (income <= 1600000) {
            taxAmount =
              400000 * 0.05 + 400000 * 0.1 + (income - 1200000) * 0.15;
          } else if (income <= 2000000) {
            taxAmount =
              400000 * 0.05 +
              400000 * 0.1 +
              400000 * 0.15 +
              (income - 1600000) * 0.2;
          } else if (income <= 2400000) {
            taxAmount =
              400000 * 0.05 +
              400000 * 0.1 +
              400000 * 0.15 +
              400000 * 0.2 +
              (income - 2000000) * 0.25;
          } else {
            taxAmount =
              400000 * 0.05 +
              400000 * 0.1 +
              400000 * 0.15 +
              400000 * 0.2 +
              400000 * 0.25 +
              (income - 2400000) * 0.3;
          }

          tax.innerHTML = `

<div class="result">

<h1>Total Income : ₹${income}</h3>
<h2>Total Tax : ₹${Math.round(taxAmount)}</h2>
<h3>Remaining Amount:₹${Math.round(income-taxAmount)}

<table>

<tr>
<th>Income Slab</th>
<th>Rate</th>
</tr>
<tr>
<td>0L - 4L</td>
<td>0%</td>
</tr>

<tr>
<td>4L - 8L</td>
<td>5%</td>
</tr>

<tr>
<td>8L - 12L</td>
<td>10%</td>
</tr>

<tr>
<td>12L - 16L</td>
<td>15%</td>
</tr>

<tr>
<td>16L - 20L</td>
<td>20%</td>
</tr>

<tr>
<td>20L - 24L</td>
<td>25%</td>
</tr>

<tr>
<td>Above 24L</td>
<td>30%</td>
</tr>

</table>

</div>

`;
        } else {
          tax.innerHTML = `<div class="result">No tax required as per Govt rules</div>`;
        }
      });