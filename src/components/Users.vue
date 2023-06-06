<template>
    <div class="insert-form-container">
      <el-card class="insert-form-card">
        <h3 class="insert-form-title">Insert Data</h3>
        <el-form :model="formData" :rules="formRules" ref="insertForm" class="insert-form">
          <el-form-item v-for="field in tableFields" :key="field.column" :prop="field.column" :label="field.column">
            <el-input v-model="formData[field.column]"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">Submit</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {},
        formRules: {},
        tableFields: [
          { column: 'field1' },
          { column: 'field2' },
          { column: 'field3' },
          // Add more fields here
        ],
      };
    },
    methods: {
      submitForm() {
        this.$refs.insertForm.validate((valid) => {
          if (valid) {
            // Make an API call to insert data into MySQL
            // You can use libraries like Axios or fetch for the API call
  
            // Example using Axios:
            // axios.post('/api/insertData', this.formData)
            //   .then(response => {
            //     // Handle success
            //   })
            //   .catch(error => {
            //     // Handle error
            //   });
  
            // Clear the form after successful submission
            this.$refs.insertForm.resetFields();
            this.$message.success('Data inserted successfully');
          } else {
            this.$message.error('Please fill in all the required fields');
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .insert-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f7fa;
  }
  
  .insert-form-card {
    width: 400px;
  }
  
  .insert-form-title {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .insert-form {
    padding: 20px;
  }
  </style>