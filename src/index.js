const url = 'http://cors-test.appspot.com/test';

function main(method) {
  const requestStatus = document.querySelector(`.${method.toLowerCase()}`);
  const request = new XMLHttpRequest();
  request.open(method, url);
  request.addEventListener('readystatechange', () => {
    if (request.status === 200 && request.readyState === 4 && JSON.parse(request.response).status === 'ok') {
      requestStatus.textContent = 'OK';
      requestStatus.style.fontWeight = 'bold';
      requestStatus.style.color = 'green';
    } else {
      requestStatus.textContent = 'Failed';
      requestStatus.style.fontWeight = 'bold';
      requestStatus.style.color = 'red';
    }
  });
  request.send();
}

['GET', 'POST', 'WEIRD'].forEach(el => main(el));
