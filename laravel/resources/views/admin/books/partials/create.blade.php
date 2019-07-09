
  <div id="create-book" class="modal">
  <div class="modal-background" v-on:click="closeCreateModal"></div>
  <div class="modal-content">
    
    <!-- Any other Bulma elements you want -->
    <h1 class=" panel-heading is-size-4 " style="text-align: right; padding: 0.35em .75em;">Lets make a book!</h1>
    <div style="padding: 0em 1.5em">
      
      <div class="field" style="margin-top: 1em;">
        <div class="control">
          <input class="input is-large is-rounded" type="text" placeholder="Title" v-model="title">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input is-medium is-rounded" type="text" placeholder="what it's about?" v-model="description">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input is-medium is-rounded" type="text" placeholder="update frequency" v-model="update_frequency">
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
          <button  class="button" v-on:click="submit">submit</button>
        </div>
      </div>
    </div> 
  </div>
  <button class="modal-close is-large" v-on:click="closeCreateModal" aria-label="close"></button>
</div>
    