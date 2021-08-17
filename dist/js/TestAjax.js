var test = new XMLHttpRequest();

test.onreadystatechange = function() {
    if(test.readyState === 4) {
        if(test.status === 200) {
            console.log(xhr.responseText);
        }
    }
};