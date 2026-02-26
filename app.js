let balance = localStorage.getItem('bal') ? parseFloat(localStorage.getItem('bal')) : 0.00;
document.getElementById('userBalance').innerText = "TK. " + balance.toFixed(2);

function startTask(num) {
    // আপনার Adsterra Direct Link
    window.open('https://middayopened.com/md3bxu3v?key=4b3a225824f04b4dfd7fa5c2477acc62', '_blank');

    setTimeout(() => {
        balance += 0.50;
        localStorage.setItem('bal', balance);
        document.getElementById('userBalance').innerText = "TK. " + balance.toFixed(2);
        alert("Task " + num + " Complete!");
    }, 6000);
}
