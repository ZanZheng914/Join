const today3 = new Date();
const tomorrow3 = new Date();
tomorrow3.setDate(today3.getDate() + 1);
const dayAfterTomorrow3 = new Date();
dayAfterTomorrow3.setDate(today3.getDate() + 2);

document.getElementById("deleveryToday3").textContent = `今天 ${today3.toDateString()}`;
document.getElementById("deleveryTomorrow3").textContent = `明天 ${tomorrow3.toDateString()}`;
document.getElementById("deleverydayAfterTomorrow3").textContent = `後天 ${dayAfterTomorrow3.toDateString()}`;

// console.log(document.getElementById('apple'));
// document.getElementById('apple').textContent= `今天 ${today3.toDateString()}`;

// document.querySelector("#deliveryDate [value='today3']").textContent = `今天 ${today3.toDateString()}`;
// document.querySelector("#deliveryDate [value='tomorrow3']").textContent = `明天 ${tomorrow3.toDateString()}`;
// document.querySelector("#deliveryDate [value='dayAfterTomorrow3']").textContent = `後天 ${dayAfterTomorrow3.toDateString()}`;

// const deliveryDates = {
//     'today3': `今天 ${today3.toDateString()}`,
//     'tomorrow3': `明天 ${tomorrow3.toDateString()}`,
//     'dayAfterTomorrow3': `後天 ${dayAfterTomorrow3.toDateString()}`
// };

var deliveryTimes = {
    "time1": "09:00-11:00",
    "time2": "11:00-13:00",
    "time3": "13:00-15:00",
    "time4": "15:00-17:00",
    "time5": "17:00-19:00",
    "time6": "19:00-21:00"
};
