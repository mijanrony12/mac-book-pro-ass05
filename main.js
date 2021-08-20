
function getMemoryTotal(gettotal,isUpDown) {
    const total = document.getElementById(gettotal);
    const getTotal = total.innerText;

    //check condition.
    if (isUpDown == true)
    {
        total.innerText = '0';
    }
    else if(isUpDown==false)
    {
        total.innerText = '180';
    }
    else if (isUpDown == 'charge')
    {
        total.innerText = '20';
    }
    else
    {
        total.innerText = '100';
    }
    calculateTotal()
}

//calculateTotal.

function calculateTotal() {
    //access from HTML file
    const setTotal = parseInt(document.getElementById('set-total').innerText);
    const memoryTotal = parseInt(document.getElementById('memory-total').innerText);
    const storageTotal = parseInt(document.getElementById('storage-total').innerText);
    const chargeTotal = parseInt(document.getElementById('charge-total').innerText);
    const findTotal = parseInt(document.getElementById('sub-total').innerText);
    const checkTotal = parseInt(document.getElementById('total').innerText);
     
    //Total count and set value.
    const subTotal = setTotal + memoryTotal + storageTotal + chargeTotal;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('total').innerText = subTotal;
}


// add event with memory

document.getElementById('memory-8gb').addEventListener('click', function () {
    
    getMemoryTotal('memory-total', true)
});

document.getElementById('memory-16gb').addEventListener('click', function () {
    getMemoryTotal('memory-total', false)
});

//add event with storage.

document.getElementById('storage-256gb').addEventListener('click', function () {
    getMemoryTotal('storage-total', true)
});

document.getElementById('storage-512gb').addEventListener('click', function () {
    getMemoryTotal('storage-total',)
});

document.getElementById('storage-1tb').addEventListener('click', function () {
    getMemoryTotal('storage-total', false)
})

//add event with delivery charge.

document.getElementById('delivery').addEventListener('click', function () {
    getMemoryTotal('charge-total', true)
});

document.getElementById('delivery-charge').addEventListener('click', function () {
    getMemoryTotal('charge-total', 'charge')
});

// add event for apply button.

document.getElementById('apply-btn').addEventListener('click', function () {
    const getInputValue = document.getElementById('inputValue').value;
    //check.
    if (getInputValue == 'stevekaku')
    {
        const getInnerValue = document.getElementById('total').innerText;
        const perchentage = getInnerValue * 20 / 100;
       const finalResult= getInnerValue - perchentage;
        document.getElementById('total').innerText = finalResult;
        document.getElementById('inputValue').value = '';
    }
    else
    {
        alert('plz give me proper code');
    }
});

