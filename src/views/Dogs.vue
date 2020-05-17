<template>
  <div>
    <h1>
      Dogs Adaption
    </h1>
    <b-table :fields="fields" :items="dogs">
      <template v-slot:cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/pets/dogs/${data.index}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['dogs']),
  },
};
</script>
