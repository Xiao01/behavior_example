// components/component-tag-name.js
var myBehavior = require('my-behavior')
Component({
  behaviors: [myBehavior],
  properties: {
    myProperty: {
      type: String
    }
  },
  data: {
    myData: "my-Data.",
    
  },
  attached: function () {
   },
  methods: {
    myMethod: function () { 
    },
  }
})
