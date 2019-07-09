<div id="edit-book" class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Editing "@{{title}}"</p>

      <button class="delete" aria-label="close" v-on:click="closeEditModal"></button>
    </header>
    <section class="modal-card-body">
      <div class="field" style="margin-top: 1em;">
        <label class="field-label is-medium" style="margin-left: 1em;">title</label>
        <div class="control">

          <input class="input is-large is-rounded" type="text" placeholder="Title" v-model="title">
        </div>
      </div>
      <div class="field">
        <label class="field-label is-medium" style="margin-left: 1em;">description</label>
        <div class="control">
          <input class="input is-medium is-rounded" type="text" placeholder="what it's about?" v-model="description" value="{{$book->description}}">
        </div>
      </div>
      <div class="field">
        <label class="field-label is-medium" style="margin-left: 1em;">update frequency</label>
        <div class="control">
          <input class="input is-medium is-rounded" type="text" placeholder="update frequency" v-model="update_frequency">
        </div>
      </div>
      <div class="field">
        <label class="field-label is-medium" style="margin-left: 1em;">sort order</label>
        <div class="control">
          <input class="input is-medium is-rounded" type="text" placeholder="update frequency" v-model="sort_order">
        </div>
      </div>
      <div class="field is-grouped is-pulled-right">
        <div class="control is-flex">
          <label class="checkbox" style="align-self: center;">
            <input type="checkbox" v-model="isComplete">
            is completed?
        </label>
        </div>
        <div class="control">
          <button  class="button" v-on:click="editBook">submit</button>
        </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-primary" v-on:click="editBook">Update</button>
      <button class="button" v-on:click="closeEditModal">Cancel</button>
    </footer>
  </div>
</div>