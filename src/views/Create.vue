<template>
  <el-form
    :model="formData"
    status-icon
    :rules="rules"
    ref="createForm"
    label-width="120px"
    class="create-form"
  >
    <el-form-item label="Name" prop="name">
      <el-input v-model="formData.name"></el-input>
    </el-form-item>
    <el-form-item label="Description" prop="description">
      <el-input type="textarea" v-model="formData.description"></el-input>
    </el-form-item>
    <el-button type="success" @click="createRow(formData)">Create</el-button>
    <el-button @click="$router.push('/')">Back</el-button>
  </el-form>
</template>

<script>
export default {
  name: "create",
  data() {
    return {
      formData: {
        name: "",
        description: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input name",
            trigger: "blur"
          },
          {
            min: 5,
            message: "must be longer than 6",
            trigger: "blur"
          }
        ],
        description: [
          {
            required: true,
            message: "Please input discription",
            trigger: "blur"
          },
          {
            min: 10,
            message: "must be longer than 10",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    createRow(formData) {
      this.$refs.createForm.validate(valid => {
        if (valid) {
          this.$store.dispatch("createRow", formData);
          this.$message.success("Post created");
          this.$router.push("/");
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.create-form {
  width: 100%;
}
</style>