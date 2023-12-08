import React, { useEffect } from "react";
import '../Style/bigButton.css';    // 큰 버튼 & 텍스트 CSS Style
import '../Style/smallButton.css';  // 작은 버튼 CSS Style
import '../Style/textStyle.css';    // input Text CSS Style

import TextField from '@mui/material/TextField';    // MUI Lib -> TextField 사용.   
// 설치:  npm install @mui/material @emotion/react

/*******************************************************************************************	
■ 페이지명	: Habbits.jsx
■ 작성목적	: App.js > Root.jsx > 하단의 취미 리스트 + RESET ALL 버튼 페이지
■ 비    고 : 

■ 주요변경내역    
VER			DATE		AUTHOR				DESCRIPTION
----------  ----------	---------------	    ------------------------------- 
0.1			2023-12-05	홍승진              1.신규생성.
0.2         2023-12-08  홍승진              1.취미 점수를 0 밑으로 '-' 시도시 -버튼 동작 안함.
*******************************************************************************************/

function Habbits({ habbits, setHabbits }) {    

    useEffect(() => {
        console.log("[Habbits.jsx] Updated habbits:", habbits);
      }, [habbits]); 

    /**
     * @function    onIncrease
     * @role        함수
     * @description `+` 버튼을 클릭하면 해당 행의 값을 +1 증가.  
     * @author      홍승진
     * @CreateDate  2023.12.06
     */
    const onIncrease = (index) => {
        setHabbits((prevHabbits) =>
            prevHabbits.map((habbit) =>
            habbit.index === index
                ? { ...habbit, value: habbit.value + 1 }
                : habbit
            )
        );
    };

    /**
     * @function    onDecrease
     * @role        함수
     * @description `-` 버튼을 클릭하면 해당 행의 값을 -1 감소.  
     * @author      홍승진
     * @CreateDate  2023.12.06
     */
    const onDecrease = (index) => {
        setHabbits((prevHabbits) =>
                prevHabbits.map((habbit) =>
                habbit.index === index && habbit.value > 0
                    ? { ...habbit, value: habbit.value - 1 }
                    : habbit
            )
        );
    };

    /**
     * @function    onDelete
     * @role        함수
     * @description `X` 버튼을 클릭하면 해당 칸을 삭제.  
     * @author      홍승진
     * @CreateDate  2023.12.05
     */
    const onDelete = (index) => {
        setHabbits((prevHabbits) =>
            prevHabbits.filter((habbit) => habbit.index !== index)
        );
    };
    
    /**
     * @function    deleteAll
     * @role        함수
     * @description `RESET ALL` 버튼을 클릭하면 취미리스트 전체를 없앰.  
     * @author      홍승진
     * @CreateDate  2023.12.06
     */
    const deleteAll = (() => {
        console.log("[Habbits.jsx] button : reset all");
        setHabbits([]); 
    })

    /**
     * @style       HabbitsLineStyle
     * @role        CSS Style
     * @author      홍승진
     * @CreateDate  2023.12.05
     * @description 취미 리스트의 Style 설정
     */
    const HabbitsLineStyle = {
        display: 'flex',
        flexDirection: 'row', // 수평으로 배열
        justifyContent: 'center', // 수평으로 가운데 정렬
    };

    /**
     * @style       textFieldStyle
     * @role        CSS Style
     * @author      홍승진
     * @CreateDate  2023.12.08
     * @description textField의 여백 지정하는 Style 설정
     */
    const textFieldStyle = {
        margin: '5px'
    }

    return (
        <div>
            <div style={{height: "30px"}}></div>
            <div>
                {habbits.map((habbit) => (
                    <div key={habbit.index} className="listDiv" >    
                        <div style={HabbitsLineStyle}>
                            {/*  <strong>Index:</strong> {habbit.index}  */}
                            {/*  <div    className="listText"    id="habbitText"> {habbit.name}   </div> */} 
                            <TextField id="habbitText"  label="이름" variant="outlined" value={habbit.name} style={textFieldStyle}   />  
                            {/*  <div    className="listText"    id="scoreText">  {habbit.value}  </div> */} 
                            <TextField id="scoreText"   label="점수" variant="outlined" value={habbit.value} style={textFieldStyle}   />  
                            <button className="smallButton" id="plusButton"   onClick={() => onIncrease(habbit.index)}>   + </button>
                            <button className="smallButton" id="minusButton"  onClick={() => onDecrease(habbit.index)}>   - </button>
                            <button className="smallButton" id="deleteButton" onClick={() => onDelete(habbit.index)}>     X </button>                            
                        </div>                        
                    </div>
                ))}
            </div>
            <div style={{height: "30px"}}></div>
            <div>
                <button className="bigButton" id="resetButton" onClick={deleteAll}>RESET ALL</button>
            </div>

        </div>
    );
};

export default Habbits;