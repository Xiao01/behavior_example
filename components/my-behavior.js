// my-behavior.js
module.exports = Behavior({
  behaviors1: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: "my-behavior-data.",
    
  },
  attached: function () { 
   
  },
  methods: {
    myBehaviorMethod: function () {
      this.setData({
        myBehaviorData: "1."+this.data.myBehaviorData,
        myData: "1." +this.data.myData,
        myBehaviorProperty: "1." +this.properties.myBehaviorProperty,
        myProperty: "1." +this.properties.myProperty
      })
    }
  }
})