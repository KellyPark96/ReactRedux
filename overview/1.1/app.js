// 변경 용이성
function createElement(type, props) {
  switch (type) {
    case 'h1':
      return [document.createElement('h1')]
        .map(element => {
          Object
            .entries({ ...props, 'data-id': 'title' })
            .forEach(([name, value]) => element.setAttribute(name, value))
          return element;
        })[0];
    case 'div':
      return [document.createElement('div')]
        .map(element => {
          Object
            .entries({ ...props, 'data-id': 'title' })
            .forEach(([name, value]) => element.setAttribute(name, value))
          return element;
        })[0];
  }
}

function createH1(props) {
  return [document.createElement('h1')]
    .map(element => {
      Object
        .entries({ ...props, 'data-id': 'subject' })
        .forEach(([name, value]) => element.setAttribute(name, value))
      return element;
    })[0];
}

function createDiv(props) {
  return [document.createElement('div')]
    .map(element => {
      Object
        .entries({ ...props, 'data-id': 'layout' })
        .forEach(([name, value]) => element.setAttribute(name, value))
      return element;
    })[0];
}

function createElement2(type, props) {
  switch (type) {
    case 'h1': return createH1(props);
    case 'div': return createDiv(props);
  }
}

// mapping 정보
const creatorMap = {
  h1: createH1,
  div: createDiv,
}

function createElement3(type, props) {
  return creatorMap[type](props);
}

const createElement4 = (type, props) => creatorMap[type](props);
const coupler = map => (type, props) => map[type](props);
const createElement5 = coupler(creatorMap);
console.log(createElement5);
console.log(document.querySelector("#root").appendChild(createElement5("h1", {})));