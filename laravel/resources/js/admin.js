let axios = require('axios');
let Vue = require('vue');

// let modals = new Vue({
//     el:'.book-modal',
//     methods:{
        
//     }
// });

let books = new Vue({
    el:'#book',
    created: function(){
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    },
    data:{
        id:null,
        title:null,
        description:null,
        update_frequency:null,
        sort_order:0,
        isComplete:false,
    },
    mounted:function(){
        this.getTitle();
    },
    methods:{
        getTitle:function(){
            let title = document.querySelector('select').value;
            title = JSON.parse(title);
            console.log(title);
            this.title = title['title'];
        },
        getData:function(){
            let data = document.querySelector('select').value;
            data = JSON.parse(data);
            this.title = data.title;
            this.id = data.id;
            this.description = data.description;
            this.update_frequency = data.update_frequency;
            this.sort_order = data.sort_order;
            this.isComplete = data.is_complete;
        },
        // so we don't see any unnecessary data when creating a new book.
        clean:function(){
            this.id = null;
            this.title = null;
            this.description = null;
            this.update_frequency = null;
            this.sort_order = 0;
            this.isComplete = false;
        },
        //----------------show/hide Modals------------------//
        showBookModal:function(){
            books.clean();
            let show = document.querySelector('#create-book');
            show.classList.add('is-active');
        },
        showBookDelete:function(){
            this.getData();
            let show = document.querySelector('#delete-book');
            show.classList.add('is-active');
        },
        closeCreateModal:function(){
            let close = document.querySelector('#create-book');
            close.classList.remove('is-active');
        },
        closeDeleteModal:function(){
            let close = document.querySelector('#delete-book');
            close.classList.remove('is-active');
        },
        showEditModal:function (){
            this.getData();
            let show = document.querySelector('#edit-book');
            show.classList.add('is-active');
        },
        closeEditModal:function(){
            let close = document.querySelector('#edit-book');
            close.classList.remove('is-active');
        },

        //--------------------CRUD Methods-------------------//

        submit:function(){
            console.log(this.$data);
            
            axios.post('/books/store', { data: this.$data })
                .then(function (response) {
                    console.log(response);
                    books.closeCreateModal();
                    window.location.href = '/books';
                })
                .catch(function (error) {
                    // Wu oh! Something went wrong
                    console.log(error.message);
                });
        },
        deleteBook:function(){
            axios.delete('/books/destroy',{ data:this.$data })
                .then(function (response) {
                    console.log(response);
                    window.location.href = '/books';
                })
                .catch(function(error){
                    console.log(error.message);
                });
            console.log('delete-request');
        },
        editBook:function(){
            axios.patch('/books/update',{data:this.$data })
                .then(function(response){
                    console.log(response);
                    books.closeEditModal();
                    window.location.href = '/books';
                })
                .catch(function(error){
                    console.log(error.message);
                });
        }
    }
});