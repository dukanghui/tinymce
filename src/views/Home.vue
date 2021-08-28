<template>
  <div class="home">
    <div style="height: 300px;"></div>
    <button @click="setContent()">upload</button>
    <!-- <vue-tinymce id="tiny" v-model="content" :setting="setting" /> -->
    <!-- <Editor id="tinymce" v-model="tinymceHtml" :init="editorInit"></Editor> -->
    <div id="tiny"></div>
  </div>
</template>

<script>
import tinymce from 'tinymce'
export default {
  name: 'Home',
  data() {
    return {
      content: '',
      setting: {
        language: 'zh_CN',
        menubar: '',
        fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
        // plugins: 'searchreplace autolink directionality visualblocks visualchars fullscreen link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave autoresize axupimgs indent2em',
        plugins: 'example searchreplace autolink directionality visualblocks visualchars fullscreen link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave autoresize indent2em',
        toolbar: 'example code undo redo restoredraft forecolor backcolor bold italic underline strikethrough link anchor alignleft aligncenter alignright alignjustify outdent indent indent2em styleselect formatselect fontselect fontsizeselect bullist numlist blockquote subscript superscript removeformat table axupimgs media hr pagebreak insertdatetime print preview fullscreen',
        // toolbar: 'code undo redo restoredraft forecolor backcolor bold italic underline strikethrough link anchor alignleft aligncenter alignright alignjustify outdent indent styleselect formatselect fontselect fontsizeselect bullist numlist blockquote subscript superscript removeformat table media hr pagebreak insertdatetime print preview fullscreen',
        height: 650, // 编辑器高度
        min_height: 400,
        max_height: 800,
        toolbar_sticky: true
      }
    }
  },
  mounted() {
    this.content = 'asdf'
    this.init()
  },
  methods: {
    init() {
      tinymce.init({
        selector: '#tiny',
        language: 'zh_CN',
        menubar: '',
        fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
        // plugins: 'searchreplace autolink directionality visualblocks visualchars fullscreen link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave autoresize axupimgs indent2em',
        plugins: 'example searchreplace autolink directionality visualblocks visualchars fullscreen link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave autoresize indent2em',
        toolbar: 'example code undo redo restoredraft forecolor backcolor bold italic underline strikethrough link anchor alignleft aligncenter alignright alignjustify outdent indent indent2em styleselect formatselect fontselect fontsizeselect bullist numlist blockquote subscript superscript removeformat table axupimgs media hr pagebreak insertdatetime print preview fullscreen',
        // toolbar: 'code undo redo restoredraft forecolor backcolor bold italic underline strikethrough link anchor alignleft aligncenter alignright alignjustify outdent indent styleselect formatselect fontselect fontsizeselect bullist numlist blockquote subscript superscript removeformat table media hr pagebreak insertdatetime print preview fullscreen',
        height: 650, // 编辑器高度
        min_height: 400,
        max_height: 800,
        toolbar_sticky: true
      })
      setTimeout(() => {
        this.setContent()
      }, 1000)
    },
    setContent() {
      tinymce.get('tiny').insertContent(this.content)
    }
  }
}
</script>
