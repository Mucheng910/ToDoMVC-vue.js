(function (window) {
	'use strict';
	var todos=[];

	console.log(todos);
	//noinspection JSAnnotator

	var app=new Vue({
		el:"#app",
		data: {
			todos: todos,
			text: '',
			isCompleted: false,
			editedTodo: null
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
			editTodo:function (todo){
				this.beforeEditCache=todo.text;
				this.editedTodo=todo;
			},
			doneEdit:function (todo) {
				if(!this.editedTodo){
					return ;
				}
				this.editedTodo=null;
				todo.text=todo.text.trim();
				if(!todo.text){
					this.del(todo)
				}
			},
			cancelEdit:function (todo) {
				this.editedTodo=null;
				todo.text=this.beforeEditCache;
			}


		},
		directives:{
			'todo-focus':function (el,binding) {
				if(binding.value){
					el.focus();
				}
			}
		}

	});




	// Your starting point. Enjoy the ride!



})(window);
