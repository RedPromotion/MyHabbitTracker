import React from "react";

import imgLogo from '../asset/reactLogoMini.jpeg'; // 로고이미지

/*******************************************************************************************	
■ 페이지명	: Header.jsx
■ 작성목적	: App.js > Root.jsx > 상단의 제목 및 Total Count 하는 페이지
■ 비    고 : 

■ 주요변경내역    
VER			DATE		AUTHOR				DESCRIPTION
----------  ----------	---------------	    ------------------------------- 
0.1			2023-12-05	홍승진              1.신규생성.
*******************************************************************************************/

function Header({totalCount}) {    

    return (
        <div>
            <div>
                <img  src={imgLogo} alt="React_Logo" /> 
            </div>
            <div>Habit Tracker</div>
            <div>Total = {totalCount}</div>         {/* totalCount는 value 중 양수값만 옮김. */}
            <div style={{height: "30px"}}></div>    {/* 여백 공간용 HTML. */}
        </div>
    );
};

export default Header;