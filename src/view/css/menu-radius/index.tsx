import React, { useState } from 'react'
import CodePen from '@/components/codepen'

const MenuRadius: React.FC = () => {
  const htmlCode = `
	<ul>
		<div class="hori-selector">
				<div class="left"></div>
				<div class="right"></div>
		</div>
		<li no="1"><p >demo1</p></li>
		<li no="2">
				<p  class="active">demo2</p>
		</li>
		<li no="3"><p >demo3</p></li>
		<li no="4"><p >demo4</p></li>
		<li no="5"><p >demo5</p></li>
		<li no="6"><p >demo6</p></li>
		<li no="7"><p >demo7</p></li>
		<li no="8"><p >demo6</p></li>
		<li no="9"><p >demo7</p></li>
		<li no="10"><p >demo6</p></li>
		<li no="11"><p >demo7</p></li>
		<li no="12"><p >demo6</p></li>
		<li no="13"><p >demo7</p></li>
	</ul>
	`

  const cssCode = `
	body{
		height: 100%;
		background: #fff;
		display: flex;
		justify-content: center;
	}
	ul{
		list-style: none;
		position: relative;
	}
	li{
		width: 260px;
		height: 50px;
		background: #ecf5ff;
		display: flex;
		justify-content: end;
		cursor: pointer;
	}
	p{
		line-height: 50px;
		width: 260px;
		margin: 0;
		text-align: center;
		position: relative;
		background-color: transparent;
		transition-duration:0.6s;
		transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
	.active{
		color: skyblue;
		transition: all 0.7s;
	}
	.hori-selector{
		position: absolute;
		height: 50px;
		width: 240px;
		top: 50px;
		margin-left: 20px;
		transition-duration:0.6s;
		transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
		border-radius: 15px 0 0 15px;
		background-color: #fff;
	}
	.left{
		position: absolute;
		width: 20px;
		height: 20px;
		background-color: #fff;
		top: -20px;
		left: auto;
		right: 0px;
	}
	.right{
		position: absolute;
		width: 20px;
		height: 20px;
		background-color: #fff;
		bottom: -20px;
		right: 0px;
	}
	.right::after{
		content: '';
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		bottom: -30px;
		left: -30px;
		background-color: #ecf5ff;
	}
	.left::after{
		content: '';
		position: absolute;
		width: 40px;
		height: 40px;
		background-color: #ecf5ff;
		bottom: 0px;
		left: -20px;
		border-radius: 50%;
	}
	`

  const javascriptCode = `
		const ul = document.querySelector('ul');
		const hori = document.querySelector('.hori-selector')

		ul.addEventListener('click', (e) => {
				const clickedLi = e.target.closest('li');
				
				if (clickedLi) {
						const lis = ul.querySelectorAll('li');
						lis.forEach(li => {
								li.firstElementChild.classList.remove('active');
						});
						const no = clickedLi.getAttribute('no')
						hori.style.top = (no - 1) * 50 + 'px';
						clickedLi.firstElementChild.classList.add('active');
				}
		});
	`

  return <CodePen htmlCode={htmlCode} cssCode={cssCode} javascriptCode={javascriptCode} />
}

export default MenuRadius
