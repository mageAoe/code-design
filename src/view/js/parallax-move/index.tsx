import React from 'react'
import CodePen from '@/components/codepen'

const ParallaxMove: React.FC = () => {
  const htmlCode = `
	<div class="carousel-item-container" id="container">
		<div class="carousel-img" id="carousel">
				<div class="ImageLoader-container">
						<img id="img" src="https://www4.bing.com//th?id=OHR.WhitsundaySwirl_ZH-CN9085371328_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp" 
										style="opacity: 1 ;transition: all 0.5s">
				</div>
				<div class="title" id="title">落霞与孤鹜齐飞，秋水共长天一色</div>
				<div class="desc" id="desc">落日映射下的彩霞与孤独的野鸭一齐飞翔，秋天的江水和辽阔的天空连成一片，浑然一色。</div>
		</div>
	</div>
	`

  const cssCode = `
	*{
		margin: 0;
		padding: 0;
		}
		html,body{
				width: 100%;
				height: 100%;
		}
		body{
				display: flex;
				justify-content: center;
				align-items: center;
		}
		.carousel-item-container{
				width: 80%;
				height: 80%;
				color: #fff;
				position: relative;
				overflow: hidden;
		}
		.carousel-img{
				width: 130%;
				height: 130%;
				position: absolute;
				transition: .8s;
		}
		.title,.desc{
				position: absolute;
				letter-spacing: 4px;
				left: 5%;
				color: #fff;
				text-shadow: 1px 0 rgba(0, 0, 0, 0.5),-1px 0 rgba(0, 0, 0, 0.5),0 1px rgba(0, 0, 0, 0.5),0 -1px rgba(0, 0, 0, 0.5);
				
				white-space: nowrap;
				overflow: hidden;
				opacity: 0;
		}
		.title{
				font-size: 2.8rem;
				top: calc(50% - 40px);
				color: palegoldenrod;
		}

		.desc{
				font-size: 1.3rem;
				top: calc(50% + 20px);
				color: papayawhip;
		}

		.ImageLoader-container{
				position: relative;
				width: 100%;
				height: 100%;
				overflow: hidden;
		}
		.ImageLoader-container img{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
		}
	`

  const javascriptCode = `
		const titleDom = document.getElementById('title')
		const descDom = document.getElementById('desc')
		const imgDom = document.getElementById('img')
		const carouselDom = document.getElementById('carousel')
		const containerDom = document.getElementById('container')

		let itleWidth = 0
		let descWidth = 0
		let containerSize = null
		let innerSize = null
		let mouseX = 0
		let mouseY = 0


		const  handleMouseMove = (e) => {
				const ract =container.getBoundingClientRect() //或者整个元素的属性
				mouseX = e.clientX - ract.left;
				mouseY = e.clientY - ract.top;
				imagePosition()
		}

		containerDom.addEventListener('mousemove', handleMouseMove)

		const imagePosition = () => {
				if(!innerSize || !containerSize){
						return
				}
				const extraWidth = innerSize.width - containerSize.width
				const extraHeight =innerSize.height -containerSize.height
				const left = (-extraWidth /containerSize.width ) *mouseX
				const top = (-extraHeight /containerSize.height) *mouseY

				carouselDom.style.transform = 'translate(' + left + 'px,' + top + 'px' + ')'
		}
		
		const showWords = ()=> { // 调用该方法，显示文字
				title.style.opacity = 1;
				title.style.width = 0 + 'px';

				title.clientWidth; // reflow
				title.style.transition = "1s";
				title.style.width = itleWidth + "px";

				desc.style.opacity = 1;
				desc.style.width = 0;

				desc.clientWidth; // reflow

				desc.style.transition = "2s 1s";
				desc.style.width = descWidth + "px";
		}

		const setSize = ()=>{
			
				innerSize = {
						width: imgDom.clientWidth,
						height:imgDom.clientHeight
				}
				containerSize = {
						width:containerDom.clientWidth,
						height:containerDom.clientHeight
				}
		}

		const init  = ()=>{
				itleWidth = titleDom.clientWidth;
				descWidth = descDom.clientWidth;
				setSize()
				mouseX = containerSize.width / 2
				mouseY = containerSize.height / 2
				window.addEventListener('resiez', setSize)
		}

		const  handleMouseLeave = () => {
				this.mouseX = this.containerSize.width / 2
				
				this.mouseY = this.containerSize.height / 2
		}

		imgDom.onload = () => {
				showWords()
		}

		init()
	`

  return <CodePen htmlCode={htmlCode} cssCode={cssCode} javascriptCode={javascriptCode} />
}

export default ParallaxMove
