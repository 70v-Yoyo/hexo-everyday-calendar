// script.js
function get_elements(){
	// 获取 DOM 元素
	p= document.getElementsByClassName('site-body')[0];//前面什么都没加const var的为全局变量
	together=document.createElement('div');
	together.classList.add('together');
	p.appendChild(together);
	console.log(together);

	inline=document.createElement('div');
	together.appendChild(inline);
	
	title=document.getElementsByClassName('c_title')[0];
	if (title===undefined){//==会进行类型转换 ===不会
	  title=document.createElement('span');
	  title.textContent='打卡墙';
	  title.classList.add('c_title');
	  together.appendChild(title);
	}
	label=document.getElementsByClassName('c_label')[0];
	if(label===undefined){
	  label=document.createElement('label');
	  label.textContent='选择年份:';
	  label.classList.add('c_label')
	  together.appendChild(label);
	}
	yearSelect=document.getElementsByClassName('year-select')[0];
	if(yearSelect===undefined){
	  yearSelect = document.createElement('select');
	  yearSelect.classList.add('year-select');
	  together.appendChild(yearSelect);
	}
	cpright=document.getElementsByClassName('cpright')[0];
	if (cpright===undefined){//==会进行类型转换 ===不会
	  cpright=document.createElement('span');
	  cpright.textContent='by Yoyo';
	  cpright.classList.add('cpright');
	  together.appendChild(cpright);
	}
	inline.appendChild(title);
	inline.appendChild(label);
	inline.appendChild(yearSelect);
	inline.appendChild(cpright);

	month_float=document.getElementsByClassName('month_float')[0];
	if(month_float===undefined){
		month_float = document.createElement('div');
		month_float.classList.add('month_float');
		together.appendChild(month_float);//添加一个新的类名
	}

	calendarElement=document.getElementsByClassName('calendar')[0];
	if(calendarElement===undefined){
	  calendarElement = document.createElement('div');
	  calendarElement.classList.add('calendar');
	  together.appendChild(calendarElement);
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
			  dayElement.classList.add('grid-item');
			  //dayElement.textContent = day;
			  dayElement.setAttribute('block_date',`${year}-${padStart2_0(month+1)}-${padStart2_0(day)}`);
			  monthContainer.appendChild(dayElement);
  
			  // 检查是否已打卡
			  
			  if (checkedDays.includes(`${year}-${padStart2_0(month+1)}-${padStart2_0(day)}`)) {
				  dayElement.classList.add('checked');
			  } else {
				  dayElement.classList.add('unchecked');
			  }
  
			  // 点击格子打卡
			  dayElement.addEventListener('click', (event) => {
				const rect = event.target.getBoundingClientRect();
				
				let numParticles = 10; // 粒子的数量
				container=document.getElementsByClassName('fireworks')[0];
				for (let i = 0; i < numParticles; i++) {
					let firework = document.createElement('div');
					firework.classList.add('firework');
			
					// 随机设置颜色
					let color = getRandomColor();
					firework.style.backgroundColor = color;
					firework.style.position = 'absolute';
					const centerX=`${rect.left}`;
					const centerY=`${rect.top+ scrollY-210}`; //rect.top+ scrollY才是元素的绝对位置 相对于整个网页的坐标
					console.log(rect.top,centerY)
					// 设置烟花的初始位置为点击位置
					container.style.left = centerX+'px';
					container.style.top =centerY+'px';
					firework.style.left = `0px`;
					firework.style.top =  `0px`;
					firework.style.width = '2px';
					firework.style.height = '2px';
					firework.style.zIndex='10';
					firework.style.display='block';
					console.log(Math.PI/180)
					const angle=(Math.PI/180)*(i+1)*(360/10);
					// 计算目标点的坐标
					const x = Math.cos(angle) * 4;
					const y = Math.sin(angle) * 4;
					console.log(angle,x,y,centerX,centerY);
					 // 使用 transform 来计算并设置粒子的位置
					firework.style.transform = `translate(${x}px, ${y}px)`;
					// 设置烟花的飞行方向
					// firework.style.animationName = 'explode';
					// firework.style.animationTimingFunction = 'ease-out';
					//console.log(firework)
					
					container.appendChild(firework);
					console.log(firework.style.transform);
					// 或者使用这种方法触发样式更新
					container.style.display = 'none';
					container.offsetHeight;  // 强制浏览器重绘
					container.style.display = 'block';
					//清理：动画结束后移除烟花元素
					// firework.addEventListener('animationend', function() {
					// 	firework.remove();
					// });
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
		daytip.style.left=`${rect.left + scrollX}px`;
		daytip.style.top=`${rect.top+scrollY -270}px`;
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

