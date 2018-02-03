function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
}

function deepestChild() {
  const elements = document.getElementById('div#grand-node').querySelectorAll('div');
  return elements[elements.length - 1]
}
