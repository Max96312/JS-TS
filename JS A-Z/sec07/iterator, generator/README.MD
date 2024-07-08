# iterator
반복자 `.next()` 메서드를 이용해서 {value: , done:} 두개의 속성을 반환하는 객체이다.
# iterable
`array` & `collection`의 경우에는 반복 가능하며, `Object`의 경우에는 반복이 불가하다.  
반복 가능한 객체 iterable 하다 라고 표현한다.

# generator 함수
+ 일반 함수: 단 한번의 실행으로 함수 끝까지 실행
+ generator 함수: 사용자의 요구에 따라 일시적으로 정지될 수도 있고, 다시 시작될 수도 있습니다. `Lazy Evaluation`

`yield`
제너레이터 함수의 실행을 일시적으로 정지시킵니다.

# 정리
`generator 함수`는 `iterator`를 손 쉽게 사용하기 위한 키워드 이다.
