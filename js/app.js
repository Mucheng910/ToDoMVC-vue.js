(function (window) {
	'use strict';
	var todos=[];

	console.log(todos);
	//noinspection


	var app=new Vue({
		el:"#app",
		data: {
			todos: todos,
			text: '',
			isCompleted: false,
			editedTodo: null
		},
		computed:{
			count:function () {

			},
			filtertodos:function (){
				switch (this.visibility) {
					case 'active' :{
						return this.todos.filter(item => ! item.completed) ;
						break ;
					}
					case 'completed' :{
						return this.todos.filter( item => item.completed);
						break;
					}
					default :{
						return this.todos;
						break;
					}

				}



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
		directives:{   //添加全局资源
			'todo-focus':function (el,binding) {
				if(binding.value){
					el.focus();    //鼠标移动到其它地方并点击编辑状态消失
				}
			}
		}

	});




	// Your starting point. Enjoy the ride!



})(window);
