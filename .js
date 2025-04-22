document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('card').value;
    const amount = document.getElementById('amount').value;

    if (cardNumber.length < 16 || amount <= 0) {
        alert('Invalid payment details.');
        return;
    }

    alert('Payment processed successfully!');
});











document.getElementById('apply-code').addEventListener('click', function() {
    const promoCode = document.getElementById('promo-input').value;

    fetch('/apply-discount', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ amount: document.getElementById('amount').value, promo_code: promoCode })
    }).then(response => response.json())
    .then(data => {
        document.getElementById('discounted-price').innerText = `Final Price: $${data.final_price}`;
    });
});
