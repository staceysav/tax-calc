$("#input-window").keyup((event) => {
    console.log(event.target.value);
    // $("#result").text(event.target.value);
    $("#result").text(calculations(event.target.value));
})

function calculations (sum) {
    // if (sum == 0) {
    //     $("#result").text("0");
    // }
    // if (sum <= 32000) {
    //     $("#result").text((sum * 0.15));
    // }
    // if (sum > 32000 && sum <= 70000) {
    //     $("#result").text(sum * 0.2);
    // }
    // if (sum > 70000 && sum <= 250000) {
    //     $("#result").text(sum * 0.27);
    // }
    // if (sum > 250000 && sum <= 880000) {
    //     $("#result").text(sum * 0.35);
    // }
    // if (sum > 880000) {
    //     $("#result").text(sum * 0.4);
    // } 
    var tax = Math.min(sum, 32000) * 0.15;
    sum = Math.max(sum - 32000, 0); // sum=1000

    tax += Math.min(sum, 38000) * 0.2;
    sum = Math.max(sum - 38000, 0); // sum=0

    tax += Math.min(sum, 180000) * 0.27;
    sum = Math.max(sum - 180000, 0); // sum=0

    tax += Math.min(sum, 630000) * 0.35;
    sum = Math.max(sum - 630000, 0); // sum=0

    tax += sum * 0.4;
    return tax.toFixed(2);
}
