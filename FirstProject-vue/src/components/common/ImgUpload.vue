<template>
  <el-upload
    class="img-upload"
    ref="upload"
    action="http://localhost:8443/api/covers"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :on-success="handleSuccess"
    multiple
    :limit="1"
    :on-exceed="handleExceed"
    :file-list="fileList"
    :beforeUpload="beforeAvatarUpload">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10mb</div>
  </el-upload>
</template>

<script>
  export default {
    name: 'ImgUpload',
    data () {
      return {
        fileList: [],
        url: ''
      }
    },
    methods: {
      handleRemove (file, fileList) {
      },
      handlePreview (file) {
      },
      handleExceed (files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove (file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`)
      },
      handleSuccess (response) {
        this.url = response
        this.$emit('onUpload')
        this.$message.warning('上传成功')
      },
      beforeAvatarUpload(file) {
        let testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
        console.log(testmsg)
        const extension =
          testmsg === "jpg" ||
          testmsg === "JPG" ||
          testmsg === "jpeg" ||
          testmsg === "JPEG" ||
          testmsg === "png" ||
          testmsg === "PNG" ||
          testmsg === "bpm" ||
          testmsg === "BPM";
        const isLt50M = file.size / 1024 / 1024 < 10;
        if (!extension) {
          this.$message({
            message: "上传图片只能是jpg / jpeg / png / bpm格式!",
            type: "error"
          });
          return false; //必须加上return false; 才能阻止
        }
        console.log(file);
        if (!isLt50M) {
          this.$message({
            message: "上传文件大小不能超过 10MB!",
            type: "error"
          });
          return false;
        }
        return extension || isLt50M;
      },
      clear () {
        this.$refs.upload.clearFiles()
      }
    }
  }
</script>
