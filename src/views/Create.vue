<template>
  <el-form :model="formData" status-icon ref="createForm" label-width="120px" class="create-form">
    <div class="errors">
      <el-alert
        class="error"
        type="error"
        :closable="false"
        v-if="!$v.formData.name.required && $v.formData.name.$dirty"
      >Field name is required.</el-alert>
      <el-alert
        class="error"
        type="error"
        :closable="false"
        v-if="!$v.formData.name.alpha && $v.formData.name.$dirty"
      >Your name is invalid, you must only use letters.</el-alert>
      <el-alert
        class="error"
        type="error"
        :closable="false"
        v-if="!$v.formData.description.required && $v.formData.description.$dirty"
      >Field description is required.</el-alert>
    </div>
    <el-form-item label="Name" prop="name" :vuelidate="$v.formData.name">
      <el-input v-model="formData.name" @input="$v.formData.name.$touch()"></el-input>
    </el-form-item>
    <el-form-item label="Description" prop="description" :vuelidate="$v.formData.description">
      <el-input
        type="textarea"
        v-model="formData.description"
        @input="$v.formData.description.$touch()"
      ></el-input>
    </el-form-item>
    <el-button
      type="success"
      @click="createRow(formData)"
      :disabled="$v.$invalid || $v.pending"
    >Create</el-button>
    <el-button @click="$router.push('/')">Back</el-button>
  </el-form>
</template>

<script>
import { required, alpha } from "vuelidate/lib/validators";
export default {
  name: "create",
  data() {
    return {
      formData: {
        name: "",
        description: ""
      }
    };
  },
  validations: {
    formData: {
      name: {
        alpha,
        required
      },
      description: {
        required
      }
    }
  },
  methods: {
    createRow(formData) {
      if (this.$v.$invalid === true) {
        return;
      }

      this.$store.dispatch("createRow", formData);
      this.$message.success("Post created");
      this.$router.push("/");
    }
  }
};
</script>
<style lang='scss' scoped>
.create-form {
  width: 100%;
}
.errors {
  margin-bottom: 10px;
  margin-left: 120px;
}
.error {
  margin: 3px 0;
}
</style>