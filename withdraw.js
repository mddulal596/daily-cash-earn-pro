// Realtime Database ব্যবহারের নিয়ম
const database = firebase.database();

function submitWithdraw(uid, amount, phone) {
    database.ref('withdraw_requests/' + uid).set({
        amount: amount,
        phone: phone,
        status: "pending"
    }).then(() => {
        alert("আপনার রিকোয়েস্ট জমা হয়েছে!");
    });
}
