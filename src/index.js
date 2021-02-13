// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select"); //선택값 localStorage 저장
//select option의 선택값을 가져오기위해서 필요.

/*handleChange() 함수 안에 사용자가 선택한 옵션의 value값을 변수에 저장해준다.
사용자가 옵션을 바꿀때마다 값이 변해야하기 때문에 함수 안에 적어준다.*/
function handleChange() {
    const value = select.options[select.selectedIndex].value; //사용자가 선택한 option의 value 값을 가져온다.
    //const coun = document.querySelector('h1'); <- 바뀐 텍스트를 출력할 h1을 querySelector를 사용해서 가져온다. 미사용
     
    window.localStorage.setItem("country", value);
    /*localStorage의 setItem() 메소드를 사용하여 value 값을 저장해준다.
        위에서 저장한 사용자 선택 옵션 변수(value)를 적어준다.*/   

    if ( value == 'KOR' ) {
        console.log("Korea");
    } else if ( value == 'GRC' ) {
        console.log("Greece");
    } else if ( value == 'TUR' ) {
        console.log("Turkey");
    } else if ( value == 'FIN' ) {
        console.log("Finland");
    } else {
        console.log("NONE");
    }
}
/* if문을 활용해 사용자가 선택한 언어에 따라서 텍스트를 바꾼다. 상수 coun은 이것 때문에 사용함
 if(value == 'Korea'){
    coun.innerText = '반갑습니다 :)';
  } else if(value == 'Greece'){;
    coun.innerText = 'Χαίρομαι που σε γνωρίζω :)';
  } else if(value == 'Turkey'){
    coun.innerText = 'Tanıştığımıza memnun oldum :)';
  } else if(value == 'Finland'){
    coun.innerText = 'hauska tavata :)';
  } else {
    coun.innerText = 'Where are you from?';
  }
} 
*/

select.addEventListener("change", handleChange); //select의 값이 바뀔때마다 함수가 실행되기 때문에 'change' 이벤트를 사용한다.

/* 미사용
function loadName() {
    const countryName = saveName;
    }
}

function init() {
    const print
}

init();
*/
