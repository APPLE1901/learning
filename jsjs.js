function B1(){
	let GetName = prompt("나이를 입력해 주십시오.");
	if(GetName < 14 && GetName>0){
		alert(`안돼. 돌아가.`);
	} else if(GetName >= 14 && GetName <= 30){
		alert(`환영합니다!`);
		location.href = '주소.온라인.한국';
	} else if(GetName > 30){
		alert(`구라ㄴ`)
	} else if(GetName == 0){
		alert(`나이를 입력하라니깬.`)
	} else {
		alert(`나이를 다시 입력해 주십시오.`)
	}
}
