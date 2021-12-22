import { useState } from "react";

function Panel() {
	const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];
	const path = process.env.PUBLIC_URL;
	const deg = 360/arr.length;	
	const btnStyle = {position: 'fixed', top:0, left:0}
	
	let [names, setNames] = useState(arr);
	//console.log(names); //(8) ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers']
	//console.log(setNames); // ƒ dispatchAction(fiber, queue, action) {...} 

	const changeState = () =>{
		let newArr = [...arr]; //새로운 배열로 복사함
		newArr[0] = 'Escape';
		console.log(newArr); //(8) ['Escape', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers']
		console.log(arr); // (8) ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers']
		setNames(newArr); // 변경된 함수로 값을 변경한다.
	}

	return (
		<>
		<button style={btnStyle} onClick={changeState}>button</button>
		<section>
		{
			names.map((data,index)=>{	
				let style = {transform: `rotate(${deg*index}deg) translateY(-100vh)`}	
				let imgSrc = `${path}/img/${data}.jpg`

				return (
					<article key={index} style={style}>
						<div className="inner">
							<div className="pic">
								<img src={imgSrc} />
							</div>

							<h2>{data}</h2>				
						</div>
					</article>
				)
			})
		}
		</section>
		</>		
	)
}

export default Panel;