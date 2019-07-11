<template>
  <div>
    <el-table :data="getTable">
      <el-table-column prop="id" label="Id" width="140"></el-table-column>
      <el-table-column prop="name" label="Name" width="250"></el-table-column>
      <el-table-column prop="description" label="Description"></el-table-column>
      <el-table-column label="Actions" width="120">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            @click.prevent="changeRow(scope.row.id)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click.prevent="deleteRow(scope.$index)"
          ></el-button>
        </template>
      </el-table-column>
      <div slot="empty">
        <el-alert title="Empty list" type="error" :closable="false"></el-alert>
      </div>
    </el-table>
    <el-button type="primary" class="create-btn" @click="$router.push('create')">Create</el-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    deleteRow(index) {
      this.$store.dispatch("deleteRow", index);
    },
    changeRow(id) {
      this.$store.dispatch("addEditingId", id);
      
      this.$router.push('edit')
    }
  },
  computed: {
    ...mapGetters(["getTable"])
  }
};
</script>
<style lang="scss" scoped>
.create-btn {
  margin-top: 30px;
}
</style>

