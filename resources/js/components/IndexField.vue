<template>
  <span style="background-color: red">{{ fieldValue }}</span>
    <div :class="`text-${field.textAlign}`" style="background-color: red; color:blue; text-transform: capitalize">
        <template v-if="fieldValue">
            <div style="background-color: red; color:blue; text-transform: capitalize" v-if="shouldDisplayAsHtml" @click.stop v-html="fieldValue"></div>
            <span style="background-color: red; color:blue; text-transform: capitalize" v-else class="whitespace-nowrap">{{ fieldValue }}</span>
        </template>
        <p v-else>&mdash;</p>
    </div>
</template>

<script>
export default {
  props: ['resourceName', 'field'],

  computed: {
    fieldValue() {
      return this.field.displayedAs || this.field.value
    },
  }
}
</script>

