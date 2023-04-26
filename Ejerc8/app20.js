$('#btn1').click( () => {
    const eles = $('.main div').toArray();
    console.log(eles);
    eles.forEach((ele,ind) => {
        console.log(ele.textContent);
        const span = document.createElement('span');
        span.textContent = `Hello ${ind+1}`;
        ele.append(span);
    });
})