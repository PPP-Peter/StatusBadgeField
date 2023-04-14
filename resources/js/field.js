import IndexField from './components/IndexField'
import FormField from './components/FormField'
import DetailField from './components/DetailField'
//import FormField from '../../../../vendor/laravel/nova/resources/js/fields/Form/BelongsToField.vue'
//import DetailField from '../../../../vendor/laravel/nova/resources/js/fields/Detail/BelongsToField.vue'




Nova.booting((app, store) => {
    app.component('index-status-badge-field', IndexField)
    app.component('detail-status-badge-field', DetailField)
    app.component('form-status-badge-field', FormField)
 // app.component('detail-belongs-to-field', DetailField)
 //   app.component('form-belongs-to-field', FormField)
})
