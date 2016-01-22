直接运行es6的方法
1.全局安装babel-cli: npm install babel-cli -g
2.安装babel, babel-core, babel-preset-es2015
3.在package.json加上"babel":{"presets": ["es2015"]}
4.命令行运行babel-node xxx.js