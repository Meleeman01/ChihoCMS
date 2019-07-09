<div id="delete-book" class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Are you Sure you want to delete "@{{title}}"?</p>
      <button class="delete" aria-label="close" v-on:click="closeDeleteModal"></button>
    </header>
    <section class="modal-card-body">
      <p>warning, this action cannot be undone.</p>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-danger" v-on:click="deleteBook">Delete</button>
      <button class="button" v-on:click="closeDeleteModal">Cancel</button>
    </footer>
  </div>
</div>