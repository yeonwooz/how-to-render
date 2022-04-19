// 참고출처 : https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-state-setstate-render

let state = {
    items: ['item1', 'item2', 'item3', 'item4']
}
// 상태관리 

const app = document.getElementById('app')
// 아이템을 추가할 대상

const render = () => {
  // 렌더 메서드
  const {items} = state
  
  // * 템플릿 리터럴 안에서 또다시 템플릿 리터럴을 써서, li태그까지 포함하여 조인한 문자열을 생성
  app.innerHTML = `
    <ul>
      ${items.map(item => `<li>${item}</li>`).join('')}  
    </ul>
    <button id="append">추가</button>
`
  document.getElementById('append').addEventListener('click', function(){
    setState({items: [...items, `item${items.length + 1}`]})  // items에 현재길이 + 1 을 붙인 새로운 아이템 추가
  })
}

const setState = (newState) => {
  state = {...state, ...newState}
  render()
  // 상태변경 후 리렌더
}

render()