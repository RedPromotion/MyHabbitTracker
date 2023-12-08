import React, { useState } from "react";
import { v4 } from 'uuid';  // 난수생성 라이브러리  ->  npm install uuid

import '../Style/bigButton.css';    // 큰 버튼 & 텍스트 CSS Style
import '../Style/textStyle.css';    // input Text CSS Style

import TextField from '@mui/material/TextField';    // MUI Lib -> TextField 사용.

/*******************************************************************************************	
■ 페이지명	: AddForm.jsx
■ 작성목적	: App.js > Root.jsx > 중단의 취미 추가 기능 부분
■ 비    고 : 

■ 주요변경내역    
VER			DATE		AUTHOR				DESCRIPTION
----------  ----------	---------------	    ------------------------------- 
0.1			2023-12-06	홍승진              1.신규생성.
0.2			2023-12-08	홍승진			    1.데이터 삽입 시 유효성 검사 (미입력, 중복)
                                            2.index -> UUIDv4 랜덤 난수로 변경
*******************************************************************************************/

function AddForm({ habbits, setHabbits}) {    
    
    /**
     * @function    AddHabbit
     * @role        함수
     * @description `ADD` 버튼을 클릭하면 취미 리스트에 1개 추가
     * @author      홍승진
     * @CreateDate  2023.12.06
     */
    const AddHabbit = () => {

        console.log("[AddForm.jsx] button : ADD 취미 추가 시도");    

        if (document.getElementById("inputText").value === '')  // 미입력 예외처리
        {
            alert("입력 실패 : 취미 이름을 입력 후 ADD 버튼을 눌러주세요. "); 
            console.log("[AddForm.jsx] 예외처리: 이름 미입력"); 
        } 
        else if ( habbits.some((habbits) => { return habbits.name === document.getElementById("inputText").value; }) )  // 동일한 이름 있으면 예외처리.   
        {
            alert(`입력 실패 : 동일한 취미 "${document.getElementById("inputText").value}"가 존재합니다. 다른 이름으로 입력 후 ADD 버튼을 눌러주세요.`);
            console.log("[AddForm.jsx] 예외처리: 이름 중복"); 
        }
        else // 실행
        {
            setHabbits((prevHabbits) => [
                ...prevHabbits,
                {
                      index: v4()   // uuidv4 랜덤기반 구분자 생성
                    , name: document.getElementById("inputText").value  // 입력 문자열 저장
                    , value: 0
                },
            ]);    
            console.log("[AddForm.jsx] Updated habbits:", habbits); 
        }
    };

    return (
        <div>                            
            <div>
                {/* <input type="text" className="bigButton" id="inputText" placeholder="habit"></input> */}
                <TextField className="bigButton" id="inputText" label="이름" type="search" />   {/* -> 취미 명칭 입력 칸 */}
            </div>
            <div>
                <button className="bigButton" id="addButton" onClick={AddHabbit}>ADD</button>
            </div>              
        </div>
    );    
    
};



export default AddForm;