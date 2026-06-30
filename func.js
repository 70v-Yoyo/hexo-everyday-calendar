// script.js
function get_elements(){
	colors=['#9BE9A8','#3FC463','#31A14E','#216E39']
	// 获取 DOM 元素
	p= document.querySelector('body');//前面什么都没加const var的为全局变量
	footer=document.querySelector('body footer')
	together=document.createElement('div');
	together.classList.add('together');
	if(footer)p.insertBefore(together, footer);
	else p.appendChild(together);
	console.log(together);

	inline=document.createElement('div');
	inline.id='header';
	together.appendChild(inline);
	
	title=document.getElementsByClassName('c_title')[0];
	if (title===undefined){//==会进行类型转换 ===不会
	  title=document.createElement('span');
	  title.textContent='Contribution';
	  title.classList.add('c_title');
	  together.appendChild(title);
	}
	label=document.getElementsByClassName('c_label')[0];
	if(label===undefined){
	  label=document.createElement('label');
	  label.textContent='Select Year: ';
	  label.classList.add('c_label')
	  together.appendChild(label);
	}
	yearSelect=document.getElementsByClassName('year-select')[0];
	if(yearSelect===undefined){
	  yearSelect = document.createElement('select');
	  yearSelect.classList.add('year-select');
	  together.appendChild(yearSelect);
	}
	// cpright=document.getElementsByClassName('cpright')[0];
	// if (cpright===undefined){//==会进行类型转换 ===不会
	//   cpright=document.createElement('span');
	//   cpright.textContent='by Yoyo';
	//   cpright.classList.add('cpright');
	//   together.appendChild(cpright);
	// }
	inline.appendChild(title);
	inline.appendChild(label);
	inline.appendChild(yearSelect);
	// inline.appendChild(cpright);

	middle=document.getElementsByClassName('middle')[0];
	if(middle===undefined){
		middle = document.createElement('div');
		middle.classList.add('middle');
		together.appendChild(middle);//添加一个新的类名
	}
	month_float=document.getElementsByClassName('month_float')[0];
	if(month_float===undefined){
		month_float = document.createElement('div');
		month_float.classList.add('month_float');
		middle.appendChild(month_float);//添加一个新的类名
	}

	calendarElement=document.getElementsByClassName('calendar')[0];
	if(calendarElement===undefined){
	  calendarElement = document.createElement('div');
	  calendarElement.classList.add('calendar');
	  middle.appendChild(calendarElement);
	}

	lessmore=document.getElementsByClassName('lessmore')[0];
	if(lessmore===undefined){
	  lessmore = document.createElement('p');
	  lessmore.classList.add('lessmore');
	  together.appendChild(lessmore);
	  lessmore.innerHTML="less<div id='desc_blocks'></div>more";
	  desc_blocks=document.getElementById('desc_blocks');
	  for(let i=0;i<4;i++){
		let item=document.createElement('div');
		item.classList.add('desc_blocks_item');
		item.style.backgroundColor=colors[i];
		desc_blocks.appendChild(item);
	  }
	}

	fireworks=document.getElementsByClassName('fireworks')[0];
	if(fireworks===undefined){
	  fireworks = document.createElement('div');
	  fireworks.classList.add('fireworks');
	  together.appendChild(fireworks);
	}
  }
  
  // 渲染年份选择器
  function renderYearSelect(currentYear) {
	for (let i = currentYear - 5; i <= currentYear; i++) {
	  const option = document.createElement('option');
	  option.value = i;
	  option.text = i;
	  yearSelect.appendChild(option);
	}
	yearSelect.value = currentYear; // 默认选中当前年份
  }
  
  // 获取某个年份每个月的天数
  function getDaysInMonth(month, year) {
	const date = new Date(year, month + 1, 0);/*当月最后一天 */
	//console.log(date.getDate());/*返回最后一天的日号 */
	return date.getDate();
  }
  function padStart2_0(num){
	return String(num).padStart(2,'0');
  }
    // 生成随机颜色
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  // 渲染打卡墙
  function renderCalendar(year=currentYear) {
	  const daytip = document.createElement('div');
	  daytip.classList.add('tooltip');
	  together.appendChild(daytip);
	  calendarElement.innerHTML = ''; // 清空之前的内容
	  month_text=['Jan','↓','Dec']
	  for (let month = 0; month < 12; month++) {
		const monthContainer = document.createElement('div');
		monthContainer.classList.add('month-container');//添加一个新的类名
		 if(month_float.children.length<3){
			// 添加月份头部
			const monthHeader = document.createElement('div');
			monthHeader.classList.add('month-header');
			monthHeader.textContent = month_text[month];
			month_float.appendChild(monthHeader);
		 }
		  
		  // 渲染每个月的打卡格子
		  const daysInMonth = getDaysInMonth(month, year);
		  for (let day = 1; day <= daysInMonth; day++) {
			  const dayElement = document.createElement('div');
			  // 检查是否已打卡
			  let thisday=`${year}-${padStart2_0(month+1)}-${padStart2_0(day)}`;
			  dayElement.classList.add('grid-item');
			  //dayElement.textContent = day;
			  dayElement.setAttribute('block_date',`${thisday} : ${checkedDays[thisday]?? 'no'} ${checkedDays[thisday]===1?'post':'posts'}`);
			  monthContainer.appendChild(dayElement);
  
			  if (thisday in checkedDays) {
				  dayElement.classList.add('checked');
				  switch (checkedDays[thisday]){
					case 1:
						dayElement.style.backgroundColor=colors[0];
						break;
					case 2:
						dayElement.style.backgroundColor=colors[1];
						break;
					case 3:
						dayElement.style.backgroundColor=colors[2];
						break;
					default:
						dayElement.style.backgroundColor=colors[3];
				  }
			  } else {
				  dayElement.classList.add('unchecked');
			  }
			  const container = document.getElementsByClassName("fireworks")[0];
			  dayElement.addEventListener("click", (event) => {
				const originX = event.clientX;
				const originY = event.clientY;

				const numParticles = 10;
				const radius = 20;

				for (let i = 0; i < numParticles; i++) {
					const firework = document.createElement("div");
					firework.className = "firework";

					firework.style.position = "absolute";
					firework.style.left = `${originX}px`;
					firework.style.top = `${originY}px`;
					firework.style.width = "8px";
					firework.style.height = "8px";
					firework.style.borderRadius = "50%";
					firework.style.background = getRandomColor();
					container.appendChild(firework);

					const angle = (i / numParticles) * Math.PI * 2;
					const x = Math.cos(angle) * radius;
					const y = Math.sin(angle) * radius;

					requestAnimationFrame(() => {
						firework.style.transition =
							"transform 600ms ease-out, opacity 600ms";
						firework.style.transform = `translate(${x}px, ${y}px)`;
						firework.style.opacity = "0";
					});

					firework.addEventListener("transitionend", () => {
						firework.remove();
					});
				}
			});
		  }
		  
		  calendarElement.appendChild(monthContainer);
	}
	//console.log(month_float);
	func_tooltip();
  }
  
  // 获取本地存储的打卡日期
  // function getCheckedDays() {
  //   const checkedDays = JSON.parse(localStorage.getItem('checkedDays')) || [];
  //   func_tooltip();
  //   return checkedDays;
  // }
  
  // // 更新本地存储中的打卡日期
  // function updateCheckedDays(checkedDays) {
  //   console.log(hexo.locals.get("posts"));
  //   localStorage.setItem('checkedDays', JSON.stringify(checkedDays));
  // }
  
  // 取消切换打卡状态
  //烟花
  //function toggleCheckIn(year, month, day) {
    // const checkedDays = getCheckedDays();
    // const dayString = `${year}-${month}-${day}`;
  
    // // 如果已打卡，则移除
    // if (checkedDays.includes(dayString)) {
    //   const index = checkedDays.indexOf(dayString);
    //   checkedDays.splice(index, 1);
    // } else {
    //   // 否则，添加打卡
    //   checkedDays.push(dayString);
    // }
  
    // updateCheckedDays(checkedDays);
    // renderCalendar(year);  // 重新渲染
	
  //}
  
  function func_tooltip(){
	  // 获取所有的日期块
	const dateBlocks = document.querySelectorAll('.grid-item');
	dateBlocks.forEach(block =>{
		block.addEventListener('mouseenter', (e) => {
		// 获取data-date属性的值
		const date = e.target.getAttribute('block_date');
		daytip=document.getElementsByClassName('tooltip')[0];
		daytip.textContent=date;
		// 获取日期块的位置，定位 tooltip
		const rect = e.target.getBoundingClientRect();
		//console.log(date,daytip,rect);
		daytip.style.position='absolute';
		//console.log(block,scrollX);
		daytip.style.left=`${rect.left + scrollX-30}px`;
		daytip.style.top=`${rect.top+scrollY -60}px`;
		daytip.style.display='block';
		
		})
		// 当鼠标离开时隐藏 tooltip
	  block.addEventListener('mouseleave', () => {
		daytip.style.display = 'none';
	  });
	});
  }

  function all(){
	//这里插入checkedDays变量
	/* HEXO_POSTS */
	currentYear=new Date().getFullYear();
	//默认今年
	get_elements();
	// 初始化年份选择器和打卡墙
	renderYearSelect(currentYear);
	// 监听年份选择变化
	yearSelect.addEventListener('change', (event) => {
	  const selectedYear = event.target.value;
	  console.log(event)
	  renderCalendar(selectedYear);  // 根据选择的年份渲染打卡墙
	});
	renderCalendar();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
	// DOM 渲染完成后执行的代码
	console.log('DOM已完全加载，可以执行 JS 文件');
	let link=document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = './style.css';  // CSS 文件的路径
	// 将 <link> 标签添加到 <head> 中
	document.head.appendChild(link);
	all();
  });

