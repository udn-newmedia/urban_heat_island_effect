module.exports = { 
  presets: [ 
    ['@vue/app', 
      {
         debug: true,
         polyfills: [ 'es7.array.includes', 'es6.object.assign' ] 
         //项目中用到的polyfill
       }    
  ]  
]}