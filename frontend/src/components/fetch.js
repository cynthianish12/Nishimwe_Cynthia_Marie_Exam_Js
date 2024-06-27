fetch('htttp://localhost:3000/api/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        date: depositDate,
        amount: depositAmount,
    }),
})
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to save deposit data');
    }
    console.log('Deposit data saved successfully');
    return response.json();
})
.then(data => {
    console.log(data) 
})
.catch(error => {
    console.error('Error saving deposit data:', error.message);
});


fetch('http://localhost:3000/api/details')
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to fetch details data');
    }
    return response.json();
})
.then(data => {
   console.log(data);
    
})
.catch(error => {
    console.error('Error fetching detail data:', error.message);
});