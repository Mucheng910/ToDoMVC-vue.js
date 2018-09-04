(function (window) {
	'use strict';
	var todos=[];

	console.log(todos);
	//noinspection JSAnnotator

	var app=new Vue({
		el:"#app",
		data:{
			todos: todos,
			text: '',
			isCompleted: false,
			editing: true
		},
		filters:{
			all:function () {
			}

		},
		methods:{
			f:function () {
				window.alert("this.text")
			},
			add:function () {
				if(this.text.trim().length===0){
					return
				}
				this.todos.push({
					text:this.text,
					Completed:false
				});
				this.text=""
			},
			del:function (text) {
				var todoIndex;
				this.todos.find(function (todo,index) {
					if(todo.text===text){
						todoIndex=index
					}
				});
				this.todos.splice(todoIndex,1)
			},
			edit:function () {
				this.$nextTick(function () {
					this.input.focus()
				})
			}
		}

	});




	// Your starting point. Enjoy the ride!



})(window);
