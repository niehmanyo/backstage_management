<template>
    
       
   <div>
      <el-result
        icon="warning"
        title="404 Warning"
        sub-title="No This Page">
        <template #extra>
          <el-button type="primary" @click = "$router.push('/')">Back</el-button>
        </template>
      </el-result>
    </div>
        
 
</template>