module.exports = {
   endOfLine: "auto",
   "printWidth": 120,
   "tabWidth": 2,
   "useTabs": false,                    
   "semi": false,                      
   "singleQuote": true,                
   "quoteProps": "as-needed",          
   "jsxSingleQuote": true,             
   "trailingComma": "none",            
   "bracketSpacing": true,             
	  // 箭头函数，只有一个参数的时候，也需要括号
  	arrowParens: "always",
	  // 每个文件格式化的范围是文件的全部内容
		rangeStart: 0,
		rangeEnd: Infinity,
		// 不需要写文件开头的 @prettier
		requirePragma: false,
		// 不需要自动在文件开头插入 @prettier
		insertPragma: false,
		// 使用默认的折行标准
		proseWrap: 'preserve',
		// 根据显示样式决定 html 要不要折行
		htmlWhitespaceSensitivity: 'css',             
   "vueIndentScriptAndStyle": false,   
   "embeddedLanguageFormatting": "off",
	 bracketSameLine: true
}
