<template>
  <div>
    <PetTable :pets="cats" species="Cats" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PetTable from "../components/PetTable";

export default {
  data() {
    return {};
  },
  components: {
    PetTable
  },
  computed: {
    ...mapState(["cats"])
  }
};
</script>
