import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
    app.component('index-input-mask', IndexField)
    app.component('detail-input-mask', DetailField)
    app.component('form-input-mask', FormField)
})
