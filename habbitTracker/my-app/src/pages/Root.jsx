import React, { useState , useEffect } from "react";
import '../Style/bigButton.css';    // 버튼 디자인 CSS

import Header   from "./Header";     //"로고, 제목, TotalCount" Page
import AddForm  from "./AddForm";    //"취미 추가 기능" Page
import Habbits  from "./Habbits";    //"취미 리스트, 리셋버튼" Page

/*******************************************************************************************	
■ 페이지명	: Root.jsx
■ 작성목적	: App.js > Header + AddForm + Habbits 를 합쳐서 취미 등록 페이지로 변경하기.
■ 비    고 : 

■ 주요변경내역    
VER			DATE		AUTHOR				DESCRIPTION
----------  ----------	---------------	    ------------------------------- 
0.1			2023-12-05	홍승진              1.신규생성.
0.02        2023-12-08  홍승진              1.Array.From에서 reduce()로 변경
*******************************************************************************************/

function Root() {    
    
    const [habbits,     setHabbits]     = useState([]); /* 취미 리스트 정보  -> AddForm.jsx & Habbits.jsx*/
    const [totalCount,  setTotalCount]  = useState(0);  /* 취미의 value가 1 이상의 숫자값 저장. -> Header.jsx */

    useEffect(() => {
        console.log("[Root.jsx] Updated habbits:", habbits);

        // 변경을 감지할 때, 취미의 값(Value)를 측정하여 양수 갯수 저장 (Array.From vs reduce())
        // const positiveCount = Array.from(habbits).filter((item) => item.value >= 1).length;                  // Array.From
        const positiveCount = habbits.reduce((preValue, item) => preValue + (item.value >= 1 ? 1 : 0), 0);      // reduce()
        setTotalCount(positiveCount);

      }, [habbits]); // habbits 값이 변경될 때만 useEffect가 실행되도록 설정

    return (
        <div id="root">
            <Header     totalCount={totalCount} />                  {/* 제목, 집계  Page */}
            <AddForm    habbits={habbits} setHabbits={setHabbits}/> {/* 취미 추가   Page */}
            <Habbits    habbits={habbits} setHabbits={setHabbits}/> {/* 취미 리스트 Page */}            
        </div>
    );
};

export default Root;