<template>
  <div>
    <PetTable :pets="dogs" species="Dogs" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PetTable from "../components/PetTable";

export default {
  components: {
    PetTable
  },
  computed: {
    ...mapState(["dogs"])
  }
};
</script>
