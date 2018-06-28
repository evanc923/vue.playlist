new Vue({
  el: '#vue-app',
  data: {
    name: "Reginald",
    age: "23",
    website: "http://www.promise.com.tw"
  },
  methods: {
    greet:function(time){
      return 'Good ' + time + ' ' + this.name;
    },
    add:function(){
      return this.age++;
    },
    sub:function(){
      return this.age--;
    }
  },
  computed: {
    /*
    add:function(){
      return this.age++;
    },
    sub:function(){
      return this.age--;
    }*/
  }
});
